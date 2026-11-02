// Clinic kit catalogue. One record per kit, English and Turkish side by side.
// Adding a kit: add a record here, drop its images in public/images/kits/<id>/ and
// its builder videos in public/video/. The EN and TR pages are generated from this file.

const etsy = (id) => `https://www.etsy.com/listing/${id}`;

export const SHOP = 'https://www.etsy.com/shop/SilitLabs';

export const kits = [
  {
    id: 'dental',
    slug: { en: 'dental-patient-kit', tr: 'dis-klinigi-hasta-kiti' },
    name: { en: 'Dental Clinic Patient Kit', tr: 'Diş Kliniği Hasta Kiti' },
    short: { en: 'Dental', tr: 'Diş' },
    audience: { en: 'For dental and dental tourism clinics', tr: 'Diş klinikleri ve diş turizmi klinikleri için' },
    seoTitle: {
      en: 'Dental Clinic Patient Kit: Consent Forms and Treatment Plan Template',
      tr: 'Diş Kliniği Hasta Kiti: Onam Formları ve Tedavi Planı Şablonu'
    },
    seoDesc: {
      en: 'Editable dental clinic documents: 8 consent forms, medical history form, treatment plan with a clickable smile map, aftercare guide, patient passport and 10 social posts. English and Turkish.',
      tr: 'Diş klinikleri için düzenlenebilir hasta dokümanları: 8 onam formu, sağlık formu, tıklanabilir gülüş haritalı tedavi planı, bakım rehberi, hasta pasaportu ve 10 sosyal medya postu. TR ve EN.'
    },
    lead: {
      en: 'Every document your dental clinic hands a patient, from the first WhatsApp message to the last check-up. 15 documents, 33 pages and 10 social media posts, ready to brand with your logo and colour in minutes.',
      tr: 'Hastanıza verdiğiniz tüm dokümanlar tek pakette: karşılamadan son kontrole kadar 15 doküman, 33 sayfa ve 10 sosyal medya postu. Logonuzu, renginizi ve iletişim bilgilerinizi bir kez girin, tüm sayfalar güncellensin.'
    },
    price: 19,
    etsy: etsy('4607493033'),
    pages: 33,
    og: '/images/og/dental.jpg',
    video: { en: '/video/dental-builder-en.mp4', tr: '/video/dental-builder-tr.mp4' },
    img: {
      hero: '/images/kits/dental/hero.webp',
      inside: '/images/kits/dental/inside.webp',
      map: '/images/kits/dental/smile-map.webp',
      consent: '/images/kits/dental/consent-forms.webp',
      styles: '/images/kits/dental/styles.webp',
      marketing: '/images/kits/dental/marketing-set.webp',
      extra: '/images/kits/dental/journey.webp',
      trHero: '/images/kits/dental/tr-kapak.webp',
      trInside: '/images/kits/dental/tr-icerik.webp',
      trMarketing: '/images/kits/dental/tr-pazarlama-seti.webp',
      trStyles: '/images/kits/dental/tr-stiller.webp'
    },
    highlights: {
      en: ['Treatment plan with a clickable smile map', '8 consent forms, A to H, with Word files', 'Patient passport, aftercare guide and phone screens', '10 social media posts, price list, vouchers and cards'],
      tr: ['Tıklanabilir gülüş haritalı tedavi planı', 'A ile H arası 8 onam formu, Word dosyalarıyla', 'Hasta pasaportu, bakım rehberi ve telefon ekranları', '10 sosyal medya postu, fiyat listesi, hediye çeki ve kartlar']
    },
    map: {
      title: { en: 'A smile map you click, not draw', tr: 'Çizmeden, tıklayarak gülüş haritası' },
      text: {
        en: 'Click a tooth to switch between implant, zirconium crown, emax crown, emax laminate veneer, root canal, extraction and missing tooth. The legend counts every treatment for you, and the same map carries over to the patient passport.',
        tr: 'Dişe tıklayarak implant, zirkonyum kron, emax kron, emax laminate veneer, kanal tedavisi, çekim ve eksik diş arasında geçin. Lejant tedavileri sizin yerinize sayar, aynı harita hasta pasaportunda da kullanılır.'
      }
    },
    consent: {
      count: 8, range: 'A to H', rangeTr: 'A ile H arası',
      forms: {
        en: ['General dental treatment', 'Dental implants', 'Zirconium crowns and bridges', 'Emax laminate veneers', 'Root canal treatment', 'Teeth whitening', 'Sedation and anaesthesia', 'Photos, video and marketing'],
        tr: ['Genel diş tedavisi', 'Diş implantı', 'Zirkonyum kron ve köprü', 'Emax laminate veneer', 'Kanal tedavisi', 'Diş beyazlatma', 'Sedasyon ve anestezi', 'Fotoğraf, video ve pazarlama']
      }
    },
    docs: {
      en: ['Welcome and travel guide', 'Medical and dental health questionnaire', 'Treatment plan with a clickable smile map', 'Payment, deposit and cancellation policy', 'Daily schedule for the treatment week', 'Consent forms A to H', 'Aftercare guide plus 3 phone screens', 'Treatment passport plus a digital card', 'Feedback survey plus an A6 review card', 'WhatsApp library with 18 ready messages', 'Treatment menu and price list', 'Gift vouchers', 'Appointment cards', 'Aftercare cards for 8 treatments', '10 social media posts'],
      tr: ['Karşılama ve seyahat rehberi', 'Sağlık formu', 'Gülüş haritalı tedavi planı', 'Ödeme, kapora ve iptal politikası', 'Tedavi haftası günlük programı', 'A ile H arası onam formları', 'Bakım rehberi ve 3 telefon ekranı', 'Tedavi pasaportu ve dijital kart', 'Memnuniyet anketi ve A6 yorum kartı', '18 hazır WhatsApp mesajı', 'Fiyat listesi ve paketler', 'Hediye çekleri', 'Randevu kartları', '8 tedavi için bakım kartları', '10 sosyal medya postu']
    },
    word: { en: 'health questionnaire, payment policy and the 8 consent forms', tr: 'sağlık formu, ödeme politikası ve 8 onam formu' },
    packs: [
      { en: 'Consent and intake forms pack', tr: 'Onam ve sağlık formu paketi', price: 14, url: etsy('4607518756') },
      { en: 'Treatment plan and passport pack', tr: 'Tedavi planı ve pasaport paketi', price: 14, url: etsy('4607519666') },
      { en: 'Aftercare and reviews pack', tr: 'Bakım ve yorum paketi', price: 14, url: etsy('4607520398') },
      { en: '8 dental consent forms', tr: '8 diş hekimliği onam formu', price: 6, url: etsy('4607500547') },
      { en: 'Dental medical history form', tr: 'Hasta sağlık formu', price: 6, url: etsy('4607501153') },
      { en: 'Treatment plan with smile map', tr: 'Gülüş haritalı tedavi planı', price: 6, url: etsy('4607522614') },
      { en: 'Dental aftercare instructions', tr: 'Bakım talimatları', price: 6, url: etsy('4607523348') }
    ],
    guide: 'dental-treatment-plan-template'
  },
  {
    id: 'aesthetic',
    slug: { en: 'aesthetic-clinic-kit', tr: 'estetik-klinik-kiti' },
    name: { en: 'Aesthetic Clinic Kit', tr: 'Estetik Klinik Kiti' },
    short: { en: 'Aesthetic', tr: 'Estetik' },
    audience: { en: 'For aesthetic clinics, med spas and injectors', tr: 'Medikal estetik klinikleri ve uygulayıcılar için' },
    seoTitle: {
      en: 'Aesthetic Clinic and Med Spa Kit: Consent Forms and Face Chart',
      tr: 'Estetik Klinik Kiti: Onam Formları ve Yüz Haritası'
    },
    seoDesc: {
      en: 'Editable med spa and aesthetic clinic documents: 12 consent forms, client intake form, injector face chart with product and lot log, aftercare guide and 10 social posts. English and Turkish.',
      tr: 'Medikal estetik klinikleri için düzenlenebilir danışan dokümanları: 12 onam formu, danışan formu, ürün ve lot kayıtlı yüz haritası, bakım rehberi ve 10 sosyal medya postu. TR ve EN.'
    },
    lead: {
      en: 'Every document your aesthetic clinic or med spa needs, from the first enquiry to the next top-up. 15 documents, 38 pages and 10 social media posts, ready to brand with your logo and colour in minutes.',
      tr: 'Danışanınıza verdiğiniz tüm dokümanlar tek pakette: gelen ilk mesajdan bir sonraki seansa kadar 15 doküman, 38 sayfa ve 10 sosyal medya postu. Logonuzu, renginizi ve iletişim bilgilerinizi bir kez girin, tüm sayfalar güncellensin.'
    },
    price: 19,
    etsy: etsy('4607503613'),
    pages: 38,
    og: '/images/og/aesthetic.jpg',
    video: { en: '/video/aesthetic-builder-en.mp4', tr: '/video/aesthetic-builder-tr.mp4' },
    img: {
      hero: '/images/kits/aesthetic/hero.webp',
      inside: '/images/kits/aesthetic/inside.webp',
      map: '/images/kits/aesthetic/face-map.webp',
      consent: '/images/kits/aesthetic/consent-forms.webp',
      styles: '/images/kits/aesthetic/styles.webp',
      marketing: '/images/kits/aesthetic/marketing-set.webp',
      extra: '/images/kits/aesthetic/record-and-card.webp',
      trHero: '/images/kits/aesthetic/tr-kapak.webp',
      trInside: '/images/kits/aesthetic/tr-icerik.webp',
      trMarketing: '/images/kits/aesthetic/tr-pazarlama-seti.webp',
      trStyles: '/images/kits/aesthetic/tr-formatlar.webp'
    },
    highlights: {
      en: ['Treatment plan with a clickable face map', '12 consent forms, A to L, with Word files', 'Treatment record and injector face chart with lot log', '10 social media posts, price list, vouchers and cards'],
      tr: ['Tıklanabilir yüz haritalı uygulama planı', 'A ile L arası 12 onam formu, Word dosyalarıyla', 'Ürün ve lot kayıtlı uygulama kaydı ve yüz haritası', '10 sosyal medya postu, fiyat listesi, hediye çeki ve kartlar']
    },
    map: {
      title: { en: 'A face chart your injectors will actually use', tr: 'Uygulayıcılarınızın gerçekten kullanacağı yüz haritası' },
      text: {
        en: 'Click an area on the face map to switch between anti-wrinkle, filler, skin booster, microneedling, peel, PRP and laser. The legend counts them for you, and the treatment record keeps product, lot number and units next to the chart.',
        tr: 'Yüz haritasında bir bölgeye tıklayarak botoks, dolgu, cilt gençleştirme, dermapen, peeling, PRP ve lazer arasında geçin. Lejant uygulamaları sayar; uygulama kaydı ürün, lot numarası ve ünite bilgisini haritanın yanında tutar.'
      }
    },
    consent: {
      count: 12, range: 'A to L', rangeTr: 'A ile L arası',
      forms: {
        en: ['Anti-wrinkle injections', 'Dermal fillers', 'Skin boosters and mesotherapy', 'Microneedling', 'Chemical peel', 'PRP', 'Laser and IPL', 'Photos and marketing', 'Biostimulators', 'PDO thread lift', 'Polynucleotides', 'Fat-dissolving injections'],
        tr: ['Botoks', 'Dolgu', 'Cilt gençleştirme ve mezoterapi', 'Dermapen', 'Kimyasal peeling', 'PRP', 'Lazer ve IPL', 'Fotoğraf ve pazarlama', 'Biyostimülatör', 'PDO ip askı', 'Polinükleotid', 'Yağ eritme']
      }
    },
    docs: {
      en: ['Welcome and first visit guide', 'Client intake and medical history', 'Treatment plan with a clickable face map', 'Payment, deposit and cancellation policy', 'Treatment record and injector face chart', 'Consent forms A to L', 'Aftercare guide plus 3 phone screens', 'Client treatment card plus a digital card', 'Feedback survey plus an A6 review card', 'WhatsApp library with 18 ready messages', 'Treatment menu and price list', 'Gift vouchers', 'Appointment cards', 'Aftercare cards for 12 treatments', '10 social media posts'],
      tr: ['Hoş geldiniz ve ilk ziyaret rehberi', 'Danışan bilgi formu ve sağlık geçmişi', 'Yüz haritalı uygulama planı', 'Ödeme, kapora ve iptal politikası', 'Uygulama kaydı ve yüz haritası', 'A ile L arası onam formları', 'Bakım rehberi ve 3 telefon ekranı', 'Danışan uygulama kartı ve dijital kart', 'Memnuniyet anketi ve A6 yorum kartı', '18 hazır WhatsApp mesajı', 'Fiyat listesi ve uygulama kürleri', 'Hediye çekleri', 'Randevu kartları', '12 uygulama için bakım kartları', '10 sosyal medya postu']
    },
    word: { en: 'client intake form, payment policy and the 12 consent forms', tr: 'danışan formu, ödeme politikası ve 12 onam formu' },
    packs: [
      { en: 'Consent and client intake pack', tr: 'Onam ve danışan formu paketi', price: 14, url: etsy('4608085187') },
      { en: 'Aftercare and reviews pack', tr: 'Bakım ve yorum paketi', price: 14, url: etsy('4608086403') },
      { en: '12 aesthetic consent forms', tr: '12 estetik onam formu', price: 6, url: etsy('4608087129') },
      { en: 'Injector face chart and treatment plan', tr: 'Yüz haritası ve uygulama planı', price: 6, url: etsy('4608107624') }
    ],
    guide: 'dermal-filler-consent-form'
  },
  {
    id: 'hair',
    slug: { en: 'hair-transplant-clinic-kit', tr: 'sac-ekimi-klinik-kiti' },
    name: { en: 'Hair Transplant Clinic Kit', tr: 'Saç Ekimi Klinik Kiti' },
    short: { en: 'Hair transplant', tr: 'Saç ekimi' },
    audience: { en: 'For hair transplant clinics', tr: 'Saç ekimi klinikleri için' },
    seoTitle: {
      en: 'Hair Transplant Clinic Kit: Consent Forms, Graft Map and Aftercare',
      tr: 'Saç Ekimi Klinik Kiti: Onam Formları, Greft Haritası ve Bakım'
    },
    seoDesc: {
      en: 'Editable hair transplant clinic documents: 6 consent forms including FUE and DHI, medical form with Norwood stage, graft map treatment plan, aftercare guide with washing routine and 10 social posts.',
      tr: 'Saç ekimi klinikleri için düzenlenebilir hasta dokümanları: FUE ve DHI dahil 6 onam formu, Norwood evreli sağlık formu, greft haritalı tedavi planı, yıkama rutinli bakım rehberi ve 10 sosyal medya postu.'
    },
    lead: {
      en: 'Every document your hair transplant clinic needs, from the first photo to the 12-month result. 15 documents, 31 pages and 10 social media posts, ready to brand with your logo and colour in minutes.',
      tr: 'Hastanıza verdiğiniz tüm dokümanlar tek pakette: gelen ilk fotoğraftan 12. ay sonucuna kadar 15 doküman, 31 sayfa ve 10 sosyal medya postu. Logonuzu, renginizi ve iletişim bilgilerinizi bir kez girin, tüm sayfalar güncellensin.'
    },
    price: 19,
    etsy: etsy('4607504453'),
    pages: 31,
    og: '/images/og/hair.jpg',
    video: { en: '/video/hair-builder-en.mp4', tr: '/video/hair-builder-tr.mp4' },
    img: {
      hero: '/images/kits/hair/hero.webp',
      inside: '/images/kits/hair/inside.webp',
      map: '/images/kits/hair/graft-map.webp',
      consent: '/images/kits/hair/consent-forms.webp',
      styles: '/images/kits/hair/styles.webp',
      marketing: '/images/kits/hair/marketing-set.webp',
      extra: '/images/kits/hair/record-and-card.webp',
      trHero: '/images/kits/hair/tr-kapak.webp',
      trInside: '/images/kits/hair/tr-icerik.webp',
      trMarketing: '/images/kits/hair/tr-pazarlama-seti.webp',
      trStyles: '/images/kits/hair/tr-formatlar.webp'
    },
    highlights: {
      en: ['Treatment plan with a clickable graft map', '6 consent forms, A to F, including FUE and DHI', 'Surgery record with graft count by zone', 'Aftercare with washing routine and growth timeline'],
      tr: ['Tıklanabilir greft haritalı tedavi planı', 'FUE ve DHI dahil A ile F arası 6 onam formu', 'Bölge bölge greft sayımlı operasyon kaydı', 'Yıkama rutini ve saç çıkış takvimli bakım rehberi']
    },
    map: {
      title: { en: 'A graft map patients understand at a glance', tr: 'Hastanın ilk bakışta anladığı greft haritası' },
      text: {
        en: 'Click a zone on the scalp map to switch between FUE, DHI, densification, PRP and donor area. The legend counts them for you, and the surgery record logs the graft count for each zone.',
        tr: 'Saç haritasında bir bölgeye tıklayarak FUE, DHI, sıklaştırma, PRP ve donör bölge arasında geçin. Lejant bölgeleri sayar; operasyon kaydı her bölgenin greft sayısını tutar.'
      }
    },
    consent: {
      count: 6, range: 'A to F', rangeTr: 'A ile F arası',
      forms: {
        en: ['FUE and DHI hair transplant surgery', 'Local anaesthesia and sedation', 'Beard and eyebrow transplant', 'PRP', 'Hair loss medication', 'Photos and marketing'],
        tr: ['FUE ve DHI saç ekimi', 'Lokal anestezi ve sedasyon', 'Sakal ve kaş ekimi', 'PRP', 'Saç dökülmesi ilaçları', 'Fotoğraf ve pazarlama']
      }
    },
    docs: {
      en: ['Welcome and travel guide', 'Medical form with hair loss history and Norwood stage', 'Treatment plan with a clickable graft map', 'Payment, deposit and cancellation policy', 'Surgery record with graft count by zone', 'Consent forms A to F', 'Aftercare guide plus 3 phone screens', 'Patient graft card plus a digital card', 'Feedback survey plus an A6 review card', 'WhatsApp library with 18 ready messages', 'Treatment menu and price list', 'Gift vouchers', 'Appointment cards', 'Aftercare cards for 8 topics', '10 social media posts'],
      tr: ['Hoş geldiniz ve seyahat rehberi', 'Saç dökülmesi geçmişi ve Norwood evreli sağlık formu', 'Greft haritalı tedavi planı', 'Ödeme, kapora ve iptal politikası', 'Bölge bölge greft sayımlı operasyon kaydı', 'A ile F arası onam formları', 'Bakım rehberi ve 3 telefon ekranı', 'Hasta greft kartı ve dijital kart', 'Memnuniyet anketi ve A6 yorum kartı', '18 hazır WhatsApp mesajı', 'Fiyat listesi ve paketler', 'Hediye çekleri', 'Randevu kartları', '8 konu için bakım kartları', '10 sosyal medya postu']
    },
    word: { en: 'medical form, payment policy and the 6 consent forms', tr: 'sağlık formu, ödeme politikası ve 6 onam formu' },
    packs: [
      { en: 'Consent and medical form pack', tr: 'Onam ve sağlık formu paketi', price: 14, url: etsy('4608108706') },
      { en: 'Aftercare and reviews pack', tr: 'Bakım ve yorum paketi', price: 14, url: etsy('4608109288') },
      { en: '6 hair transplant consent forms', tr: '6 saç ekimi onam formu', price: 6, url: etsy('4608090517') },
      { en: 'Graft map plan and surgery record', tr: 'Greft haritalı plan ve operasyon kaydı', price: 6, url: etsy('4608110882') }
    ],
    guide: 'hair-transplant-aftercare-instructions'
  }
];

export const kitPath = (kit, lang) => lang === 'tr' ? `/tr/klinik-kitleri/${kit.slug.tr}/` : `/clinic-kits/${kit.slug.en}/`;
export const SETUP_PRICE_TRY = '₺3.990';
