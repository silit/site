// Template catalogue: spreadsheet templates and Webflow templates, English and Turkish side by side.
// Adding a template: add a record here with its `kind`, put its images in public/images/templates/<id>/
// and its 1200x630 share image in public/images/og/, then add its EN/TR pair to PAIRS in src/data/site.js.
// The EN and TR pages, the hub, the home shelf and the footer all read from this file.
//
// A template with `price` and `etsy` is on sale. One with `preview` and `statusNote` is not on sale yet:
// its page shows the live preview and the status instead of a price.

const etsy = (id) => `https://www.etsy.com/listing/${id}`;
const pic = (src, w, h, en, tr) => ({ src, w, h, alt: { en, tr } });

// Kinds group templates on the hub. Add a kind here before adding the first template of a new kind.
export const KINDS = [
  {
    id: 'sheets',
    anchor: 'spreadsheets',
    name: { en: 'Spreadsheet templates', tr: 'Tablo şablonları' },
    line: {
      en: 'Google Sheets and Excel templates your team fills in every day. No add-ons and no code.',
      tr: 'Ekibinizin her gün doldurduğu Google Sheets ve Excel şablonları. Eklenti ya da kod gerekmez.'
    }
  },
  {
    id: 'webflow',
    anchor: 'webflow',
    name: { en: 'Webflow templates', tr: 'Webflow şablonları' },
    line: {
      en: 'Complete Webflow sites for clinics that treat patients from abroad, built with native Webflow tools.',
      tr: "Yurt dışından hasta ağırlayan klinikler için Webflow'un kendi araçlarıyla kurulmuş eksiksiz siteler."
    }
  }
];

const LT = '/images/templates/lead-tracker';
const CV = '/images/templates/curavia';

export const templates = [
  {
    id: 'lead-tracker',
    kind: 'sheets',
    slug: { en: 'clinic-lead-tracker', tr: 'klinik-lead-takip-tablosu' },
    name: { en: 'Clinic Lead Tracker', tr: 'Klinik Lead Takip Tablosu' },
    tagline: { en: 'Google Sheets and Excel', tr: 'Google Sheets ve Excel' },
    audience: {
      en: 'For dental, hair transplant, aesthetic and health tourism clinics',
      tr: 'Diş, saç ekimi, estetik ve sağlık turizmi klinikleri için'
    },
    seoTitle: {
      en: 'Clinic Lead Tracker: Google Sheets and Excel Template for Patient Enquiries',
      tr: 'Klinik Lead Takip Tablosu: Google Sheets ve Excel Şablonu'
    },
    seoDesc: {
      en: 'A lead tracking spreadsheet for dental, hair transplant and aesthetic clinics: log every enquiry, catch overdue follow-ups and see cost per lead, cost per booking and ROAS. Google Sheets and Excel.',
      tr: 'Diş, saç ekimi ve estetik klinikleri için lead takip tablosu: her hasta talebini kaydedin, geciken dönüşleri görün; lead başı maliyet, randevu başı maliyet ve ROAS hesaplansın. Google Sheets ve Excel.'
    },
    lead: {
      en: 'Know where every patient enquiry came from, who is following it up and what each lead really costs. A ready spreadsheet for clinics that run ads and take enquiries on WhatsApp, forms and social media.',
      tr: "Her hasta talebinin nereden geldiğini, kimin takip ettiğini ve bir lead'in size gerçekte kaça mal olduğunu görün. Reklam veren; WhatsApp, form ve sosyal medyadan talep alan klinikler için hazır bir tablo."
    },
    facts: {
      en: ['Google Sheets and Excel', 'Six connected sheets', 'Room for 1,000 leads', 'No add-ons, macros or code'],
      tr: ['Google Sheets ve Excel', 'Birbirine bağlı 6 sayfa', '1.000 lead kapasitesi', 'Eklenti, makro ya da kod yok']
    },
    highlights: {
      en: ['One row per enquiry, with dropdowns for source, treatment, coordinator and status', 'Overdue follow-ups flagged in red, oldest first', 'Cost per lead and cost per booking for every channel', 'A dashboard for the whole year or any month'],
      tr: ['Her talep için bir satır; kaynak, tedavi, koordinatör ve durum açılır listeden', 'Geciken dönüşler kırmızıyla, en eskisi en üstte', 'Her kanal için lead başı ve randevu başı maliyet', 'Tüm yıl ya da istediğiniz ay için özet panel']
    },
    price: 6,
    etsy: etsy('4609373204'),
    jump: { en: 'See the six sheets', tr: '6 sayfayı görün' },
    og: '/images/og/lead-tracker.jpg',
    img: {
      hero: pic(`${LT}/hero.webp`, 1500, 1125, 'Clinic Lead Tracker dashboard and follow-ups sheet in Google Sheets', "Clinic Lead Tracker paneli ve takip sayfası, Google Sheets'te"),
      card: pic(`${LT}/ad-spend.webp`, 1500, 1125, 'Ad Spend sheet feeding cost per lead into the dashboard', 'Lead başı maliyeti panele aktaran Ad Spend sayfası')
    },
    overview: {
      numbered: true,
      h: { en: 'Six sheets that work together', tr: 'Birlikte çalışan 6 sayfa' },
      p: {
        en: 'You fill in Leads and Ad Spend and set up Settings once. Everything else counts, sorts and reports by itself.',
        tr: "Leads ve Ad Spend sayfalarını siz doldurursunuz, Settings'i bir kez ayarlarsınız. Gerisi kendiliğinden sayar, sıralar ve raporlar."
      },
      items: {
        en: [
          ['Start Here', 'Six setup steps and a colour key: yellow cells are settings, white cells are your data, grey cells calculate themselves.'],
          ['Leads', 'One row per enquiry, with dropdowns for source, treatment, coordinator, first reply and status. Statuses are colour coded.'],
          ['Follow-ups', 'Every open lead that is due today or overdue, oldest first, then the next 7 days. Overdue dates turn red.'],
          ['Ad Spend', 'Monthly spend per channel or campaign. Leads and cost per lead count themselves from the Leads sheet.'],
          ['Dashboard', 'Leads, reply speed, bookings, booking rate, cost per lead, cost per booking, revenue and ROAS, for the year or any month.'],
          ['Settings', 'Your clinic name, currency symbol, reporting year and every dropdown list, in one place.']
        ],
        tr: [
          ['Start Here', 'Altı adımlık kurulum ve renk anahtarı: sarı hücreler ayar, beyaz hücreler sizin verileriniz, gri hücreler kendiliğinden hesaplanır.'],
          ['Leads', 'Her talep için bir satır. Kaynak, tedavi, koordinatör, ilk dönüş ve durum açılır listeden seçilir; durumlar renklidir.'],
          ['Follow-ups', "Bugün aranması gereken ve geciken tüm açık lead'ler, en eskisi en üstte; ardından önümüzdeki 7 gün. Geciken tarihler kırmızı."],
          ['Ad Spend', 'Kanal ya da kampanya başına aylık harcama. Lead sayısı ve lead başı maliyet Leads sayfasından kendiliğinden gelir.'],
          ['Dashboard', 'Lead sayısı, dönüş hızı, randevular, randevu oranı, lead başı ve randevu başı maliyet, ciro ve ROAS; tüm yıl ya da herhangi bir ay için.'],
          ['Settings', 'Klinik adı, para birimi simgesi, raporlama yılı ve tüm açılır listeler tek yerde.']
        ]
      }
    },
    sections: [
      {
        img: pic(`${LT}/leads.webp`, 1500, 1125, 'Leads sheet with one row per enquiry and colour-coded statuses', 'Her talebin bir satır olduğu, durumları renkli Leads sayfası'),
        h: { en: 'One row per enquiry', tr: 'Her talep için bir satır' },
        p: {
          en: 'Add each lead the day it arrives and pick the rest from dropdowns: where it came from, which campaign, which treatment, who is handling it, how fast they replied and where it stands now.',
          tr: "Her lead'i geldiği gün ekleyin, gerisini açılır listelerden seçin: nereden geldi, hangi kampanyadan, hangi tedavi için, kim ilgileniyor, ne kadar hızlı dönüldü ve şu an ne durumda."
        },
        list: {
          en: ['Source, campaign, treatment and coordinator', 'First reply: under 5 minutes, under an hour, same day, next day or later', 'Nine colour-coded statuses, from New to Treated', 'Plan value, booking date, revenue and lost reason'],
          tr: ['Kaynak, kampanya, tedavi ve koordinatör', 'İlk dönüş: 5 dakikadan kısa, 1 saatten kısa, aynı gün, ertesi gün ya da daha geç', "New'den Treated'a renkli 9 durum", 'Plan tutarı, randevu tarihi, ciro ve kaybedilme nedeni']
        }
      },
      {
        img: pic(`${LT}/follow-ups.webp`, 1500, 1125, 'Follow-ups sheet listing overdue leads in red, oldest first', "Geciken lead'leri kırmızıyla, en eskisi en üstte listeleyen Follow-ups sayfası"),
        h: { en: 'Who to call today, on one sheet', tr: 'Bugün kimi arayacağınız tek sayfada' },
        p: {
          en: 'Give every open lead a next follow-up date. The Follow-ups sheet lists everything due today or overdue, oldest first, with phone number and notes, and a second list shows the next seven days. Overdue dates turn red.',
          tr: "Her açık lead'e bir sonraki takip tarihini verin. Follow-ups sayfası bugün ve daha önce aranması gerekenleri telefon numarası ve notlarla, en eskisi en üstte listeler; ikinci liste önümüzdeki yedi günü gösterir. Geciken tarihler kırmızıya döner."
        }
      },
      {
        dark: true,
        img: pic(`${LT}/dashboard.webp`, 1500, 1125, 'Dashboard with cost per lead, cost per booking and return on ad spend by lead source', 'Kaynağa göre lead başı maliyet, randevu başı maliyet ve ROAS gösteren panel'),
        h: { en: 'What every channel really costs', tr: 'Her kanalın gerçek maliyeti' },
        p: {
          en: 'Type each month of ad spend per channel or campaign. Leads are matched from the Leads sheet, so cost per lead, cost per booking and return on ad spend work themselves out for Meta, Google, Instagram, WhatsApp, referrals and every other source.',
          tr: "Ad Spend sayfasına her ayın harcamasını kanal ya da kampanya bazında yazın. Lead'ler Leads sayfasından eşleşir; Meta, Google, Instagram, WhatsApp, referans ve diğer tüm kaynaklar için lead başı maliyet, randevu başı maliyet ve reklam getirisi kendiliğinden hesaplanır."
        },
        list: {
          en: ['Leads and fast replies', 'Plans sent and bookings', 'Booking rate', 'Ad spend', 'Cost per lead', 'Cost per booking', 'Revenue and return on ad spend', 'Days from lead to booking'],
          tr: ['Lead sayısı ve hızlı dönüşler', 'Gönderilen planlar ve randevular', 'Randevu oranı', 'Reklam harcaması', 'Lead başı maliyet', 'Randevu başı maliyet', 'Ciro ve reklam getirisi (ROAS)', "Lead'den randevuya geçen gün"]
        }
      },
      {
        img: pic(`${LT}/reports.webp`, 1500, 1125, 'Dashboard month selector with breakdowns by coordinator, treatment and lost reason', 'Ay seçici ile koordinatör, tedavi ve kaybedilme nedenine göre dağılımlar'),
        h: { en: 'Pick a month and every number follows', tr: 'Bir ay seçin, tüm rakamlar güncellensin' },
        p: {
          en: 'Switch the Dashboard between the whole year and any single month. Breakdowns show results by lead source, coordinator and treatment, why leads were lost, and a month by month chart. Bookings and revenue count against the month the lead arrived, so each month shows what its advertising produced.',
          tr: "Paneli tüm yıl ile herhangi bir ay arasında değiştirin. Dağılımlar sonuçları lead kaynağına, koordinatöre ve tedaviye göre, lead'lerin neden kaybedildiğini ve aylık grafiği gösterir. Randevu ve ciro, lead'in geldiği aya yazılır; böylece her ay, o ayın reklamlarının ne getirdiğini gösterir."
        }
      },
      {
        img: pic(`${LT}/settings.webp`, 1500, 1125, 'Settings sheet with clinic name, currency and dropdown lists', 'Klinik adı, para birimi ve açılır listelerin yer aldığı Settings sayfası'),
        h: { en: 'Ready in ten minutes', tr: 'On dakikada hazır' },
        p: {
          en: 'Everything you change lives on the Settings sheet. A year of sample data shows every report working until you clear it.',
          tr: 'Değiştireceğiniz her şey Settings sayfasında. Bir yıllık örnek veri, siz silene kadar tüm raporların nasıl çalıştığını gösterir.'
        },
        steps: {
          en: [['Add your clinic', 'Name, currency symbol and reporting year.'], ['Set your lists', 'Treatments, coordinators, lead sources and lost reasons. Every dropdown updates.'], ['Clear the samples', 'Delete the sample rows in one step. The formulas stay in place.'], ['Start logging', 'Add each enquiry the day it arrives and check Follow-ups every morning.']],
          tr: [['Kliniğinizi ekleyin', 'Klinik adı, para birimi simgesi ve raporlama yılı.'], ['Listelerinizi girin', 'Tedaviler, koordinatörler, lead kaynakları ve kaybedilme nedenleri. Tüm açılır listeler güncellenir.'], ['Örnekleri silin', 'Örnek satırları tek adımda temizleyin, formüller yerinde kalır.'], ['Kayda başlayın', 'Her talebi geldiği gün ekleyin, her sabah Follow-ups sayfasına bakın.']]
        }
      }
    ],
    included: [
      {
        h: { en: 'Works in', tr: 'Nerede çalışır' },
        items: {
          en: ['Google Sheets: make your own copy with one click from the link in the quick start PDF. A free Google account is enough.', 'Excel 2016 or later, on Windows and Mac', 'No add-ons, no macros, no code', 'Room for 1,000 leads and 200 ad spend rows'],
          tr: ["Google Sheets: hızlı başlangıç PDF'indeki bağlantıyla tek tıkla kendi kopyanızı oluşturun. Ücretsiz bir Google hesabı yeterli.", 'Excel 2016 ve sonrası, Windows ve Mac', 'Eklenti, makro ya da kod yok', '1.000 lead ve 200 reklam harcaması satırı kapasitesi']
        }
      },
      {
        h: { en: 'What you get', tr: 'Pakette neler var' },
        items: {
          en: ['Clinic-Lead-Tracker.xlsx', 'A quick start PDF with your Google Sheets copy link and setup steps', 'A year of sample data, cleared in one step', 'Every label and dropdown list can be edited'],
          tr: ['Clinic-Lead-Tracker.xlsx', "Google Sheets kopya bağlantısı ve kurulum adımlarını içeren hızlı başlangıç PDF'i", 'Tek adımda silinen bir yıllık örnek veri', 'Tablo İngilizce; tüm etiketler ve açılır listeler düzenlenebilir']
        }
      }
    ],
    faq: {
      en: [
        ['How do I get the files?', 'Your download is ready right after payment. On Etsy, open Purchases and reviews and click Download files. You get the Excel file and a quick start PDF with the link to make your own Google Sheets copy.'],
        ['Do I need Google Sheets or Excel?', 'Either one. In Google Sheets you make your own copy with one click from the link in the PDF, and a free Google account is enough. The .xlsx file works in Excel 2016 or later on Windows and Mac.'],
        ['Can I change the treatments, sources and team names?', 'Yes. Every dropdown list lives on the Settings sheet, with your clinic name, currency symbol and reporting year. Change a list there and the dropdowns update everywhere.'],
        ['How many leads does it hold?', 'Room for 1,000 leads and 200 ad spend rows. For a new year, make a fresh copy and set the new reporting year on Settings.'],
        ['Where is patient data stored?', 'Only in your own copy, in your Google account or on your computer. We never see it. Follow your local data protection rules when you store patient details.'],
        ['Can I use it for several clinics?', 'One licence covers one clinic brand with all its locations. Please do not resell or share the file or the copy link.']
      ],
      tr: [
        ['Dosyalara nasıl ulaşırım?', "Ödemeden hemen sonra indirme hazırdır. Etsy'de Satın alınanlar bölümünden dosyaları indirin. Excel dosyası ve kendi Google Sheets kopyanızı oluşturacağınız bağlantıyı içeren hızlı başlangıç PDF'i birlikte gelir."],
        ['Google Sheets mi, Excel mi gerekiyor?', "İkisinden biri yeterli. Google Sheets'te PDF'teki bağlantıyla tek tıkla kendi kopyanızı oluşturursunuz; ücretsiz bir Google hesabı yeterlidir. .xlsx dosyası Windows ve Mac'te Excel 2016 ve sonrasıyla açılır."],
        ['Tablo Türkçe mi?', 'Tablo İngilizce hazırlandı. Tüm etiketleri ve açılır listeleri Türkçeye çevirebilir, Settings sayfasında para birimi simgesini ₺ yapabilirsiniz.'],
        ['Tedavileri, kaynakları ve ekip isimlerini değiştirebilir miyim?', 'Evet. Tüm açılır listeler Settings sayfasında; klinik adı, para birimi simgesi ve raporlama yılı da orada. Listeyi değiştirdiğinizde tablodaki tüm açılır listeler güncellenir.'],
        ['Hasta verileri nerede saklanır?', "Sadece kendi kopyanızda, Google hesabınızda ya da bilgisayarınızda. Biz bu verileri görmeyiz. Hasta bilgilerini saklarken KVKK'ya uyun."],
        ['Bir lisansla kaç klinikte kullanabilirim?', 'Bir lisans, tüm şubeleriyle tek bir klinik markasını kapsar. Lütfen dosyayı ya da kopya bağlantısını paylaşmayın, yeniden satmayın.']
      ]
    },
    related: {
      en: [['Guide: how to track clinic leads and cost per lead', '/guides/clinic-lead-tracking-cost-per-lead/'], ['Clinic kits: patient documents for clinics', '/clinic-kits/'], ['Our Etsy shop', 'https://www.etsy.com/shop/SilitLabs']],
      tr: [['Rehber: lead ve lead başı maliyet takibi (EN)', '/guides/clinic-lead-tracking-cost-per-lead/', 'en'], ['Klinik kitleri', '/tr/klinik-kitleri/'], ['Etsy mağazası', 'https://www.etsy.com/shop/SilitLabs']]
    }
  },
  {
    id: 'curavia',
    kind: 'webflow',
    slug: { en: 'curavia', tr: 'curavia' },
    name: { en: 'Curavia', tr: 'Curavia' },
    tagline: { en: 'Webflow template', tr: 'Webflow şablonu' },
    audience: {
      en: 'Webflow template for health tourism clinics',
      tr: 'Sağlık turizmi klinikleri için Webflow şablonu'
    },
    seoTitle: {
      en: 'Curavia: Webflow Template for Health Tourism Clinics',
      tr: 'Curavia: Sağlık Turizmi Klinikleri için Webflow Şablonu'
    },
    seoDesc: {
      en: 'Webflow template for dental, hair transplant and aesthetic clinics with patients from abroad: four homes, sector colour themes, a smile plan builder, a graft estimator and a face map.',
      tr: 'Yurt dışından hasta ağırlayan diş, saç ekimi ve estetik klinikleri için Webflow şablonu: dört ana sayfa, sektör renk temaları, gülüş planı, greft hesaplayıcı ve yüz haritası.'
    },
    lead: {
      en: 'A premium Webflow template for dental, hair transplant and facial aesthetics clinics that treat patients from abroad. It answers what patients ask before they book: what it costs, how many days it takes, what they can do while they heal and what happens if something goes wrong. Start from the Hub, or from a Dental, Hair or Aesthetic home with its own colours, content and planning tool.',
      tr: 'Yurt dışından hasta ağırlayan diş, saç ekimi ve yüz estetiği klinikleri için premium bir Webflow şablonu. Hastaların karar vermeden önce sorduğu soruları yanıtlar: ne kadar tutar, kaç gün sürer, iyileşirken neler yapılabilir ve bir sorun çıkarsa ne olur. Hub ile ya da kendi renkleri, içeriği ve planlama aracı olan Diş, Saç veya Estetik ana sayfasıyla başlayın.'
    },
    facts: {
      en: ['4 homes and 17 inner pages', '3 sector themes and tools', '6 CMS collections', 'No custom code'],
      tr: ['4 ana sayfa ve 17 iç sayfa', '3 sektör teması ve aracı', '6 CMS koleksiyonu', 'Özel kod yok']
    },
    highlights: {
      en: ['Dental, Hair and Aesthetic homes, each in its own colours', 'Smile plan builder, graft estimator and face map', 'Theme chips that recolour a page in one click', 'Price tabs in GBP, EUR and USD'],
      tr: ['Kendi renkleriyle Diş, Saç ve Estetik ana sayfaları', 'Gülüş planı, greft hesaplayıcı ve yüz haritası', 'Sayfayı tek tıkla yeniden renklendiren tema çipleri', 'GBP, EUR ve USD fiyat sekmeleri']
    },
    preview: 'https://curavia-56d980.webflow.io',
    statusNote: { en: 'Coming soon to the Webflow Marketplace', tr: "Yakında Webflow Marketplace'te" },
    previewNote: {
      en: 'Clinic names, doctors, photos, prices, ratings and patient stories in the preview are sample content.',
      tr: 'Önizlemedeki klinik adı, hekimler, fotoğraflar, fiyatlar, puanlar ve hasta hikayeleri örnek içeriktir.'
    },
    light: true,
    og: '/images/og/curavia.jpg',
    img: {
      hero: pic(`${CV}/homes.webp`, 760, 500, 'The four Curavia homes: the Hub, Dental in ocean blue, Hair in forest green and Aesthetic in plum', 'Dört Curavia ana sayfası: Hub, okyanus mavisi Diş, orman yeşili Saç ve mürdüm rengi Estetik'),
      card: pic(`${CV}/homes-card.webp`, 760, 420, 'The four Curavia homes for multi-specialty, dental, hair and aesthetic clinics', 'Çok branşlı, diş, saç ve estetik klinikleri için dört Curavia ana sayfası')
    },
    overview: {
      h: { en: 'Built around the questions patients ask', tr: 'Hastaların sorduğu sorular üzerine kurulu' },
      p: {
        en: 'Patients who travel for treatment want to know the price, the number of days, what they can do while they heal and what happens if something goes wrong. Curavia gives each of those its own page.',
        tr: 'Tedavi için seyahat eden hasta fiyatı, kaç gün süreceğini, iyileşirken neler yapabileceğini ve bir sorun çıkarsa ne olacağını bilmek ister. Curavia bunların her birine ayrı bir sayfa ayırır.'
      },
      items: {
        en: [
          ['Four homes, one template', 'A Hub for clinics with several specialties, plus Dental, Hair and Aesthetic homes, each with its own layout, photos, copy and treatments.'],
          ['Sector colours in one click', 'Each specialty has its own palette through Webflow variable modes. Theme chips on the Hub recolour the whole page, menu and footer included.'],
          ['A planning tool per specialty', 'A smile plan builder for dental, a Norwood graft estimator for hair, and a face map with a downtime chart for aesthetics.'],
          ['Prices in three currencies', 'Price tables switch between pounds, euros and dollars, with the typical price at home next to yours.'],
          ['Day-by-day trip planner', 'A sample week from airport pick-up to the flight home, with clinic visits, time in the chair and free days.'],
          ['Recovery planner', 'What patients can do on each day after treatment, from swimming and sunbathing to flying home, for dental work and hair transplants.'],
          ['Treatment finder', 'Three questions about what to change, how long they can stay and what matters most, then three matches with prices and days.'],
          ['Blurred before and after', 'Case photos stay blurred until the visitor chooses to view them. Every case lists treatment, units, days in clinic and age range.'],
          ['Written guarantee', 'A guarantee page built around a certificate patients take home, with the cover for each treatment.'],
          ['Referral programme', 'A refer-a-friend page with the reward for both sides, a code card and a form.'],
          ['Patients mega menu', 'Packages, guarantee, finder, destination guide, FAQs and patient stories, one click from every page.'],
          ['No custom code', 'Every animation uses native Webflow interactions and every colour comes from Webflow variables.']
        ],
        tr: [
          ['Dört ana sayfa, tek şablon', 'Birden fazla alanda çalışan klinikler için bir Hub; ayrıca her biri kendi düzeni, fotoğrafları, metni ve tedavileriyle Diş, Saç ve Estetik ana sayfaları.'],
          ['Tek tıkla sektör renkleri', "Her alanın Webflow değişken modlarıyla kendi paleti var. Hub'daki tema çipleri menü ve footer dahil bütün sayfayı yeniden renklendirir."],
          ['Her alana bir planlama aracı', 'Diş için gülüş planı oluşturucu, saç için Norwood greft hesaplayıcı, estetik için iyileşme süresi grafiğiyle yüz haritası.'],
          ['Üç para biriminde fiyat', 'Fiyat tabloları sterlin, euro ve dolar arasında geçiş yapar; hastanın kendi ülkesindeki tipik fiyat yanında görünür.'],
          ['Gün gün seyahat planı', 'Havalimanı karşılamasından dönüş uçuşuna örnek bir hafta: klinik ziyaretleri, koltukta geçen süre ve serbest günler.'],
          ['İyileşme planı', 'Tedaviden sonraki her gün neler yapılabileceği: yüzmeden güneşlenmeye, eve dönüş uçuşuna kadar; diş tedavisi ve saç ekimi için ayrı ayrı.'],
          ['Tedavi bulucu', 'Neyi değiştirmek istediği, ne kadar kalabileceği ve onun için neyin önemli olduğu üzerine üç soru; ardından fiyat ve gün sayısıyla üç öneri.'],
          ['Bulanık önce ve sonra', 'Vaka fotoğrafları ziyaretçi açmayı seçene kadar bulanık kalır. Her vakada tedavi, ünite, klinikte geçen gün ve yaş aralığı yazar.'],
          ['Yazılı garanti', 'Hastanın eve götürdüğü bir sertifika etrafında kurulu garanti sayfası ve her tedavinin garanti kapsamı.'],
          ['Tavsiye programı', 'İki taraf için ödül, kod kartı ve form içeren arkadaşını getir sayfası.'],
          ['Hastalar için mega menü', 'Paketler, garanti, tedavi bulucu, destinasyon rehberi, SSS ve hasta hikayeleri her sayfadan tek tık uzakta.'],
          ['Özel kod yok', "Tüm animasyonlar Webflow'un kendi etkileşimleriyle yapıldı, tüm renkler Webflow değişkenlerinden geliyor."]
        ]
      }
    },
    sections: [
      {
        img: pic(`${CV}/hub-themes.webp`, 760, 514, 'Choose your clinic band with dental, hair and aesthetic cards and theme chips', 'Diş, saç ve estetik kartları ve tema çipleriyle Kliniğini seç bandı'),
        h: { en: 'Pick a specialty and the site follows', tr: 'Alanı seçin, site ona uysun' },
        p: {
          en: 'The Hub opens with a Choose your clinic band: three cards in their own colours, each with a starting price and the tools of that specialty. Theme chips recolour the page in one click, and a Homes menu leads to each specialty home.',
          tr: 'Hub, Kliniğini seç bandıyla açılır: her biri kendi renginde, başlangıç fiyatı ve o alanın araçlarıyla üç kart. Tema çipleri sayfayı tek tıkla yeniden renklendirir, Homes menüsü her alanın ana sayfasına götürür.'
        },
        list: {
          en: ['Hub: petrol and citrine', 'Dental: ocean blue and aqua', 'Hair: forest green and copper', 'Aesthetic: plum and rose gold, with serif headings'],
          tr: ['Hub: petrol ve citrine', 'Diş: okyanus mavisi ve aqua', 'Saç: orman yeşili ve bakır', 'Estetik: mürdüm ve rose gold, serif başlıklarla']
        }
      },
      {
        img: pic(`${CV}/smile-builder.webp`, 760, 493, 'Smile plan builder result for 20 emax laminate veneers with price, UK price, saving and stay', '20 emax laminate veneer için fiyat, İngiltere fiyatı, tasarruf ve kalış süresiyle gülüş planı sonucu'),
        h: { en: 'A smile plan in two taps', tr: 'İki dokunuşta gülüş planı' },
        p: {
          en: 'On the Dental home, visitors pick emax laminate veneers, zirconium crowns or emax crowns, then 6, 8, 10, 16 or 20 teeth. The result shows the price next to the typical UK price, the saving, the days in clinic and the hotel nights, with a drawing of the teeth in the plan. A shade and style picker sits next to it.',
          tr: 'Diş ana sayfasında ziyaretçi emax laminate veneer, zirkonyum kron ya da emax kron seçer, ardından 6, 8, 10, 16 veya 20 diş. Sonuçta fiyat, İngiltere fiyatı, tasarruf, klinikte geçen gün ve otel geceleri, plandaki dişlerin çizimiyle birlikte görünür. Yanında renk ve stil seçici yer alır.'
        }
      },
      {
        img: pic(`${CV}/graft-estimator.webp`, 760, 534, 'Norwood graft estimator with Norwood 5 selected and its graft range, sessions and price', 'Norwood 5 seçiliyken greft aralığı, seans ve fiyat gösteren Norwood greft hesaplayıcı'),
        h: { en: 'A graft estimate before the first photo', tr: 'İlk fotoğraftan önce greft tahmini' },
        p: {
          en: 'The Hair home has a Norwood estimator: eight stages, each with a typical graft range, sessions, technique, price and a UK comparison. A hairline designer shows four shapes on a face, and a timeline walks through twelve months of growth.',
          tr: 'Saç ana sayfasında Norwood hesaplayıcı var: her biri tipik greft aralığı, seans, teknik, fiyat ve İngiltere karşılaştırması olan sekiz evre. Saç çizgisi tasarımcısı yüz üzerinde dört şekil gösterir, zaman çizelgesi on iki aylık büyümeyi anlatır.'
        }
      },
      {
        img: pic(`${CV}/face-map.webp`, 760, 476, 'Face map with the lips zone selected, showing lip filler price, downtime and how long it lasts', 'Dudak bölgesi seçili yüz haritası: dudak dolgusu fiyatı, iyileşme süresi ve kalıcılık'),
        h: { en: 'A face map for aesthetics', tr: 'Estetik için yüz haritası' },
        p: {
          en: 'On the Aesthetic home, visitors tap one of ten zones to see the usual treatment, an estimated price, the downtime, how long results last and the session time. A downtime chart compares eight treatments, so patients can plan photos, flights and events around them.',
          tr: 'Estetik ana sayfasında ziyaretçi on bölgeden birine dokunur ve olağan tedaviyi, tahmini fiyatı, iyileşme süresini, sonucun ne kadar sürdüğünü ve seans süresini görür. İyileşme süresi grafiği sekiz tedaviyi karşılaştırır; hasta fotoğraf, uçuş ve etkinlik planını buna göre yapar.'
        }
      },
      {
        img: pic(`${CV}/finder.webp`, 760, 520, 'Treatment finder results showing three matches with prices and days', 'Fiyat ve gün sayısıyla üç öneri gösteren tedavi bulucu sonuçları'),
        h: { en: 'A treatment finder in three questions', tr: 'Üç soruda tedavi bulucu' },
        p: {
          en: 'Visitors who are not sure what they need answer three questions and get their three best matches, each with a starting price, the days it takes and a link to the treatment. A note reminds them that the result is a starting point, not a diagnosis.',
          tr: 'Neye ihtiyacı olduğundan emin olmayan ziyaretçi üç soruyu yanıtlar ve başlangıç fiyatı, süresi ve tedavi sayfası bağlantısıyla en uygun üç seçeneği görür. Bir not, sonucun teşhis değil bir başlangıç noktası olduğunu hatırlatır.'
        }
      },
      {
        img: pic(`${CV}/before-after.webp`, 760, 530, 'Before and after case cards, one opened and one still blurred', 'Biri açılmış, biri hâlâ bulanık önce ve sonra vaka kartları'),
        h: { en: 'Before and after, shown with care', tr: 'Önce ve sonra, özenle' },
        p: {
          en: 'Case photos stay blurred until the visitor hovers or taps to view them. Each case card lists the treatment, the number of units, the days in clinic and the age range, so patients can compare it with their own plan.',
          tr: 'Vaka fotoğrafları ziyaretçi üzerine gelene ya da dokunana kadar bulanık kalır. Her vaka kartında tedavi, ünite sayısı, klinikte geçen gün ve yaş aralığı yazar; hasta kendi planıyla karşılaştırabilir.'
        }
      },
      {
        dark: true,
        img: pic(`${CV}/guarantee.webp`, 760, 500, 'Guarantee page with a written treatment guarantee certificate', 'Yazılı tedavi garanti sertifikası olan garanti sayfası'),
        h: { en: 'A guarantee patients can hold', tr: 'Hastanın elinde tutabileceği garanti' },
        p: {
          en: 'The guarantee page centres on a certificate with the patient, treatment, units, guarantee period and signatures, next to the cover for each treatment and how aftercare works once the patient is home.',
          tr: 'Garanti sayfasının merkezinde hasta, tedavi, ünite, garanti süresi ve imzaların yer aldığı bir sertifika var; yanında her tedavinin garanti kapsamı ve hasta evine döndükten sonraki bakım süreci.'
        }
      },
      {
        img: pic(`${CV}/treatment-page.webp`, 760, 520, 'Smile makeover treatment page with price comparison, stay length and guarantee', 'Fiyat karşılaştırması, kalış süresi ve garantiyle gülüş tasarımı tedavi sayfası'),
        h: { en: 'Treatments, prices and stays from the CMS', tr: "Tedaviler, fiyatlar ve kalış süreleri CMS'ten" },
        p: {
          en: 'Each treatment page comes from the CMS, with the starting price, the typical price at home, stay length, visits needed, guarantee and recovery. Six collections hold the content:',
          tr: "Her tedavi sayfası CMS'ten gelir: başlangıç fiyatı, hastanın ülkesindeki tipik fiyat, kalış süresi, gereken ziyaret, garanti ve iyileşme. İçerik altı koleksiyonda tutulur:"
        },
        list: {
          en: ['Treatments', 'Categories', 'Doctors', 'Patient stories', 'Blog', 'FAQs'],
          tr: ['Tedaviler', 'Kategoriler', 'Hekimler', 'Hasta hikayeleri', 'Blog', 'SSS']
        }
      },
      {
        img: pic(`${CV}/mega-menu.webp`, 760, 500, 'Patients mega menu open over the Curavia home page', 'Curavia ana sayfasında açık Patients mega menüsü'),
        h: { en: 'Everything patients look for, one menu away', tr: 'Hastaların aradığı her şey tek menüde' },
        p: {
          en: 'The Patients mega menu groups packages, guarantee, treatment finder, referrals, destination guide, quality and outcomes, FAQs and patient stories, with a reply time note at the bottom.',
          tr: "Patients mega menüsü paketleri, garantiyi, tedavi bulucuyu, tavsiye programını, destinasyon rehberini, kalite ve sonuçları, SSS'yi ve hasta hikayelerini bir araya getirir; en altta yanıt süresi notu yer alır."
        }
      }
    ],
    included: [
      {
        h: { en: 'What is in the template', tr: 'Şablonda neler var' },
        items: {
          en: ['4 homes: Hub, Dental, Hair and Aesthetic', '17 inner pages, from Prices and Your Trip to Guarantee and Refer a Friend', '6 CMS collections, each with its template page', 'Style guide, licences and changelog pages', 'An instructions page with a 3-step guide for a one-specialty clinic and what to replace before launch'],
          tr: ['4 ana sayfa: Hub, Diş, Saç ve Estetik', 'Fiyatlar ve seyahat planından garanti ve tavsiye programına 17 iç sayfa', 'Her biri kendi şablon sayfasıyla 6 CMS koleksiyonu', 'Stil rehberi, lisanslar ve sürüm notları sayfaları', 'Tek alanlı klinik için 3 adımlık rehber ve yayından önce değiştirilecekleri listeleyen talimatlar sayfası']
        }
      },
      {
        h: { en: 'Built to hand over', tr: 'Teslime hazır' },
        items: {
          en: ['Native Webflow interactions only, with no custom code', 'Every colour from nine Base variables, with a mode for each specialty', 'A WhatsApp button on every page', 'Designed for desktop, tablet and phone', 'Sample content in every collection, ready to replace'],
          tr: ["Sadece Webflow'un kendi etkileşimleri, özel kod yok", 'Tüm renkler dokuz Base değişkeninden, her alan için ayrı modla', 'Her sayfada WhatsApp düğmesi', 'Masaüstü, tablet ve telefon için tasarlandı', 'Her koleksiyonda değiştirmeye hazır örnek içerik']
        }
      }
    ],
    faq: {
      en: [
        ['When can I get Curavia?', 'Curavia is coming soon to the Webflow Marketplace. You can explore the full live preview today. Write to info@silitlabs.com if you would like to hear when it is listed.'],
        ['Who is it for?', 'Clinics that treat international patients for dental work, hair transplants or facial aesthetics, and the designers and agencies who build their sites.'],
        ['Can I use it for only one specialty?', 'Yes. Make the Dental, Hair or Aesthetic home your home page and follow the three steps on the Instructions page: set the home, apply its theme to every page and remove what you do not offer. Colours, fonts and tools follow.'],
        ['Can visitors switch between specialties?', 'On the Hub, theme chips recolour the page in one click and the Homes menu links to each specialty home. A clinic with one specialty can remove both.'],
        ['Is the content in the preview real?', 'No. Clinic names, doctors, photos, prices, ratings and patient stories are sample content for you to replace with your own. Have medical and guarantee texts checked by your clinicians before launch.'],
        ['Do I need to write code?', 'No. Everything is built with native Webflow elements, CMS collections and interactions, so you edit it all in the Designer and the Editor.']
      ],
      tr: [
        ["Curavia'yı ne zaman alabilirim?", "Curavia yakında Webflow Marketplace'te. Canlı önizlemenin tamamını bugün inceleyebilirsiniz. Listelendiğinde haber almak isterseniz info@silitlabs.com adresine yazın."],
        ['Kimler için?', 'Diş tedavisi, saç ekimi ya da yüz estetiği için yurt dışından hasta ağırlayan klinikler ve bu kliniklerin sitelerini kuran tasarımcılar ve ajanslar için.'],
        ['Sadece tek bir alan için kullanabilir miyim?', 'Evet. Diş, Saç ya da Estetik ana sayfasını ana sayfanız yapın ve talimatlar sayfasındaki üç adımı izleyin: ana sayfayı ayarlayın, temasını tüm sayfalara uygulayın ve sunmadıklarınızı kaldırın. Renkler, fontlar ve araçlar buna uyar.'],
        ['Ziyaretçiler alanlar arasında geçiş yapabilir mi?', "Hub'da tema çipleri sayfayı tek tıkla yeniden renklendirir, Homes menüsü her alanın ana sayfasına bağlanır. Tek alanda çalışan klinik ikisini de kaldırabilir."],
        ['Önizlemedeki içerik gerçek mi?', 'Hayır. Klinik adı, hekimler, fotoğraflar, fiyatlar, puanlar ve hasta hikayeleri kendi içeriğinizle değiştireceğiniz örnek içeriktir. Tıbbi ve garanti metinlerini yayına almadan önce hekimlerinize kontrol ettirin.'],
        ['Kod yazmam gerekiyor mu?', "Hayır. Her şey Webflow'un kendi öğeleri, CMS koleksiyonları ve etkileşimleriyle kuruldu; tamamını Designer ve Editor'da düzenlersiniz."]
      ]
    },
    related: {
      en: [['Open the live preview', 'https://curavia-56d980.webflow.io'], ['Flowdeck: monitoring for Webflow sites', '/webflow-apps/flowdeck/'], ['All Webflow apps', '/webflow-apps/']],
      tr: [['Canlı önizlemeyi açın', 'https://curavia-56d980.webflow.io'], ['Flowdeck: Webflow site takibi (EN)', '/webflow-apps/flowdeck/', 'en'], ['Klinik kitleri', '/tr/klinik-kitleri/']]
    }
  }
];

export const templatePath = (t, lang) => lang === 'tr' ? `/tr/sablonlar/${t.slug.tr}/` : `/templates/${t.slug.en}/`;
export const kindOf = (t) => KINDS.find((k) => k.id === t.kind);
