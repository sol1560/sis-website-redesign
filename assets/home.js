/* SIS v2: homepage behaviour, shared by index, about, academics, schools and admissions.
   Every block is guarded, so a page only needs the sections it uses. */
document.body.classList.remove('no-js');
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* four-petal SIS flower as a background pattern */
const petal = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'><g fill='none' stroke='white' stroke-width='3'><g transform='translate(40 40)'><ellipse cx='0' cy='-16' rx='8' ry='16'/><ellipse cx='0' cy='-16' rx='8' ry='16' transform='rotate(90)'/><ellipse cx='0' cy='-16' rx='8' ry='16' transform='rotate(180)'/><ellipse cx='0' cy='-16' rx='8' ry='16' transform='rotate(270)'/></g><g transform='translate(105 100) rotate(45)'><ellipse cx='0' cy='-14' rx='7' ry='14'/><ellipse cx='0' cy='-14' rx='7' ry='14' transform='rotate(90)'/><ellipse cx='0' cy='-14' rx='7' ry='14' transform='rotate(180)'/><ellipse cx='0' cy='-14' rx='7' ry='14' transform='rotate(270)'/></g></g></svg>`;
document.documentElement.style.setProperty('--petal-pattern', `url("data:image/svg+xml,${encodeURIComponent(petal)}")`);

/* header nav state: <body data-page="about"> marks every [data-nav="about"] link as the current page */
const page = document.body.dataset.page;
$$('.nav [data-nav], .drawer [data-nav]').forEach(a => { if (a.dataset.nav === page) a.setAttribute('aria-current', 'page'); });

/* "On this page" jump bar: highlight the section in view */
const jumpLinks = $$('.jump a[href^="#"]');
if (jumpLinks.length) {
  const jumpIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) jumpLinks.forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id ? 'true' : 'false'));
  }), { rootMargin: '-45% 0px -50% 0px' });
  jumpLinks.forEach(a => { const t = document.getElementById(a.getAttribute('href').slice(1)); if (t) jumpIO.observe(t); });
}

/* reveal on scroll */
const revIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revIO.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
function observeReveal(root = document) { $$('.reveal:not(.in)', root).forEach(el => reduce ? el.classList.add('in') : revIO.observe(el)); }
observeReveal();

/* drawer */
const drawer = $('#drawer'), menuBtn = $('.menu-btn');
function openDrawer() {
  drawer.hidden = false; drawer.classList.add('open'); menuBtn.setAttribute('aria-expanded', 'true');
  requestAnimationFrame(() => drawer.classList.add('visible'));
  $('[data-close]', drawer).focus(); document.body.style.overflow = 'hidden';
}
function closeDrawer(returnFocus = true) {
  if (!drawer.classList.contains('open')) return;
  drawer.classList.add('closing'); drawer.classList.remove('visible');
  setTimeout(() => { drawer.classList.remove('open', 'closing'); drawer.hidden = true; }, reduce ? 0 : 240);
  menuBtn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
  if (returnFocus) menuBtn.focus();
}
menuBtn.addEventListener('click', openDrawer);
$('[data-close]', drawer).addEventListener('click', () => closeDrawer());
$('.drawer-scrim').addEventListener('click', () => closeDrawer());
$$('nav a, .btn', drawer).forEach(a => a.addEventListener('click', () => closeDrawer(false)));
drawer.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDrawer();
  if (e.key === 'Tab') {
    const f = $$('a, button:not([tabindex="-1"])', drawer), first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* core values */
const VALUES = {
  fairness:   { img: ['assets/j-2021-expanding-to-india.webp', 1080, 1350, 'Four SIS India students standing together'], body: 'Treating everyone by the same standard, whatever their background, language or starting point.', looks: ['Taking turns and sharing', 'Hearing every voice', 'Playing by the rules'] },
  respect:    { img: ['assets/n-international-school-students.webp', 1928, 1448, 'Smiling students of different backgrounds with their heads together'], body: 'Valuing the people, cultures and ideas around us. In an intercultural school, everything else starts here.', looks: ['Greeting in a friend\'s language', 'Listening before disagreeing', 'Caring for shared spaces'] },
  integrity:  { img: ['assets/j-2004-compassion.webp', 1080, 1350, 'SIS students holding up certificates'], body: 'Doing the right thing and owning our choices, including our mistakes.', looks: ['Honest work', 'Keeping promises', 'Saying “I got that wrong”'] },
  compassion: { img: ['assets/j-1995-conception.webp', 1080, 1350, 'A young student holding a small tree in her hands'], body: 'Noticing when someone needs help, and doing something about it.', looks: ['Including the new student', 'Community service', 'Asking “Are you okay?”'] },
  courage:    { img: ['assets/j-2007-first-sis-olympics.webp', 1080, 1350, 'SIS footballers lifting a trophy together'], body: 'Trying the hard thing: speaking up, attempting the difficult problem, standing up for what is right.', looks: ['Raising a hand anyway', 'Performing for the first time', 'Standing by a friend'] }
};
const vtabs = $$('.vtab'), vpanel = $('#vpanel');
if (vpanel) {
function selectValue(key, focus) {
  const btn = vtabs.find(t => t.dataset.value === key), idx = vtabs.indexOf(btn), v = VALUES[key];
  vtabs.forEach(t => { const on = t === btn; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
  vpanel.dataset.c = key; vpanel.setAttribute('aria-labelledby', btn.id);
  const name = key[0].toUpperCase() + key.slice(1);
  $('[data-v="kicker"]', vpanel).textContent = `Core value ${idx + 1} of 5`;
  $('[data-v="title"]', vpanel).innerHTML = `<b>${name[0]}</b>${name.slice(1)}`;
  $('[data-v="body"]', vpanel).textContent = v.body;
  $('[data-v="looks"]', vpanel).innerHTML = v.looks.map(l => `<li>${l}</li>`).join('');
  const img = $('[data-v="img"]', vpanel);
  img.src = v.img[0]; img.width = v.img[1]; img.height = v.img[2]; img.alt = v.img[3];
  vpanel.classList.remove('panel-anim'); void vpanel.offsetWidth; vpanel.classList.add('panel-anim');
  if (focus) btn.focus();
}
vtabs.forEach((t, i) => {
  t.addEventListener('click', () => selectValue(t.dataset.value));
  t.addEventListener('keydown', e => {
    const map = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let n = null;
    if (e.key in map) n = vtabs[(i + map[e.key] + vtabs.length) % vtabs.length];
    if (e.key === 'Home') n = vtabs[0];
    if (e.key === 'End') n = vtabs[vtabs.length - 1];
    if (n) { e.preventDefault(); selectValue(n.dataset.value, true); }
  });
});
$$('.banner').forEach(b => b.addEventListener('click', () => { if (vpanel) selectValue(b.dataset.value); }));
selectValue(VALUES[location.hash.slice(1)] ? location.hash.slice(1) : 'fairness');
}

/* campuses */
const CAMPUSES = [
  ['SIS South Jakarta', 'Jakarta', 'Indonesia', 'south-jakarta'], ['SIS North East Jakarta', 'Kelapa Gading, Jakarta', 'Indonesia', 'north-east-jakarta'], ['SIS Pantai Indah Kapuk', 'North Jakarta', 'Indonesia', 'pik'],
  ['SIS Senayan', 'Central Jakarta', 'Indonesia', 'senayan'], ['SIS BSD', 'Tangerang', 'Indonesia', 'bsd'], ['SIS Sedayu City', 'Jakarta', 'Indonesia', 'sedayu'],
  ['SIS Cilegon', 'Banten', 'Indonesia', 'cilegon'], ['SIS Bandung', 'West Java', 'Indonesia', 'bandung'], ['SIS Semarang', 'Central Java', 'Indonesia', 'semarang'],
  ['SIS Surabaya', 'East Java', 'Indonesia', 'surabaya'], ['SIS Medan', 'North Sumatra', 'Indonesia', 'medan'], ['SIS Palembang', 'South Sumatra', 'Indonesia', 'palembang'],
  ['ASIS Chennai', 'Tamil Nadu', 'India', 'chennai'], ['VSIS Mumbai', 'Maharashtra', 'India', 'mumbai'],
  ['SIS Myanmar', 'Yangon', 'Myanmar', 'myanmar'], ['SIS Korea', 'Gwangju', 'South Korea', 'korea']
];
const COUNTRY_C = { 'Indonesia': 'courage', 'India': 'compassion', 'Myanmar': 'integrity', 'South Korea': 'respect' };
const grid = $('#campus-grid'), sel = $('#f-campus'), toast = $('#toast');
const COUNTRY_FULL = [['Indonesia', 'ID'], ['India', 'IN'], ['Myanmar', 'MM'], ['South Korea', 'KR']];
const countryBlock = ([c]) => {
  const list = CAMPUSES.filter(x => x[2] === c);
  return `<section class="country reveal${c === 'Indonesia' ? ' wide' : ''}" data-c="${COUNTRY_C[c]}" aria-label="${c}, ${list.length} campus${list.length > 1 ? 'es' : ''}">
    <div class="country-top"><svg class="facets" aria-hidden="true"><use href="#facets"/></svg><h3>${c}</h3><span class="n" aria-hidden="true">${String(list.length).padStart(2, '0')}<small>${list.length > 1 ? 'campuses' : 'campus'}</small></span></div>
    <ul class="crows">${list.map(([n, city, , slug]) => `<li>
      <a class="crow" href="campus.html?c=${slug}"><b>${n.replace(/^(A|V)?SIS /, m => m)}<svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></b><span>${city}</span></a>
      <button class="crow-tour" type="button" data-campus="${n}" aria-label="Book a tour at ${n}" title="Book a tour"><svg class="icon" aria-hidden="true"><use href="#i-calendar"/></svg></button>
    </li>`).join('')}</ul>
  </section>`;
};
if (grid) {
  grid.innerHTML = countryBlock(COUNTRY_FULL[0]) + `<div class="dir-side">${COUNTRY_FULL.slice(1).map(countryBlock).join('')}</div>`;
  observeReveal(grid);
}

if (sel) ['Indonesia', 'India', 'Myanmar', 'South Korea'].forEach(c => {
  const og = document.createElement('optgroup'); og.label = c;
  CAMPUSES.filter(x => x[2] === c).forEach(([n]) => { const o = document.createElement('option'); o.value = o.textContent = n; og.appendChild(o); });
  sel.appendChild(og);
});
let toastT;
function showToast(msg) { $('span', toast).textContent = msg; toast.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('show'), 2600); }
if (grid) grid.addEventListener('click', e => {
  const b = e.target.closest('[data-campus]'); if (!b) return;
  /* no tour form on this page: hand the campus over to the admissions page */
  if (!sel) { location.href = `admissions.html?campus=${encodeURIComponent(b.dataset.campus)}#admissions`; return; }
  setIntent('tour'); resetForm(false);
  sel.value = b.dataset.campus; validateField('campus');
  document.getElementById('admissions').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  showToast(`${b.dataset.campus} selected for your tour`);
  setTimeout(() => $('#f-name').focus({ preventScroll: true }), reduce ? 0 : 500);
});

/* journey */
const MOMENTS = [
  ['1995', 'j-1995-conception.webp', 1080, 1350, 'An idea takes root', 'The idea for SIS is conceived.', 'A child holding a young tree'],
  ['1996', 'j-1996-jaspal-sidhu.webp', 1080, 1350, 'SIS opens in Jakarta', 'Jaspal Sidhu founds the first Singapore Intercultural School.', 'Founder Jaspal Sidhu'],
  ['2003', 'j-2003-expanding-horizon.webp', 1080, 1350, 'Expanding horizons', 'SIS opens beyond Jakarta, in Medan.', 'SIS Medan campus'],
  ['2005', 'j-2005-sis-kelapa-gading-old.webp', 1080, 1350, 'Kelapa Gading', 'A new campus for North East Jakarta.', 'The original SIS Kelapa Gading building'],
  ['2007', 'j-2007-first-sis-olympics.webp', 1080, 1350, 'The first SIS Olympics', 'Campuses come together to compete.', 'Students celebrating with a trophy'],
  ['2012', 'j-2012-making-eduation-affordable.webp', 1080, 1350, 'Making education affordable', 'SIS Palembang opens.', 'SIS Palembang under construction'],
  ['2016', 'j-2016-cambridge-ib.webp', 1081, 1351, 'Cambridge and IB', 'International curricula join the SIS pathway.', 'Cambridge and IB marks'],
  ['2019', 'j-2019-IFC-award-update.webp', 1081, 1351, 'IFC recognition', 'Recognised through a partnership with IFC, part of the World Bank Group.', 'SIS leaders receiving an IFC award'],
  ['2020', 'j-2020-sis-myanmar.webp', 1080, 1350, 'SIS Myanmar', 'A first campus outside Indonesia, in Yangon.', 'SIS Myanmar campus'],
  ['2021', 'j-2021-expanding-to-india.webp', 1080, 1350, 'Expanding to India', 'SIS opens in Chennai and Mumbai.', 'SIS India students'],
  ['2022', 'j-2022-UNSDG.webp', 1081, 1351, 'Aligned with the UN SDGs', 'Learning is linked to the UN Sustainable Development Goals.', 'UN Sustainable Development Goals logo'],
  ['2023', 'j-2023-sis-surabaya.webp', 1080, 1350, 'SIS Surabaya', 'A new campus in East Java.', 'SIS Surabaya campus'],
  ['2024', 'j-2024-sis-bandung.webp', 1080, 1350, 'SIS Bandung', 'SIS arrives in West Java.', 'SIS Bandung campus'],
  ['2025', 'j-2025-sis-north-east-jakarta.webp', 1080, 1350, 'North East Jakarta', 'A new flagship campus beside the lake.', 'Aerial view of SIS North East Jakarta']
];
const ORDER = ['fairness', 'respect', 'integrity', 'compassion', 'courage'];
const rail = $('#journey-rail');
if (rail) {
rail.innerHTML = MOMENTS.map(([y, f, w, h, t, d, alt], i) => `
  <li class="moment" data-c="${ORDER[i % 5]}">
    <span class="yr">${y}</span>
    <img class="od-media" src="assets/${f}" width="${w}" height="${h}" alt="${alt}" loading="lazy">
    <div class="txt"><h3>${t}</h3><p>${d}</p></div>
  </li>`).join('');
const prev = $('#rail-prev'), next = $('#rail-next');
const step = () => { const m = $('.moment', rail); return m ? m.getBoundingClientRect().width + 16 : 300; };
function railState() { prev.disabled = rail.scrollLeft <= 4; next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4; }
prev.addEventListener('click', () => rail.scrollBy({ left: -step() * 2 }));
next.addEventListener('click', () => rail.scrollBy({ left: step() * 2 }));
rail.addEventListener('scroll', railState, { passive: true });
rail.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); rail.scrollBy({ left: step() }); } if (e.key === 'ArrowLeft') { e.preventDefault(); rail.scrollBy({ left: -step() }); } });
addEventListener('resize', railState); railState();
}

/* form */
const form = $('#tour-form'), success = $('#form-success'), submitBtn = $('#submit-btn'), summary = $('#err-summary');
let intent = 'tour';
if (form) {
function setIntent(i) {
  intent = i;
  $$('[data-intent-btn]').forEach(b => b.setAttribute('aria-pressed', b.dataset.intentBtn === i));
  $('#form-title').textContent = i === 'tour' ? 'Book a campus tour' : 'Make an inquiry';
  $('#form-sub').textContent = i === 'tour' ? 'Tell us about your family and the campus will contact you to confirm a time.' : 'Ask us anything about SIS: curricula, fees or scholarships.';
  $('[data-label]', submitBtn).textContent = i === 'tour' ? 'Request a tour' : 'Send inquiry';
  $('[data-field="date"]').style.display = i === 'tour' ? '' : 'none';
}
$$('[data-intent-btn]').forEach(b => b.addEventListener('click', () => setIntent(b.dataset.intentBtn)));
$$('a[data-intent]').forEach(a => a.addEventListener('click', () => { setIntent(a.dataset.intent); resetForm(false); }));
const RULES = {
  name: v => v.trim().length >= 2,
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  phone: v => v.replace(/\D/g, '').length >= 8,
  campus: v => !!v,
  level: v => !!v,
  date: v => { if (!v || intent !== 'tour') return true; const d = new Date(v + 'T00:00'), t = new Date(); t.setHours(0, 0, 0, 0); return d > t; }
};
const LABELS = { name: 'Parent or guardian name', email: 'Email', phone: 'Phone or WhatsApp', campus: 'Campus', level: "Your child's stage", date: 'Preferred date' };
function validateField(n) {
  const wrap = $(`[data-field="${n}"]`), input = $('input,select', wrap), ok = RULES[n](input.value);
  wrap.classList.toggle('invalid', !ok); input.setAttribute('aria-invalid', !ok); return ok;
}
Object.keys(RULES).forEach(n => {
  const el = $(`[data-field="${n}"] input, [data-field="${n}"] select`);
  el.addEventListener('blur', () => { if (el.value) validateField(n); });
  el.addEventListener('input', () => { if ($(`[data-field="${n}"]`).classList.contains('invalid')) validateField(n); });
  if (el.tagName === 'SELECT') el.addEventListener('change', () => validateField(n));
});
const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
$('#f-date').min = tomorrow.toISOString().slice(0, 10);
form.addEventListener('submit', e => {
  e.preventDefault();
  const bad = Object.keys(RULES).filter(n => !validateField(n));
  if (bad.length) {
    $('ul', summary).innerHTML = bad.map(n => `<li><a href="#f-${n}">${LABELS[n]}</a></li>`).join('');
    summary.classList.add('show'); summary.focus(); return;
  }
  summary.classList.remove('show');
  submitBtn.disabled = true; submitBtn.classList.add('loading'); $('[data-label]', submitBtn).textContent = 'Sending…';
  setTimeout(() => {
    submitBtn.disabled = false; submitBtn.classList.remove('loading');
    form.style.display = 'none';
    $('#success-text').textContent = intent === 'tour' ? `The ${sel.value} admissions team will contact you to confirm your tour.` : `The ${sel.value} admissions team will reply to your inquiry.`;
    success.classList.add('show'); success.focus();
  }, reduce ? 300 : 1100);
});
summary.addEventListener('click', e => { const a = e.target.closest('a'); if (!a) return; e.preventDefault(); $(a.getAttribute('href')).focus(); });
function resetForm(clear = true) {
  success.classList.remove('show'); form.style.display = '';
  if (clear) { form.reset(); $$('.field', form).forEach(f => f.classList.remove('invalid')); summary.classList.remove('show'); }
  setIntent(intent);
}
$('#form-again').addEventListener('click', () => { resetForm(true); $('#f-name').focus(); });

/* arriving from another page: admissions.html?campus=SIS%20Bandung or ?intent=inquire */
const qs = new URLSearchParams(location.search);
if (qs.get('intent') === 'inquire') setIntent('inquire');
const qCampus = qs.get('campus');
if (qCampus && [...sel.options].some(o => o.value === qCampus)) {
  sel.value = qCampus; validateField('campus');
  showToast(`${qCampus} selected for your tour`);
}
}

/* facade easter eggs: a breeze under the pointer, and the FRICC wave */
const facade = $('.facade'), banners = facade ? $$('.banner', facade) : [];
if (facade) {
function fricWave() {
  facade.classList.remove('wave'); void facade.offsetWidth; facade.classList.add('wave');
  showToast('Fairness · Respect · Integrity · Compassion · Courage');
}
facade.addEventListener('animationend', e => { if (e.animationName === 'wave' && e.target === banners[4]) facade.classList.remove('wave'); });
if (!reduce) {
  let lastX = null;
  facade.addEventListener('pointermove', e => {
    if (lastX === null) { lastX = e.clientX; return; }
    const vx = Math.max(-40, Math.min(40, e.clientX - lastX)); lastX = e.clientX;
    banners.forEach(b => {
      const r = b.getBoundingClientRect(), near = Math.max(0, 1 - Math.abs(e.clientX - (r.left + r.width / 2)) / (r.width * 1.6));
      if (!near) return;
      b.style.setProperty('--sway', (vx * near * 0.12).toFixed(2) + 'deg');
      clearTimeout(b._sway); b._sway = setTimeout(() => b.style.setProperty('--sway', '0deg'), 140);
    });
  });
  facade.addEventListener('pointerleave', () => { lastX = null; banners.forEach(b => b.style.setProperty('--sway', '0deg')); });
  /* brush across all five banners from Fairness to Courage in one sweep */
  let sweep = [];
  banners.forEach((b, i) => b.addEventListener('pointerenter', () => {
    const now = Date.now();
    sweep = sweep.filter(s => now - s.t < 1400);
    if (i === 0) sweep = [];
    if (sweep.length === i) sweep.push({ i, t: now }); else sweep = [];
    if (sweep.length === 5) { sweep = []; fricWave(); }
  }));
}
/* or type F-R-I-C-C anywhere outside a form field */
let typed = '';
addEventListener('keydown', e => {
  if (e.target.closest && e.target.closest('input, textarea, select')) return;
  if (e.key.length !== 1) return;
  typed = (typed + e.key.toLowerCase()).slice(-5);
  if (typed === 'fricc') { typed = ''; fricWave(); }
});
}

/* university destinations */
const UNIS = [
  ['Imperial College London', 'UK'], ['University of Oxford', 'UK'], ['University of Cambridge', 'UK'], ['UCL', 'UK'], ['University of St Andrews', 'UK'],
  ['Harvard University', 'USA'], ['University of Pennsylvania', 'USA'], ['UC Berkeley', 'USA'], ['Carnegie Mellon University', 'USA'], ['UC San Diego', 'USA'],
  ['National University of Singapore', 'Asia'], ['Nanyang Technological University', 'Asia'], ['Tsinghua University', 'Asia'], ['The University of Hong Kong', 'Asia'],
  ['University of Melbourne', 'Australia'], ['UNSW Sydney', 'Australia'], ['The University of Sydney', 'Australia'], ['Monash University', 'Australia'],
  ['University of Toronto', 'Canada'], ['University of British Columbia', 'Canada'], ['Simon Fraser University', 'Canada'],
  ['Universitas Indonesia', 'Indonesia'], ['Universitas Gadjah Mada', 'Indonesia'], ['Universitas Diponegoro', 'Indonesia']
];
const REGIONS = [
  ['UK', 'United Kingdom', 'respect'], ['USA', 'United States', 'courage'], ['Asia', 'Singapore · China · Hong Kong', 'integrity'],
  ['Australia', 'Australia', 'compassion'], ['Canada', 'Canada', 'fairness'], ['Indonesia', 'Indonesia', 'sisred']
];
const CODE = { UK: 'UK', USA: 'US', Asia: 'ASIA', Australia: 'AU', Canada: 'CA', Indonesia: 'ID' };
if ($('#uni-regions')) {
$('#uni-total').textContent = UNIS.length;
$('#uni-total-cap').textContent = `universities across ${REGIONS.length} regions`;
$('#uni-regions').innerHTML = REGIONS.map(([key, full, c], i) => {
  const list = UNIS.filter(u => u[1] === key);
  return `<li class="region reveal" data-c="${c}" style="--d:${i}">
    <svg class="facets" aria-hidden="true"><use href="#facets"/></svg>
    <div class="region-top">
      <div class="region-name od-stack"><span class="region-code" aria-hidden="true">${CODE[key]}</span><span class="region-full">${full}</span></div>
      <span class="region-count">${list.length} universities</span>
    </div>
    <ul aria-label="${full}">${list.map(([n]) => `<li>${n}</li>`).join('')}</ul>
  </li>`;
}).join('');
observeReveal($('#uni-regions'));
}

/* arriving at index.html#section from another page: re-align once the JS-built sections have their final height */
if (document.body.dataset.page === 'home' && location.hash) {
  const target = document.getElementById(location.hash.slice(1));
  if (target) addEventListener('load', () => target.scrollIntoView({ block: 'start' }), { once: true });
}
