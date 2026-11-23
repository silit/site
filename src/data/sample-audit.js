// The numbers of the sample report (silitlabs.com/ai-visibility-report/sample), for the pages that show a piece of it.
// They are copied from the report's own sample (api/_lib/vr/sample.json in the AI SEO Deck app): when the sample
// changes there, change them here, so that what a page shows is what a visitor finds when they open the sample.
// Casa Aldora and the other hotels are made up.

// One mark per answer: 1 the answer named the business, 0 it answered without it, null Google showed no AI answer.
// The four chat engines are asked twice, the two Google surfaces once.
export const SAMPLE = {
  brand: 'Casa Aldora',
  what: 'a made-up boutique hotel in Lisbon',
  asked: 'the United Kingdom',
  engines: ['ChatGPT', 'AI Overviews', 'AI Mode', 'Gemini', 'Claude', 'Grok'],
  searches: [
    { keyword: 'boutique hotel alfama', volume: 590, cells: [[1, 0], [0], [1], [1, 1], [0, 0], [1, 0]] },
    { keyword: 'romantic hotels lisbon', volume: 480, cells: [[0, 0], [0], [0], [1, 0], [0, 0], [0, 0]] },
    { keyword: 'quiet hotel lisbon', volume: 110, cells: [[0, 0], [null], [0], [0, 0], [0, 0], [0, 0]] },
    { keyword: 'hotels near santa apolonia station', volume: 90, cells: [[1, 1], [1], [1], [1, 0], [0, 0], [1, 1]] },
    { keyword: 'lisbon hotel with roof terrace', volume: 70, cells: [[0, 1], [0], [0], [0, 0], [0, 0], [1, 0]] }
  ],
  answers: 49,
  named: 15,
  cited: 7,
  first: 6,
  // The five steps the report measures, lowest first. `p` is the share measured, `evidence` the line under it.
  ladder: [
    { name: 'Readable', q: 'Can AI crawlers open and read your site?', p: 0.83, evidence: '481 words in the page code, 5 of 6 AI search crawlers allowed in.' },
    { name: 'Known', q: 'Does AI know who you are when asked by name?', p: 0.38, evidence: '1 of 4 engines describe you correctly when asked by name, 1 confuses you with another business.' },
    { name: 'Named', q: 'Does AI name you when customers ask for what you sell?', p: 0.31, evidence: 'Named in 15 of 49 answers.' },
    { name: 'Cited', q: 'Does AI use your website as a source?', p: 0.14, evidence: 'Your site is a source in 7 of 49 answers.' },
    { name: 'First', q: 'Are you the first name in the answer?', p: 0.12, evidence: 'First name in 6 of 49 answers.' }
  ],
  start: 'Readable', // the lowest step that is not solid: where the report says to begin
  rival: { name: 'Hotel Marquês Azul', named: 37 }, // the name that comes up most
  gap: { keyword: 'romantic hotels lisbon', volume: 480, named: 1, answers: 10 }, // the most searched one it is missing from
  fixes: 9 // items in the fix kit
};

// Three of the sample's five searches on Google AI Overviews: the three things that can happen to a search.
// `segs` is the Overview's text: a plain string, or [name, 'you' | 'rival'] for a name the report marks.
// `sources` are the pages the Overview linked to; `via` is the one of them that lists the hotel.
export const OVERVIEWS = [
  {
    keyword: 'boutique hotel alfama', volume: 590, state: 'absent',
    segs: ['Popular boutique hotels in Alfama, Lisbon include ', ['The Lumiar House', 'rival'], ', ', ['Hotel Marquês Azul', 'rival'], ' and ', ['Solar das Andorinhas', 'rival'], '. Travelers choose the area for its historic streets, viewpoints and Fado houses. Prices are usually lower from November to February.'],
    sources: ['lisbonweekender.example', 'booking.com', 'tripadvisor.com']
  },
  { keyword: 'quiet hotel lisbon', volume: 110, state: 'none' },
  {
    keyword: 'hotels near santa apolonia station', volume: 90, state: 'named',
    segs: ['Hotels near Santa Apolónia station in Lisbon include ', ['Casa Aldora', 'you'], ', ', ['Hotel Marquês Azul', 'rival'], ' and ', ['Travessa Nove Suites', 'rival'], '. The station is on the edge of the Alfama district.'],
    sources: ['alfamaguide.example', 'booking.com'], via: 'alfamaguide.example'
  }
];

// One question of the sample put to Gemini twice: the search it wrote for itself, its answer and the pages it drew on.
// `own` marks the business's own site among the sources.
export const TWICE = {
  question: 'I arrive in Lisbon by train late at night. Which hotel near Santa Apolónia station is easy to reach?',
  tries: [
    {
      state: 'named', search: 'hotels near Santa Apolónia station',
      segs: ['Close to Santa Apolónia you will find ', ['Casa Aldora', 'you'], ', a six-minute walk from the station, and ', ['Hotel Marquês Azul', 'rival'], ', about ten minutes away. For a late arrival, a hotel with a 24-hour desk such as ', ['Hotel Marquês Azul', 'rival'], ' is the safer choice.'],
      sources: [['casaaldora.example', 'own'], ['alfamaguide.example']]
    },
    {
      state: 'absent', search: 'Lisbon hotel late check-in near station',
      segs: [['Hotel Marquês Azul', 'rival'], ' and ', ['Travessa Nove Suites', 'rival'], ' are both near Santa Apolónia station and suit late arrivals, the first with a night desk and the second with self check-in.'],
      sources: [['alfamaguide.example']]
    }
  ]
};

export const namedIn = (search) => search.cells.flat().filter((m) => m === 1).length;
export const answersIn = (search) => search.cells.flat().filter((m) => m !== null).length;
