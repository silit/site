// A throwaway probe (branch vr-probe only, never merged): shows which headers reach a function behind a rewrite.
// Addresses are never printed, only a short fingerprint, so two views of the same visitor can be compared.
import crypto from 'node:crypto';

const fp = (v) => {
  const s = String(v || '');
  if (!s) return '';
  const parts = s.split(',').map((x) => x.trim()).filter(Boolean);
  return parts.map((p) => (p.includes(':') ? 'v6:' : 'v4:') + crypto.createHash('sha256').update('probe:' + p).digest('hex').slice(0, 8)).join(' , ');
};

export default function handler(req, res) {
  const h = req.headers;
  const out = {
    url: req.url,
    method: req.method,
    host: h.host || '',
    'x-forwarded-host': h['x-forwarded-host'] || '',
    'x-forwarded-proto': h['x-forwarded-proto'] || '',
    'x-forwarded-for': fp(h['x-forwarded-for']),
    'x-real-ip': fp(h['x-real-ip']),
    'x-vercel-forwarded-for': fp(h['x-vercel-forwarded-for']),
    'x-vercel-proxied-for': fp(h['x-vercel-proxied-for']),
    seen: fp(new URL(req.url, 'http://local').searchParams.get('seen')),
    'x-vercel-ip-country': h['x-vercel-ip-country'] || '',
    'x-vercel-id': h['x-vercel-id'] || '',
    'x-vercel-deployment-url': h['x-vercel-deployment-url'] || '',
    origin: h.origin || '',
    names: Object.keys(h).filter((k) => !/cookie|authorization|jwt|signature|token|secret/i.test(k)).sort()
  };
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(out, null, 1));
}
