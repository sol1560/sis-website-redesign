/* SIS Group of Schools: real content from sisschools.org, fetched 2026-09-23.
   Loaded as a plain script: <script src="assets/data.js"></script>, then read window.SIS_DATA.
   Rule: anything not verifiable on sisschools.org (or its official YouTube titles) is null. Never fill nulls with invented copy.
   Every image has local src + intrinsic w/h + alt; use them for width/height attributes.

   SHAPE
   campuses[16]: { id, name, shortName, city, region, country, levels: string[]|null, address|null, phone|null,
                   whatsapp|null, email|null, photo: {src,w,h,alt}|null, intro|null, status|null, url, notes|null }
                 id is the slug used by campus.html?c=<id> (and by index.html's campus finder).
   news[11]:     { slug, title, date: "YYYY-MM-DD"|null, category: "News"|"Campus"|"Blog"|"Press", excerpt,
                   image: {src,w,h,alt}, url, fullTitle?, campus?, videoUrl?, note?, featured?, dateline?,
                   bodyParagraphs?: string[], bodyBlocks?: [{type:"p"|"li"|"quote", text, cite?}] }
                 Only the Cambridge article ("cracking-the-code-cambridge") carries the full body.
                 news is ordered for display (featured first); sort by date yourself if needed. Categories are editorial;
                 on sisschools.org every post sits under "Blog SIS".
   stories[8]:   { slug, name, fullName|null, campus, category: "Student", excerpt, image: {src,w,h,alt}, videoUrl, url, note|null }
                 slug is the anchor used by stories.html#<slug>. Campus comes from each official YouTube video title;
                 category from the "Students" tab of sisschools.org/essential-voisis.
   scholarships: { name, url, established, quote:{text,cite}, frequency, criteria[], amount, aim, aboutKaram[],
                   pressRelease:{title,date|null,paragraphs[]}, campusesLinked[], campusesLinkedNote, applicationProcess:null, deadline:null }
   careers:      { url, applyUrl, headline, intro, generalEmail, internshipEmail, note,
                   sections:[{ campus: "group"|<campus id>, name, overview: string[]|null, roles: string[], howToApply|null, emails[] }] }
   contact:      { headOffice:{name, phone, phoneHref, email, address:null, note}, whatsappGroup, url, bookTourUrl, applyUrl,
                   intro, social:{youtube}, formLevels[] }
*/
window.SIS_DATA = {
  "campuses": [
    {
      "id": "south-jakarta",
      "name": "SIS South Jakarta",
      "shortName": "South Jakarta",
      "city": "Jakarta",
      "region": "Lebak Bulus, South Jakarta",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary",
        "Junior College"
      ],
      "address": "Jl. Bona Vista Raya Lebak Bulus South Jakarta 12440",
      "phone": "+62 21 759 14414",
      "whatsapp": "+6281293516252",
      "email": "sissouthjakarta@sisschools.org",
      "photo": {
        "src": "assets/j-2022-sis-south-jakarta-old.webp",
        "w": 1080,
        "h": 1350,
        "alt": "SIS South Jakarta campus building with its front fountain"
      },
      "intro": "SIS South Jakarta is a brand new international school with a proven track record of academic success our focus is on providing students with the 21st century skills they will need for tomorrow.",
      "status": null,
      "url": "https://sisschools.org/sis-southjakarta/",
      "notes": null
    },
    {
      "id": "north-east-jakarta",
      "name": "SIS North East Jakarta",
      "shortName": "North East Jakarta",
      "city": "Jakarta",
      "region": "Jakarta Garden City, Cakung, East Jakarta",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary",
        "Junior College"
      ],
      "address": "Jl. Lake Garden Boulevard Jl. Jkt Garden City Boulevard, Cakung Tim., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910",
      "phone": "+62 21 250 95388",
      "whatsapp": "+628118285853",
      "email": "admission@sis-kg.org",
      "photo": {
        "src": "assets/j-2025-sis-north-east-jakarta.webp",
        "w": 1080,
        "h": 1350,
        "alt": "SIS North East Jakarta campus building"
      },
      "intro": "A new journey begins! A bigger building, more advanced facilities, and many more.",
      "status": null,
      "url": "https://sisschools.org/sis-kg/",
      "notes": "Formerly SIS Kelapa Gading (SIS KG-NEJ). The group contact page lists +62 21 460 8888 and admissions@sisschools.org for this campus."
    },
    {
      "id": "pik",
      "name": "SIS Pantai Indah Kapuk",
      "shortName": "Pantai Indah Kapuk",
      "city": "Jakarta",
      "region": "Pantai Indah Kapuk, North Jakarta",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary",
        "Junior College"
      ],
      "address": "Jl. Mandara Indah 4, Pantai Indah Kapuk, North Jakarta 14460",
      "phone": "+62 21 588 3835",
      "whatsapp": null,
      "email": "admission@sis-pik.com",
      "photo": {
        "src": "assets/c-pik.jpg",
        "w": 750,
        "h": 500,
        "alt": "SIS PIK students holding a We Love Indonesia banner for Independence Day"
      },
      "intro": null,
      "status": null,
      "url": "https://sisschools.org/sis-pik/",
      "notes": null
    },
    {
      "id": "senayan",
      "name": "SIS Senayan",
      "shortName": "Senayan",
      "city": "Jakarta",
      "region": "Kebayoran Baru, South Jakarta",
      "country": "Indonesia",
      "levels": [
        "Preschool"
      ],
      "address": "Jl. Hang Jebat III No.34, RT.3/RW.8, Gunung, Kecamatan Kebayoran Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12120",
      "phone": "+62 811 1779 7077",
      "whatsapp": "+62811 1779 7077",
      "email": "admission.sissenayan@sisschools.org",
      "photo": {
        "src": "assets/n-sis-preschool-senayan-jakarta-scaled.jpg",
        "w": 2560,
        "h": 1114,
        "alt": "SIS Preschool Senayan announcement banner"
      },
      "intro": "In the heart of Senayan, a new home for young learners is coming to life. SIS Preschool Senayan offers a nurturing environment where every child is encouraged to explore, imagine, and grow through meaningful experiences.",
      "status": "Preschool",
      "url": "https://sisschools.org/sis-senayan/",
      "notes": "Listed on sisschools.org as SIS Preschool Senayan."
    },
    {
      "id": "bsd",
      "name": "SIS BSD",
      "shortName": "BSD",
      "city": "South Tangerang",
      "region": "BSD – Hiera, South Tangerang, Banten",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary"
      ],
      "address": null,
      "phone": "+62 811-1779-7077",
      "whatsapp": "+62 811-1779-7077 (chat only)",
      "email": "admissions.sisbsd@sisschools.org",
      "photo": {
        "src": "assets/n-sis-bsd-hiera.jpg",
        "w": 1200,
        "h": 666,
        "alt": "SIS and Hiera representatives holding the signed partnership agreement for SIS BSD City"
      },
      "intro": "SIS BSD – Hiera is more than just a new school, it’s a place where curiosity is encouraged, character is built, and every learner is empowered to dream big.",
      "status": "Opening 2027/2028",
      "url": "https://sisschools.org/sis-bsd/",
      "notes": "Planned to open for the 2027/2028 Academic Year with Preschool and Primary, expanding to Secondary and Junior College in following years. No street address published."
    },
    {
      "id": "sedayu",
      "name": "SIS Sedayu City",
      "shortName": "Sedayu City",
      "city": "Jakarta",
      "region": "Cakung, East Jakarta",
      "country": "Indonesia",
      "levels": [
        "Preschool"
      ],
      "address": "Sedayu City Blok SCBSA, No.1-10 Cakung Jakarta Timur 13910",
      "phone": "+62 21 388 65087",
      "whatsapp": "+62811 828 5853",
      "email": "info@sis-kg.org",
      "photo": {
        "src": "assets/c-sedayu.jpg",
        "w": 800,
        "h": 451,
        "alt": "Ribbon cutting at the soft opening of SIS Preschool Sedayu City"
      },
      "intro": "Nurturing young minds to create a foundation for inspired learning.",
      "status": "Preschool",
      "url": "https://sisschools.org/sis-sedayu/",
      "notes": "Listed on sisschools.org as SIS Preschool Sedayu City."
    },
    {
      "id": "cilegon",
      "name": "SIS Cilegon",
      "shortName": "Cilegon",
      "city": "Cilegon",
      "region": "Banten",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary"
      ],
      "address": "Jl. Raya Merak No.49, Bonakarta, Cilegon, Banten 42414",
      "phone": "(+62 254) 394 460",
      "whatsapp": "+6281383809944",
      "email": "siscilegon@sisschools.org",
      "photo": {
        "src": "assets/c-cilegon.webp",
        "w": 1024,
        "h": 768,
        "alt": "SIS Cilegon preschoolers exploring the garden together"
      },
      "intro": "With the combination of the Cambridge and National Curriculum, we’re preparing students for a global future.",
      "status": null,
      "url": "https://sisschools.org/sis-cilegon/",
      "notes": null
    },
    {
      "id": "bandung",
      "name": "SIS Bandung",
      "shortName": "Bandung",
      "city": "Bandung",
      "region": "West Bandung, West Java",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary",
        "Junior College"
      ],
      "address": "Jl. Sersan Bajuri KM 1,5 Cihideung Kec. Parongpong Kab. Bandung Barat Jawa Barat Indonesia – 40559",
      "phone": "+62 22 201 7773",
      "whatsapp": null,
      "email": "sisbandung@sisschools.org",
      "photo": {
        "src": "assets/j-2024-sis-bandung.webp",
        "w": 1080,
        "h": 1350,
        "alt": "SIS Bandung campus building"
      },
      "intro": "At SIS Bandung, we harness the power of active learning to engage students directly in the learning process, leading to increased understanding and knowledge retention.",
      "status": null,
      "url": "https://sisschools.org/sis-bandung/",
      "notes": null
    },
    {
      "id": "semarang",
      "name": "SIS Semarang",
      "shortName": "Semarang",
      "city": "Semarang",
      "region": "Central Java",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary",
        "Junior College"
      ],
      "address": "Jl. Bukit Candi Golf No. 20 Graha Candi Golf Residence Semarang 50274",
      "phone": "(+62 24) 850 9108",
      "whatsapp": "+628112606515",
      "email": "sissemarang@sisschools.org",
      "photo": {
        "src": "assets/c-semarang.webp",
        "w": 1920,
        "h": 1080,
        "alt": "SIS Semarang educators: Exploring Learning Pathways with Our Educators"
      },
      "intro": "We at SIS Semarang pride ourselves on being a true international school with students from 21 different countries and teachers of five nationalities.",
      "status": null,
      "url": "https://sisschools.org/sis-semarang/",
      "notes": "The group contact page gives postcode 50247; the campus page gives 50274."
    },
    {
      "id": "surabaya",
      "name": "SIS Surabaya",
      "shortName": "Surabaya",
      "city": "Surabaya",
      "region": "East Java",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary",
        "Junior College"
      ],
      "address": "Jl. H.R. Muhammad 371, Surabaya, East Java, 60189 Indonesia",
      "phone": "+62 31 738 7668 / 69",
      "whatsapp": "+628113163633",
      "email": "sissurabaya@sisschools.org",
      "photo": {
        "src": "assets/j-2023-sis-surabaya.webp",
        "w": 1080,
        "h": 1350,
        "alt": "SIS Surabaya campus building"
      },
      "intro": "Located in the heart of Surabaya, a vibrant city full of culture, energy, and opportunity, you will find a school community that feels like home.",
      "status": null,
      "url": "https://sisschools.org/sis-surabaya/",
      "notes": null
    },
    {
      "id": "medan",
      "name": "SIS Medan",
      "shortName": "Medan",
      "city": "Medan",
      "region": "North Sumatra",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary",
        "Junior College"
      ],
      "address": "Royal Sumatra Complex Jl. Letjen Jamin Ginting Km. 8,5 Medan",
      "phone": "(+62 61) 836 2880",
      "whatsapp": "+628116380515",
      "email": "sismedan@sisschools.org",
      "photo": {
        "src": "assets/j-2003-expanding-horizon.webp",
        "w": 1080,
        "h": 1350,
        "alt": "SIS Medan campus"
      },
      "intro": null,
      "status": null,
      "url": "https://sisschools.org/sis-medan/",
      "notes": null
    },
    {
      "id": "palembang",
      "name": "SIS Palembang",
      "shortName": "Palembang",
      "city": "Palembang",
      "region": "South Sumatra",
      "country": "Indonesia",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary",
        "Junior College"
      ],
      "address": "199 Kelurahan Duku Kecamatan Ilir Timur III Palembang 30114",
      "phone": "(0711) 5626778 / 715868",
      "whatsapp": "+6281273098642",
      "email": "sispalembang@sisschools.org",
      "photo": {
        "src": "assets/c-palembang.webp",
        "w": 1024,
        "h": 768,
        "alt": "SIS Palembang secondary students with their musical instruments"
      },
      "intro": null,
      "status": null,
      "url": "https://sisschools.org/sis-palembang/",
      "notes": "The group contact page lists a different address: Jl. Letda Abdul Rozak No.1 Taksam/Chuan Ho, Palembang, and email info@sispalembang.org."
    },
    {
      "id": "chennai",
      "name": "ASIS Chennai",
      "shortName": "ASIS Chennai",
      "city": "Chennai",
      "region": "Tamil Nadu",
      "country": "India",
      "levels": null,
      "address": "Parvathi Avenue Madanandapuram, Udhaya Nagar Main Rd, Porur, Chennai, Tamil Nadu 600116, India",
      "phone": "+918012137777",
      "whatsapp": null,
      "email": "info@asis.education",
      "photo": {
        "src": "assets/c-chennai.webp",
        "w": 1920,
        "h": 1080,
        "alt": "Anand Singapore International School Chennai building and basketball court"
      },
      "intro": null,
      "status": null,
      "url": "https://sisschools.org/asis-chennai/",
      "notes": "Anand Singapore International School, a partnership between the Kalasalingam Group of Institutions and the SIS Group of Schools (sisschools.org/career)."
    },
    {
      "id": "mumbai",
      "name": "VSIS Mumbai",
      "shortName": "VSIS Mumbai",
      "city": "Karjat",
      "region": "Raigad, Maharashtra",
      "country": "India",
      "levels": null,
      "address": "Vijaybhoomi Singapore International School Village Jamrung, Tehsil Karjat District Raigad, Greater Mumbai Maharashtra: 410210",
      "phone": "+916366568118",
      "whatsapp": null,
      "email": "vsis.admissions@vijaybhoomi.edu.in",
      "photo": {
        "src": "assets/c-mumbai.webp",
        "w": 1024,
        "h": 768,
        "alt": "Aerial view of the Vijaybhoomi Singapore International School campus in the hills of Karjat"
      },
      "intro": "Vijaybhoomi Singapore International School is an international boarding school established amidst the beauty of nature in Karjat, India.",
      "status": null,
      "url": "https://sisschools.org/vsis/",
      "notes": "Quote from sisschools.org/career. sisschools.org/vsis-mumbai returns 410; the live page is sisschools.org/vsis/."
    },
    {
      "id": "myanmar",
      "name": "SIS Myanmar",
      "shortName": "SIS Myanmar",
      "city": "Yangon",
      "region": "Thingangyun Township, Yangon",
      "country": "Myanmar",
      "levels": [
        "Preschool",
        "Primary",
        "Secondary"
      ],
      "address": "29 Quarter Thuwunna Villa, Previous(1)/Present (6A) Paw San Hmwe Road, Thingangyun Township, Yangon, Myanmar",
      "phone": "+95 9 426 888 100 / 101",
      "whatsapp": null,
      "email": "admissions@sis-mm.org",
      "photo": {
        "src": "assets/j-2020-sis-myanmar.webp",
        "w": 1080,
        "h": 1350,
        "alt": "SIS Myanmar campus building in red and yellow"
      },
      "intro": null,
      "status": null,
      "url": "https://sisschools.org/sis-myanmar/",
      "notes": "Also listed as SIS Yangon in the site footer."
    },
    {
      "id": "korea",
      "name": "SIS Korea",
      "shortName": "SIS Korea",
      "city": "Gwangju",
      "region": "Gwangju",
      "country": "South Korea",
      "levels": [
        "Kindergarten",
        "Primary",
        "Secondary"
      ],
      "address": null,
      "phone": "+62 21 759 14414",
      "whatsapp": null,
      "email": "admissions@sisschools.org",
      "photo": null,
      "intro": "SIS Gwangju has grown rapidly from a small learning centre to a centre with a very popular kindergarten as well as a robust primary and secondary program shaped especially for Korea from the SIS Program.",
      "status": null,
      "url": "https://sisschools.org/sis-korea/",
      "notes": "Listed as SIS Gwangju, with 'Stay tuned' in the footer. The phone and email shown are the group head office contacts; no Korean address is published."
    }
  ],
  "news": [
    {
      "slug": "cracking-the-code-cambridge",
      "title": "Cracking the Code: Cambridge Learns How SIS Makes International Education Accessible",
      "date": "2025-09-12",
      "category": "Press",
      "excerpt": "In a groundbreaking collaboration, the international award-winning SIS Group of Schools has partnered with Cambridge International Education (Cambridge) to demonstrate how high-quality international education can be delivered at affordable levels across diverse communities. This initiative was born out of discussions between SIS Founder & Chairman Jaspal Sidhu and Rod Smith, Cambridge’s Group Managing Director, during his last visit to Indonesia.",
      "image": {
        "src": "assets/n-sis-cambridge.webp",
        "w": 1928,
        "h": 1448,
        "alt": "SIS students and teachers with Cambridge International Education representatives"
      },
      "url": "https://sisschools.org/blog/cracking-the-code-cambridge-learns-how-sis-makes-international-education-accessible/",
      "dateline": "Jakarta, Indonesia – 8 September 2025",
      "bodyParagraphs": [
        "In a groundbreaking collaboration, the international award-winning SIS Group of Schools has partnered with Cambridge International Education (Cambridge) to demonstrate how high-quality international education can be delivered at affordable levels across diverse communities. This initiative was born out of discussions between SIS Founder & Chairman Jaspal Sidhu and Rod Smith, Cambridge’s Group Managing Director, during his last visit to Indonesia.",
        "Cambridge undertook a rigorous, independent review of selected SIS schools in Indonesia to explore how the group sustains world-class standards while making education more affordable—a challenge not only for school operators, but also for funders and impact-driven organisations worldwide who are seeking proven models that deliver both access and excellence. Led by Ben Schmidt, Director of International Network, senior Cambridge representatives visited contrasting campuses, including SIS South Jakarta, serving a metropolitan community, and SIS Palembang in the island of Sumatra, serving a broader regional population. Their evaluation went far beyond curriculum adoption, engaging directly with school leaders, teachers, parents, and students to assess SIS’s innovative fee models, teacher development practices, and operational strategies.",
        "Key Findings from Cambridge’s Review of SIS:",
        "Strategic Cambridge Integration – SIS systematically embeds Cambridge Primary, Lower Secondary, and IGCSE programs across campuses, ensuring consistency and excellence.",
        "Operational Efficiency for Affordability – SIS applies smart teaching models and resource management, proving that costs can be reduced without compromising outcomes.",
        "Teacher Investment as a Differentiator – Cambridge highlighted SIS’s deep commitment to continuous teacher development through Cambridge training and resources, ensuring long-lasting classroom impact.",
        "Accessible Excellence – A scalable model that balances academic rigor, well-being, and affordability, setting a new benchmark for international education.",
        "SIS has invited Cambridge to share these findings with the international education community, enabling other schools to replicate and adapt this proven model of success. This collaboration builds on SIS’s global recognition, including the prestigious 2019 award from the World Bank (IFC) and the UK’s Financial Times for its groundbreaking and transformational work in education.",
        "We have successfully reduced school fees through our award-winning Half-Fees Model and our unique EFFECTOR teacher training framework. We proved that the same Cambridge curriculum can be delivered with quality and impact, at lower cost, even in smaller or emerging cities. We invited Cambridge to validate this journey so more schools worldwide can follow suit. — Jaspal Sidhu, Founder & Chairman, SIS & Inspirasi Group of Schools",
        "We are delighted to partner with SIS Group of Schools in this important initiative. Their commitment to affordability without sacrificing quality reflects our shared mission at Cambridge: opening the door to international education for more students worldwide. The SIS model shows how innovation and collaboration can bring global education within reach of more communities. — Dian, Senior Country Manager for Indonesia, Cambridge"
      ],
      "bodyBlocks": [
        {
          "type": "p",
          "text": "In a groundbreaking collaboration, the international award-winning SIS Group of Schools has partnered with Cambridge International Education (Cambridge) to demonstrate how high-quality international education can be delivered at affordable levels across diverse communities. This initiative was born out of discussions between SIS Founder & Chairman Jaspal Sidhu and Rod Smith, Cambridge’s Group Managing Director, during his last visit to Indonesia."
        },
        {
          "type": "p",
          "text": "Cambridge undertook a rigorous, independent review of selected SIS schools in Indonesia to explore how the group sustains world-class standards while making education more affordable—a challenge not only for school operators, but also for funders and impact-driven organisations worldwide who are seeking proven models that deliver both access and excellence. Led by Ben Schmidt, Director of International Network, senior Cambridge representatives visited contrasting campuses, including SIS South Jakarta, serving a metropolitan community, and SIS Palembang in the island of Sumatra, serving a broader regional population. Their evaluation went far beyond curriculum adoption, engaging directly with school leaders, teachers, parents, and students to assess SIS’s innovative fee models, teacher development practices, and operational strategies."
        },
        {
          "type": "p",
          "text": "Key Findings from Cambridge’s Review of SIS:"
        },
        {
          "type": "li",
          "text": "Strategic Cambridge Integration – SIS systematically embeds Cambridge Primary, Lower Secondary, and IGCSE programs across campuses, ensuring consistency and excellence."
        },
        {
          "type": "li",
          "text": "Operational Efficiency for Affordability – SIS applies smart teaching models and resource management, proving that costs can be reduced without compromising outcomes."
        },
        {
          "type": "li",
          "text": "Teacher Investment as a Differentiator – Cambridge highlighted SIS’s deep commitment to continuous teacher development through Cambridge training and resources, ensuring long-lasting classroom impact."
        },
        {
          "type": "li",
          "text": "Accessible Excellence – A scalable model that balances academic rigor, well-being, and affordability, setting a new benchmark for international education."
        },
        {
          "type": "p",
          "text": "SIS has invited Cambridge to share these findings with the international education community, enabling other schools to replicate and adapt this proven model of success. This collaboration builds on SIS’s global recognition, including the prestigious 2019 award from the World Bank (IFC) and the UK’s Financial Times for its groundbreaking and transformational work in education."
        },
        {
          "type": "quote",
          "text": "We have successfully reduced school fees through our award-winning Half-Fees Model and our unique EFFECTOR teacher training framework. We proved that the same Cambridge curriculum can be delivered with quality and impact, at lower cost, even in smaller or emerging cities. We invited Cambridge to validate this journey so more schools worldwide can follow suit.",
          "cite": "Jaspal Sidhu, Founder & Chairman, SIS & Inspirasi Group of Schools"
        },
        {
          "type": "quote",
          "text": "We are delighted to partner with SIS Group of Schools in this important initiative. Their commitment to affordability without sacrificing quality reflects our shared mission at Cambridge: opening the door to international education for more students worldwide. The SIS model shows how innovation and collaboration can bring global education within reach of more communities.",
          "cite": "Dian, Senior Country Manager for Indonesia, Cambridge"
        }
      ],
      "featured": true
    },
    {
      "slug": "30-years-of-sis",
      "title": "30 Years of SIS",
      "date": "2026-02-04",
      "category": "News",
      "excerpt": "Since 1996, SIS has been part of the education landscape in Indonesia and the wider region. What began as a single school was built on a clear purpose, to contribute to the development of education by providing learning that is meaningful, accessible, and rooted in strong values.",
      "image": {
        "src": "assets/n-SIS-30-years-2026.webp",
        "w": 2319,
        "h": 1305,
        "alt": "SIS 30 years, 1996 to 2026"
      },
      "url": "https://sisschools.org/blog/celebrating-30-years-of-sis-a-journey-rooted-in-purpose-shaping-the-future/",
      "fullTitle": "Celebrating 30 Years of SIS: A Journey Rooted in Purpose, Shaping the Future"
    },
    {
      "slug": "sis-spaces",
      "title": "SIS Spaces",
      "date": null,
      "category": "Campus",
      "excerpt": "Let’s book soccer field, badminton, basket ball, swimming pool, galaxy gym, playground, and sports arena for your fun activities!",
      "image": {
        "src": "assets/n-sis-space.jpg",
        "w": 2560,
        "h": 1114,
        "alt": "SIS Space: book SIS sports and event venues"
      },
      "url": "https://sisschools.org/sis-space/",
      "note": "Venue booking page; venues listed include Bandung, Cilegon and Medan facilities."
    },
    {
      "slug": "investor-daily",
      "title": "Investor Daily",
      "date": "2026-01-21",
      "category": "Press",
      "excerpt": "SIS Group of Schools is pleased to announce that its Founder and Chairman, Mr. Jaspal Sidhu, was recently featured in Investor Daily. The article highlighted his personal journey, leadership values, and long term commitment to building accessible, high quality education in Indonesia and beyond.",
      "image": {
        "src": "assets/n-investor-daily.jpg",
        "w": 2560,
        "h": 1114,
        "alt": "Founder and Chairman of SIS Group of Schools featured in Investor Daily"
      },
      "url": "https://sisschools.org/blog/founder-and-chairman-of-sis-group-of-schools-featured-in-investor-daily/",
      "fullTitle": "Founder and Chairman of SIS Group of Schools Featured in Investor Daily"
    },
    {
      "slug": "asean-business-summit",
      "title": "ASEAN Business Summit",
      "date": "2026-01-07",
      "category": "News",
      "excerpt": "Mr. Jaspal Sidhu participated in the ASEAN Business and Investment Summit 2025 in Kuala Lumpur, appearing alongside regional and global leaders such as The Hon Senator Dato’ Seri Diraja Zambry Abd Kadir, Gita Wirjawan, Professor Allie Clemans, and Tan Sri Tony Fernandes. The summit brought together influential voices to share perspectives on collaboration and sustainable futures across ASEAN.",
      "image": {
        "src": "assets/n-asean-business-summit-2025.jpg",
        "w": 1024,
        "h": 568,
        "alt": "Global Leaders on ASEAN: conversation at the ASEAN Business and Investment Summit 2025"
      },
      "url": "https://sisschools.org/blog/asean-business-and-investment-summit/",
      "fullTitle": "Insights from Global Leaders at the ASEAN Business and Investment Summit 2025"
    },
    {
      "slug": "sis-preschool-senayan",
      "title": "A New Chapter Begins at SIS Preschool Senayan",
      "date": "2025-11-12",
      "category": "Campus",
      "excerpt": "Jakarta, Indonesia — Singapore Intercultural School (SIS), one of Indonesia’s most internationally acclaimed education groups, is bringing its world-class early learning experience to Senayan with the opening of a brand-new SIS Preschool, in partnership with Mavic Group Indonesia, a collaboration that also involves one of SIS’ own parents as part of the group. The new campus will extend SIS’ mission to nurture curiosity, creativity, and confidence, empowering young learners to become future leaders with purpose. Built upon SIS’ core foundation of the 3Ps: People, Place, and Program, the SIS Preschool Senayan will offer families a warm, inspiring environment where every child can thrive.",
      "image": {
        "src": "assets/n-sis-preschool-senayan-jakarta-scaled.jpg",
        "w": 2560,
        "h": 1114,
        "alt": "SIS Preschool Senayan, Jakarta"
      },
      "url": "https://sisschools.org/blog/a-new-chapter-in-early-learning-sis-preschool-coming-soon-to-senayan/",
      "fullTitle": "A New Chapter in Early Learning: SIS Preschool Coming Soon to Senayan",
      "campus": "senayan"
    },
    {
      "slug": "sis-surabaya-head-of-school",
      "title": "Meet Our New Head of School — Ms Rapuncel Castillano Racines, SIS Surabaya",
      "date": null,
      "category": "Campus",
      "excerpt": "Video from SIS Surabaya introducing the new Head of School, Ms Rapuncel Castillano Racines.",
      "image": {
        "src": "assets/n-sis-surabaya-international-school.webp",
        "w": 1920,
        "h": 1080,
        "alt": "Ms Rapuncel Castillano Racines in front of SIS Surabaya"
      },
      "url": "https://sisschools.org/sis-surabaya/",
      "campus": "surabaya",
      "videoUrl": "https://www.youtube.com/watch?v=7J2VJE24xLc",
      "note": "Title taken from the official video thumbnail on the SIS Surabaya page. The YouTube title is 'SIS Surabaya: Exploring Our Upgraded Facilities'. Excerpt written for the prototype, not official copy."
    },
    {
      "slug": "inside-sis-bandung",
      "title": "Inside SIS Bandung",
      "date": null,
      "category": "Campus",
      "excerpt": "Empowering Students Through the 3Ps.",
      "image": {
        "src": "assets/n-sis-bandung-lennard-murray.webp",
        "w": 1920,
        "h": 1080,
        "alt": "Lennard Murray in the SIS Bandung library"
      },
      "url": "https://sisschools.org/sis-bandung/",
      "campus": "bandung",
      "videoUrl": "https://www.youtube.com/watch?v=S9F72qu8K2Y",
      "fullTitle": "Inside SIS Bandung: Empowering Students Through the 3Ps",
      "note": "Title from the official video thumbnail. YouTube title: 'SIS Bandung: Empowering Students Through the 3Ps'."
    },
    {
      "slug": "sis-bsd-city",
      "title": "SIS to Open New School in BSD City",
      "date": "2025-07-31",
      "category": "Campus",
      "excerpt": "Singapore Intercultural School (SIS) is expanding to BSD City through a new partnership with Hiera, the latest development by PT Sinar Mitbana Mas, a joint venture company of Mitbana and Sinarmas Land.",
      "image": {
        "src": "assets/n-sis-bsd-hiera.jpg",
        "w": 1200,
        "h": 666,
        "alt": "SIS and Hiera representatives with the signed partnership agreement"
      },
      "url": "https://sisschools.org/blog/sis-to-open-new-school-in-bsd-city-a-bold-step-toward-future-ready-education/",
      "fullTitle": "SIS to Open New School in BSD City: A Bold Step Toward Future-Ready Education",
      "campus": "bsd"
    },
    {
      "slug": "international-students-indonesian-culture",
      "title": "How International School Students Integrate Into Indonesian Culture",
      "date": "2024-12-24",
      "category": "Blog",
      "excerpt": "An experience by any other international school student going to Indonesia will certainly use the word. Here in Jakarta, the choice of international schools is quite varied, combining both low-end and high-end international schools, covering pre-school to junior college. These are innovative schools, highly targeting parents and their high caliber choice of schools characterized by highly-rigorous subjects to offer students; there will be experiential learning that moves beyond mere and academic tests.",
      "image": {
        "src": "assets/n-international-school-students.webp",
        "w": 1928,
        "h": 1448,
        "alt": "Smiling students of different backgrounds with their heads together"
      },
      "url": "https://sisschools.org/blog/integrate-students-into-indonesian-culture/"
    },
    {
      "slug": "what-is-cambridge-curriculum",
      "title": "What is Cambridge Curriculum?",
      "date": "2024-12-24",
      "category": "Blog",
      "excerpt": "The Cambridge Curriculum is one of the premier, internationally recognized education programs adopted by many top schools around the world and major cities, such as Singapore and Jakarta, Indonesia. The article briefly points out some of the unique features that define the Cambridge educational system, specifying a clear route from pre-school to junior college-aged students. Most parents opt for the Cambridge Curriculum due to its high academic threshold, wide options for courses, and innovativeness in instructional methodology. The Cambridge pedagogy emphasizes experiential learning to develop learners for higher education and beyond.",
      "image": {
        "src": "assets/n-cambridge-curriculum.webp",
        "w": 1928,
        "h": 1448,
        "alt": "Cambridge curriculum at SIS"
      },
      "url": "https://sisschools.org/blog/what-is-cambridge-curriculum/"
    }
  ],
  "stories": [
    {
      "slug": "nikita-mawarni",
      "name": "Nikita Mawarni",
      "fullName": null,
      "campus": "SIS South Jakarta",
      "category": "Student",
      "excerpt": "In her own words, Nikita shares how SIS became more than a school. It was a place where learning went beyond the classroom, where she was encouraged to take risks, build ideas, make mistakes, and grow from them.",
      "image": {
        "src": "assets/Nikita-Mawarni-SIS-in-Every-Step.webp",
        "w": 2319,
        "h": 1305,
        "alt": "Video still: Nikita Mawarni, SIS South Jakarta"
      },
      "videoUrl": "https://www.youtube.com/watch?v=bOKM1delWtw",
      "url": "https://sisschools.org/essential-voisis/",
      "note": null
    },
    {
      "slug": "madeline",
      "name": "Madeline",
      "fullName": null,
      "campus": "SIS Semarang",
      "category": "Student",
      "excerpt": "With the support of her teachers, the encouragement of friends, and opportunities that pushed her to achieve more, Madeline discovered not only knowledge, but also resilience, confidence, and a clear sense of purpose.",
      "image": {
        "src": "assets/Madeline-SIS-in-Every-Step.webp",
        "w": 2319,
        "h": 1305,
        "alt": "Video still: Madeline, SIS Semarang"
      },
      "videoUrl": "https://www.youtube.com/watch?v=zLzF4UR0UWA",
      "url": "https://sisschools.org/essential-voisis/",
      "note": null
    },
    {
      "slug": "jin-hoo",
      "name": "Jin Hoo",
      "fullName": null,
      "campus": "SIS Semarang",
      "category": "Student",
      "excerpt": "Guided by dedicated teachers, supported by friends, and inspired by meaningful opportunities, Jin Hoo gained not only knowledge but also resilience, confidence, and a sense of purpose.",
      "image": {
        "src": "assets/Jin-Hoo-SIS-in-Every-Step.webp",
        "w": 2319,
        "h": 1305,
        "alt": "Video still: Jin Hoo, SIS Semarang"
      },
      "videoUrl": "https://www.youtube.com/watch?v=YqXvZ_9mkgs",
      "url": "https://sisschools.org/essential-voisis/",
      "note": null
    },
    {
      "slug": "victoria-isabelle",
      "name": "Victoria Isabelle",
      "fullName": "Victoria Isabelle Abadi",
      "campus": "SIS Cilegon",
      "category": "Student",
      "excerpt": "As Victoria describes it, SIS became a place where she could explore, learn, and grow every day. She discovered new interests, embraced challenges, and gained confidence in her abilities.",
      "image": {
        "src": "assets/Victoria-Isabelle-Abadi-SIS-in-Every-Step-Update.webp",
        "w": 2319,
        "h": 1305,
        "alt": "Video still: Victoria Isabelle Abadi, SIS Cilegon"
      },
      "videoUrl": "https://www.youtube.com/watch?v=WqF-7Y36xKQ",
      "url": "https://sisschools.org/essential-voisis/",
      "note": null
    },
    {
      "slug": "muskan-jhujunwala",
      "name": "Muskan Jhujunwala",
      "fullName": null,
      "campus": "SIS Cilegon",
      "category": "Student",
      "excerpt": "Muskan shares that SIS became more than a school. It was a place where she felt welcomed, supported, and inspired to explore her curiosity. It became an environment where she learned new languages, faced challenges, and discovered her own strength.",
      "image": {
        "src": "assets/Muskan-Jhujunwala-SIS-in-Every-Step-Update.webp",
        "w": 2319,
        "h": 1305,
        "alt": "Video still: Muskan Jhujunwala, SIS Cilegon"
      },
      "videoUrl": "https://www.youtube.com/watch?v=mX3iB-Fd4-k",
      "url": "https://sisschools.org/essential-voisis/",
      "note": null
    },
    {
      "slug": "thiha-win",
      "name": "Thiha Win",
      "fullName": null,
      "campus": "SIS Myanmar",
      "category": "Student",
      "excerpt": "Through supportive teachers and a nurturing school community, Thiha Win discovered his strengths, embraced new challenges, and continued to develop both academically and personally.",
      "image": {
        "src": "assets/Thiha-Win-SIS-Myanmar.webp",
        "w": 2319,
        "h": 1305,
        "alt": "Video still: Thiha Win, SIS Myanmar"
      },
      "videoUrl": "https://www.youtube.com/watch?v=caQfyD0ytyk",
      "url": "https://sisschools.org/essential-voisis/",
      "note": null
    },
    {
      "slug": "dimaz-andreanshah",
      "name": "Dimaz Andreanshah",
      "fullName": null,
      "campus": "SIS Medan",
      "category": "Student",
      "excerpt": "More than grades, Dimaz gained courage, leadership, and a mindset ready for the future. His story shows how learning at SIS prepares students not just for exams, but for life.",
      "image": {
        "src": "assets/DimazAndreanshah-SIS-in-Every-Step.webp",
        "w": 2319,
        "h": 1305,
        "alt": "Video still: Dimaz Andreanshah, SIS Medan"
      },
      "videoUrl": "https://www.youtube.com/watch?v=xemMkPNGGL0",
      "url": "https://sisschools.org/essential-voisis/",
      "note": null
    },
    {
      "slug": "lubna-brilla",
      "name": "Lubna Brilla",
      "fullName": "Lubna Brilla Andemstia",
      "campus": "GATEWAY Online Learning Programme",
      "category": "Student",
      "excerpt": "Lubna shares her journey as a GATEWAY Online Learning Programme student, balancing academics with her passions beyond the classroom.",
      "image": {
        "src": "assets/Lubna-Brilla-Andemstia-GATEWAY-Online-Learning-Programme.webp",
        "w": 2319,
        "h": 1305,
        "alt": "Video still: Lubna Brilla Andemstia, GATEWAY Online Learning Programme"
      },
      "videoUrl": "https://www.youtube.com/watch?v=XupCGpASjNE",
      "url": "https://sisschools.org/essential-voisis/",
      "note": null
    }
  ],
  "scholarships": {
    "name": "The SIS Founder Scholarship",
    "url": "https://sisschools.org/sis-founder-scholarship/",
    "established": "Established by the family of Jaspal Sidhu, Founder and Chairman of the SIS Group of Schools, to honour the memory of his father, Karam Sidhu.",
    "quote": {
      "text": "No talent must face roadblocks, especially in developing countries. That is why we hope to make quality education accessible to as many talented and determined young individuals in their K-12 learning journey.",
      "cite": "Jaspal Sidhu, Founder and Chairman"
    },
    "frequency": "Awarded on an annual basis.",
    "criteria": [
      "Students who are in financial need",
      "Students who have shown a passion for learning",
      "Students who demonstrate outstanding qualities like integrity, humility, compassion, perseverance and the ability to collaborate and communicate effectively"
    ],
    "amount": "The specific amounts awarded are on a case by case basis and approved by the Board of SIS Group of Schools upon recommendation from the Head Teachers of each school.",
    "aim": "The aim and hope of the SIS Founder Scholarship is to give any deserving student a leg-up on life and be the stepping stone needed to spring a young learner to greater heights.",
    "aboutKaram": [
      "Karam Sidhu was born in Singapore but had to leave school to support himself. He went on to work as a doorman for a well-known bank for almost all his working life.",
      "Once a customer left a bag full of money behind, and Karam made sure he got the money back. Integrity was fundamental to his personal values.",
      "Karam Sidhu passed away peacefully on December 12, 2018. He died knowing that Jaspal’s endeavours in the education sector will always continue to make quality education affordable and accessible."
    ],
    "pressRelease": {
      "title": "SIS Schools Announce the Inaugural Recipient of the Founder’s Scholarship",
      "date": null,
      "paragraphs": [
        "In a heartwarming display of compassion and support, SIS Schools are proud to announce the latest recipient of the SIS Founder’s Scholarship. This full scholarship has been awarded to Hanna, a meritorious student whose resilience in the face of adversity has inspired the entire SIS community.",
        "The Founder’s Scholarship covers 100% of Hanna’s school fees until graduation, affirming the institution’s commitment to fostering an environment where every student has the opportunity to pursue excellence, regardless of their circumstances."
      ]
    },
    "campusesLinked": [
      "south-jakarta",
      "north-east-jakarta",
      "palembang",
      "medan",
      "surabaya"
    ],
    "campusesLinkedNote": "The sisschools.org menu links Scholarships to these campuses (anchors on the scholarship page). The page does not list eligibility per campus.",
    "applicationProcess": null,
    "deadline": null
  },
  "careers": {
    "url": "https://sisschools.org/career/",
    "applyUrl": "https://sisschools.org/employment-application/",
    "headline": "JOIN OUR TEAM",
    "intro": "The SIS Group of Schools attracts excellent talent from around the world.",
    "generalEmail": "hrdsis@sisschools.org",
    "internshipEmail": "hrd@sisschools.org",
    "sections": [
      {
        "campus": "group",
        "name": "SIS Group of Schools",
        "overview": [
          "The SIS Group is growing fast and there are many career development opportunities opening up with the group both in Indonesia and overseas."
        ],
        "roles": [
          "Academic Leader",
          "Internship",
          "School Administrator"
        ],
        "howToApply": "Interested candidates are invited to send in a letter of application including the reasons for applying to SIS Group of Schools together with a comprehensive CV, a recent passport-size photograph and contact details of three referees (one of which must be from your current or most recent school) to hr@asis.education or hrdsis@sisschools.org. Short listed candidates will be initially interviewed via online. Following these initial interviews final candidates will have a panel interview.",
        "emails": [
          "hr@asis.education",
          "hrd@sisschools.org",
          "hrdsis@sisschools.org"
        ]
      },
      {
        "campus": "south-jakarta",
        "name": "SIS South Jakarta",
        "overview": [
          "SIS South Jakarta is located in a popular area of South Jakarta, with many facilities in the area. At the school we offer a broad and balanced education that recognises the importance of academic success without underestimating the role that education plays in helping pupils to develop a wider understanding of themselves and others.",
          "Our curriculum is based upon The Singapore Curriculum in our Primary Section, the Cambridge International Curriculum in the Secondary Section and the International Baccalaureate Diploma Programme is followed by our Junior College students. Our core programme also reflects the local needs of our student body. External Examinations are available at IGCSE and the IB Diploma Programme and student progression supported by Checkpoint tests.",
          "Memberships & Affiliations; we are a Centre for Cambridge Assessment International Examinations (CAIE) and the International Baccalaureate Diploma Programme."
        ],
        "roles": [
          "Teachers"
        ],
        "howToApply": "Interested candidates are invited to send in a letter of application including the reasons for applying to SIS South Jakarta together with a comprehensive CV, a recent passport-size photograph and contact details of three referees (one of which must be from your current or most recent school) to hrdsis@sisschools.org. Short listed candidates will be initially interviewed via online. Following these initial interviews final candidates will have a panel interview.",
        "emails": [
          "hrdsis@sisschools.org"
        ]
      },
      {
        "campus": "north-east-jakarta",
        "name": "SIS North East Jakarta (KG-NEJ)",
        "overview": [
          "SIS Kelapa Gading is a K-12 IB World School located in North Jakarta which has well over 800 students including over 90 students in our IB Diploma Program. SIS-KG graduates are going to Imperial College London, St Andrews Scotland, University of Melbourne, UC Berkeley, University of British Columbia, Hong Kong University and many other places."
        ],
        "roles": [
          "Upper Primary English Teacher",
          "Upper Primary Science Teacher & HoD",
          "Primary Science & English Teacher",
          "Lower Primary EMS Teacher",
          "Lower Secondary Science Teacher",
          "Lower Secondary Math Teacher",
          "IGCSE Chemistry Teacher",
          "IB/IGCSE Chemistry Teacher",
          "IB Economics & Business Management Teacher",
          "IB & IGCSE English Teacher (Native Speaker preferred)",
          "Preschool Teacher",
          "Preschool Counsellor"
        ],
        "howToApply": "Interested candidates are invited to send in a letter of application including the reasons for applying to SIS Kelapa Gading together with a comprehensive CV, a recent passport-size photograph and contact details of three referees (one of which must be from your current or most recent school) to jobs@sis-kg.org or hrdsis@sisschools.org. Short listed candidates will be initially interviewed via online. Following these initial interviews final candidates will have a panel interview.",
        "emails": [
          "hrdsis@sisschools.org",
          "jobs@sis-kg.org"
        ]
      },
      {
        "campus": "palembang",
        "name": "SIS Palembang",
        "overview": [
          "SIS Palembang is growing fast and there are many career development opportunities opening up with the group both in Indonesia and overseas."
        ],
        "roles": [
          "Teachers",
          "Staff"
        ],
        "howToApply": "Interested candidates are invited to send in a letter of application including the reasons for applying to SIS Palembang together with a comprehensive CV, a recent passport-size photograph and contact details of three referees (one of which must be from your current or most recent school) to hrdsis@sisschools.org. Short listed candidates will be initially interviewed via online. Following these initial interviews final candidates will have a panel interview.",
        "emails": [
          "hrdsis@sisschools.org"
        ]
      },
      {
        "campus": "surabaya",
        "name": "SIS Surabaya",
        "overview": null,
        "roles": [
          "Teachers"
        ],
        "howToApply": "Interested candidates are invited to send in a letter of application including the reasons for applying to SIS Surabaya together with a comprehensive CV, a recent passport-size photograph and contact details of three referees (one of which must be from your current or most recent school) to hrdsis@sisschools.org. Short listed candidates will be initially interviewed via online. Following these initial interviews final candidates will have a panel interview.",
        "emails": [
          "hrdsis@sisschools.org"
        ]
      },
      {
        "campus": "medan",
        "name": "SIS Medan",
        "overview": [
          "Nestled in the vibrant locale of Royal Sumatra Golfing Estate, SIS Medan offers an enriching educational experience surrounded by a myriad of amenities. Embracing a holistic approach to learning, we prioritize not only academic excellence but also the holistic development of our students, fostering a deeper understanding of self and community.",
          "Our curriculum integrates The Singapore Curriculum for our Preschool and Primary Section, the Cambridge International Curriculum for Secondary Education, and the International Baccalaureate Diploma Programme for our Junior College students. Tailored to meet local needs, our core program also includes support for external examinations such as IGCSE and the IB Diploma Programme, bolstered by Checkpoint tests for student progression.",
          "As proud members of the Centre for Cambridge Assessment International Examinations (CAIE) and advocates of the International Baccalaureate Diploma Programme, we uphold international standards in education.",
          "If you’re eager to embark on this inspiring educational journey with us, click here to begin the application process."
        ],
        "roles": [
          "Teachers"
        ],
        "howToApply": null,
        "emails": [
          "sismedan@sisschools.org"
        ]
      },
      {
        "campus": "semarang",
        "name": "SIS Semarang",
        "overview": [
          "The SIS Group is growing fast and there are many career development opportunities opening up with the group both in Indonesia and overseas."
        ],
        "roles": [],
        "howToApply": "Interested candidates are invited to send in a letter of application including the reasons for applying to SIS Semarang together with a comprehensive CV, a recent passport-size photograph and contact details of three referees (one of which must be from your current or most recent school) to the HR Department hrdsis@sisschools.org. Short listed candidates will be initially interviewed via online. Following these initial interviews final candidates will have a panel interview.",
        "emails": [
          "hrdsis@sisschools.org"
        ]
      },
      {
        "campus": "mumbai",
        "name": "VSIS Mumbai",
        "overview": [
          "Vijaybhoomi Singapore International School is an international boarding school established amidst the beauty of nature in Karjat, India to inspire young learners to learn, be responsible towards the environment and be ready for these challenges that will come their way."
        ],
        "roles": [
          "JC Principal",
          "JC Teachers"
        ],
        "howToApply": "Interested candidates are invited to send in a letter of application including the reasons for applying to VSIS together with a comprehensive CV, a recent passport-size photograph and contact details of three referees (one of which must be from your current or most recent school) to the HR Department hrdsis@sisschools.org. Short listed candidates will be initially interviewed via online. Following these initial interviews final candidates will have a panel interview.",
        "emails": [
          "hrdsis@sisschools.org"
        ]
      },
      {
        "campus": "chennai",
        "name": "ASIS Chennai",
        "overview": [
          "Anand Singapore International School or ASIS is a partnership between the prestigious Kalasalingam Group of Institutions and the SIS Group of Schools. SIS Group of Schools is an award-winning network of premier K-12 schools across the globe including Indonesia, India, Myanmar and S.Korea. SIS has 25 years of proven excellence in education. Our main mission is to make quality education affordable and accessible."
        ],
        "roles": [
          "Teachers",
          "Support Staff"
        ],
        "howToApply": "Interested candidates can submit their resume on the mentioned E-mail ID: hr@asis.education",
        "emails": [
          "hr@asis.education",
          "hrdsis@sisschools.org"
        ]
      },
      {
        "campus": "myanmar",
        "name": "SIS Myanmar",
        "overview": [
          "SIS Myanmar is the SIS Group of Schools ’ next international campus. Located in Yangon, in a partnership with SLG Education, a member of SLG Holdings, SIS Myanmar aims to prepare local and international students for the 21st century. The SIS Group of Schools is the region’s most renowned K-12 School group with international and private schools in multiple countries. It is in a strategic partnership with the International Finance Corporation (World Bank) to bring high-end, quality schools at affordable fees to countries across the world."
        ],
        "roles": [
          "Primary Science Teacher",
          "IGCSE Bio Teacher",
          "Mandarin Teacher",
          "Admission Officer (Local)",
          "Marketing Executive (Local)",
          "Marketing Manager (SLG Education)",
          "Primary English Teacher",
          "Secondary Computer Science Teacher",
          "Math Secondary Teacher",
          "Primary General Science Teacher",
          "PE Teacher (Local)"
        ],
        "howToApply": "Interested candidates are invited to send in a letter of application including the reasons for applying to SIS Myanmar together with a comprehensive CV, a recent passport-size photograph and contact details of three referees (one of which must be from your current or most recent school) to hrdept@sis-mm.org and hrdept.recruit@sis-mm.org or hrdsis@sisschools.org. Short listed candidates will be initially interviewed via online. Following these initial interviews final candidates will have a panel interview.",
        "emails": [
          "hrdept.recruit@sis-mm.org",
          "hrdept@sis-mm.org",
          "hrdsis@sisschools.org"
        ]
      }
    ],
    "note": "Vacancy titles as listed on sisschools.org/career when fetched (2026-09-23). The Surabaya overview on the site repeats the Palembang text, so it is stored as null. Roles may be outdated; link to the source."
  },
  "contact": {
    "headOffice": {
      "name": "SIS Group of Schools",
      "phone": "+62 21 759 14414",
      "phoneHref": "tel:+622175914414",
      "email": "admissions@sisschools.org",
      "address": null,
      "note": "Phone and email as shown in the sisschools.org footer. No separate head office street address is published; the same phone number belongs to SIS South Jakarta (Jl. Bona Vista Raya Lebak Bulus, Jakarta Selatan 12440)."
    },
    "whatsappGroup": "+62 811-1779-7077",
    "url": "https://sisschools.org/contact-us/",
    "bookTourUrl": "https://sisschools.org/book-tour/",
    "applyUrl": "https://sisschools.academiaerp.com/applynow/",
    "intro": "You’ve got questions, and we have answers. Just send us a message and one of our talented support staff will be pleased to help you.",
    "social": {
      "youtube": "https://www.youtube.com/channel/UC4uRuc-1eIIzQViO5qiHZTw"
    },
    "formLevels": [
      "Nursery 1 (2 years old)",
      "Nursery 2 (3 years old)",
      "Kindergarten 1 (4 years old)",
      "Kindergarten 2 (5 years old)",
      "Primary 1",
      "Primary 2",
      "Primary 3",
      "Primary 4",
      "Primary 5",
      "Primary 6",
      "Secondary 1",
      "Secondary 2",
      "Secondary 3",
      "Secondary 4",
      "Junior College 1",
      "Junior College 2",
      "English Bridging Programme",
      "GATEWAY Learning Programme"
    ]
  }
};
