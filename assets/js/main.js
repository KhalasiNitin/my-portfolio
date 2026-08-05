// ============ Icon set (inline SVG — no external font, always renders) ============
const ICONS = {
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-left': '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>',
  'code': '<path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/>',
  'rocket': '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  'desktop': '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
  'mobile': '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  'cogs': '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'envelope': '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  'map-marker': '<path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  'briefcase': '<rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
  'wordpress': '<circle cx="12" cy="12" r="10"/><text x="12" y="16.5" font-size="11" font-weight="700" text-anchor="middle" stroke="none" fill="currentColor">W</text>'
};
const ICONS_FILLED = {
  'whatsapp': '<path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.44zM12.06 21.6a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-3.74.98 1-3.65-.23-.37a9.7 9.7 0 0 1-1.49-5.19c0-5.36 4.37-9.73 9.75-9.73 2.6 0 5.05 1.02 6.89 2.86a9.67 9.67 0 0 1 2.86 6.89c0 5.37-4.37 9.78-9.74 9.78zm5.34-7.29c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.34z"/>',
  'facebook': '<path d="M14 22v-8.5h2.85l.43-3.31H14V8.05c0-.96.27-1.62 1.65-1.62h1.76V3.48A23.6 23.6 0 0 0 14.87 3.3c-2.53 0-4.26 1.54-4.26 4.38v2.5H7.75v3.32h2.86V22z"/>',
  'instagram': '<rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.15"/>',
  'linkedin': '<rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7.2" cy="7.2" r="1.25"/><path d="M7.2 10.5V17" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M11 17v-3.9c0-1.4.95-2.3 2.15-2.3 1.15 0 1.95.9 1.95 2.3V17" stroke="currentColor" stroke-width="1.8" fill="none"/>'
};

function renderIcons(root) {
  (root || document).querySelectorAll('[data-icon]').forEach(el => {
    const name = el.dataset.icon;
    if (ICONS[name]) {
      el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
    } else if (ICONS_FILLED[name]) {
      el.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor">${ICONS_FILLED[name]}</svg>`;
    }
  });
}
renderIcons();

// ============ Nav scroll state + mobile toggle (with overlay + scroll lock) ============
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
let navOverlay = document.querySelector('.nav-overlay');
if (!navOverlay && navToggle) {
  navOverlay = document.createElement('div');
  navOverlay.className = 'nav-overlay';
  document.body.appendChild(navOverlay);
}

window.addEventListener('scroll', () => {
  if (nav) { if (window.scrollY > 40) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
}, { passive: true });

function closeMenu() {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.classList.remove('menu-open');
  navToggle.textContent = '\u2630';
}
function openMenu() {
  navLinks.classList.add('open');
  navOverlay.classList.add('open');
  document.body.classList.add('menu-open');
  navToggle.textContent = '\u2715';
}

if (navToggle) {
  navToggle.textContent = '\u2630';
  navToggle.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });
  navOverlay.addEventListener('click', closeMenu);
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}

// ============ AOS (scroll animations) ============
if (window.AOS) {
  AOS.init({ duration: 650, easing: 'ease-out-cubic', once: true, offset: 60 });
}

// ============ Hero typed role ============
const typedEl = document.querySelector('.typed-role');
if (typedEl) {
  const roles = ['Frontend Developer', 'WordPress Developer', 'UI Perfectionist', 'Freelancer @ Surat, IN'];
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const word = roles[ri];
    if (!deleting) {
      ci++;
      typedEl.textContent = word.slice(0, ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      typedEl.textContent = word.slice(0, ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
}

// ============ Portfolio thumbnails (local, no external image service) ============
function projectThumbDataUri(name, url, seedIndex) {
  const palette = [
    ['#10B981', '#047857'], ['#F2994A', '#EAB308'], ['#0D9488', '#059669'],
    ['#EAB308', '#F2994A'], ['#047857', '#0D9488'], ['#F2994A', '#10B981'],
  ];
  const [c1, c2] = palette[seedIndex % palette.length];
  const domain = url.replace('https://', '').replace('http://', '').replace(/\/$/, '');
  const domainShort = domain.length > 26 ? domain.slice(0, 24) + '…' : domain;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500">
    <defs>
      <linearGradient id="g${seedIndex}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="700" height="500" fill="url(#g${seedIndex})"/>
    <circle cx="610" cy="70" r="150" fill="#ffffff" opacity="0.06"/>
    <circle cx="60" cy="460" r="120" fill="#000000" opacity="0.08"/>
    <rect x="36" y="34" width="628" height="432" rx="10" fill="rgba(10,9,20,0.18)"/>
    <rect x="36" y="34" width="628" height="38" rx="10" fill="rgba(10,9,20,0.28)"/>
    <circle cx="58" cy="53" r="5" fill="#F2994A"/>
    <circle cx="75" cy="53" r="5" fill="#EAB308"/>
    <circle cx="92" cy="53" r="5" fill="#0D9488"/>
    <rect x="115" y="45" width="220" height="16" rx="8" fill="rgba(255,255,255,0.22)"/>
    <text x="123" y="57" font-family="JetBrains Mono, monospace" font-size="10.5" fill="#ffffff" opacity="0.85">${domainShort}</text>
    <rect x="58" y="94" width="592" height="20" rx="4" fill="rgba(255,255,255,0.16)"/>
    <rect x="58" y="130" width="340" height="34" rx="6" fill="rgba(255,255,255,0.32)"/>
    <rect x="58" y="176" width="230" height="12" rx="4" fill="rgba(255,255,255,0.18)"/>
    <rect x="58" y="210" width="150" height="30" rx="15" fill="rgba(255,255,255,0.9)"/>
    <rect x="58" y="264" width="176" height="96" rx="8" fill="rgba(255,255,255,0.14)"/>
    <rect x="250" y="264" width="176" height="96" rx="8" fill="rgba(255,255,255,0.14)"/>
    <rect x="442" y="264" width="176" height="96" rx="8" fill="rgba(255,255,255,0.14)"/>
    <rect x="58" y="384" width="592" height="58" rx="8" fill="rgba(10,9,20,0.14)"/>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const grid = document.getElementById('portfolio-grid');
window.renderPortfolio = function (projects) {
  if (!grid) return;
  projects.forEach((p, i) => {
    const [name, url, tags, img] = p; // img = optional 4th item: real screenshot filename
    const primaryTag = tags.split(' ')[0];
    const realImg = img ? `assets/images/portfolio/${img}` : `assets/images/portfolio/${slugify(name)}.jpg`;
    const fallbackImg = projectThumbDataUri(name, url, i);
    const card = document.createElement('div');
    card.className = 'work-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String((i % 3) * 80));
    card.dataset.tags = tags;
    card.style.backgroundImage = `url('${fallbackImg}')`;
    const probe = new Image();
    probe.onload = () => { card.style.backgroundImage = `url('${realImg}')`; };
    probe.src = realImg;
    card.innerHTML = `
      <div class="work-top">
        <span class="work-tag">${primaryTag}</span>
        <a class="work-link" href="${url}" target="_blank" aria-label="Open ${name}"><i class="icon" data-icon="external-link"></i></a>
      </div>
      <div>
        <h4>${name}</h4>
        <div class="work-url">${url.replace('https://','').replace(/\/$/,'')}</div>
      </div>`;
    grid.appendChild(card);
  });
  renderIcons(grid);
  if (window.AOS) AOS.refreshHard();
};

// ============ Portfolio filter ============
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.work-card').forEach(card => {
      const show = f === 'all' || (card.dataset.tags || '').includes(f);
      card.classList.toggle('hide', !show);
    });
  });
});

// ============ Contact form ============
// Submits via FormSubmit (https://formsubmit.co) — no backend needed.
// IMPORTANT: the very first submission triggers a one-time confirmation
// email from FormSubmit to Nitinkhalasi888@gmail.com. That link must be
// clicked once before future messages deliver automatically.
const form = document.getElementById('contact-form');
if (form) {
  const msg = form.querySelector('.form-message');
  form.addEventListener('submit', () => {
    msg.textContent = 'Sending…';
    msg.className = 'form-message ok';
  });
}
