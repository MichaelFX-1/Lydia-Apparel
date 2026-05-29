/* =========================================================
   Lydia's Apparel — main script
   Pure vanilla JS + GSAP/ScrollTrigger (CDN)
   ========================================================= */

const WHATSAPP_NUMBER = '+2348145024193';

/* ---------- Product catalogue ---------- */
const PRODUCTS = [
  { id: 'p1', name: 'Spectrum Roll Edit', img: 'assets/fabric-01.jpg', desc: 'Curated multi-tone roll selection — soft pastels through metropolitan greys.', material: 'Cotton-silk blend', fit: 'Drapes softly, holds shape', season: 'All season', tag: 'trending' },
  { id: 'p2', name: 'Moss Silk Crepe', img: 'assets/fabric-02.jpg', desc: 'A deep, living green with a sand-washed finish. Drapes like rainfall.', material: 'Mulberry silk crepe', fit: 'Fluid, weighty drape', season: 'Spring · Summer', tag: 'limited' },
  { id: 'p3', name: 'Atelier Shirt Stack', img: 'assets/fabric-03.jpg', desc: 'Premium shirting cottons — white, wine, navy and azure for bespoke shirting.', material: 'Egyptian cotton 120s', fit: 'Crisp, soft hand', season: 'All season', tag: 'trending' },
  { id: 'p4', name: 'Royal Violet Satin', img: 'assets/fabric-04.jpg', desc: 'Mulberry silk woven in Como. Iridescent purple with a hand of pure water.', material: 'Silk charmeuse', fit: 'Slip-drape, evening cut', season: 'Evening', tag: 'limited' },
  { id: 'p5', name: 'Étoile Sequin Mesh', img: 'assets/fabric-05.jpg', desc: 'Hand-beaded across a stretch tulle base — for couture evening pieces.', material: 'Beaded tulle', fit: 'Stretch, body-skim', season: 'Evening · Gala', tag: 'limited' },
  { id: 'p6', name: 'Heritage Embossed', img: 'assets/fabric-06.jpg', desc: 'Floral-embossed satin in mature jewel tones. Quietly opulent.', material: 'Satin jacquard', fit: 'Structured drape', season: 'Autumn · Winter', tag: 'new' },
  { id: 'p7', name: 'Harmattan Edit Pack', img: 'assets/fabric-07.jpg', desc: 'Wine, dark green, gold, black, burnt orange and dark brown — the season palette.', material: 'Brushed cotton twill', fit: 'Tailored, peached', season: 'Harmattan', tag: 'new' },
  { id: 'p8', name: 'Atelier Suiting Rolls', img: 'assets/fabric-08.jpg', desc: 'Italian wool checks and pinstripes for bespoke suits and overcoats.', material: 'Super 150s wool', fit: 'Tailoring-weight', season: 'Autumn · Winter', tag: 'trending' },
  { id: 'p9', name: 'Bespoke Wool Stack', img: 'assets/fabric-10.jpg', desc: 'Worsted wools in storm grey, ivory, sand and indigo. Built for sharp suits.', material: 'Worsted wool', fit: 'Holds a crease beautifully', season: 'All season', tag: 'trending' },
  { id: 'p10', name: 'Atelier Capsule Stack', img: 'assets/fabric-09.jpg', desc: 'A complete wardrobe palette in one capsule — coral, teal, plum, oxford.', material: 'Cotton-poly blend', fit: 'Versatile shirting weight', season: 'All season', tag: 'new' },
  { id: 'p11', name: 'Pastel Roll Pyramid', img: 'assets/fabric-11.jpg', desc: 'A pyramid of pastel rolls — rose, lavender, sage, sky and mint. Soft daywear palette.', material: 'Premium cotton blend', fit: 'Soft drape, light weight', season: 'Spring · Summer', tag: 'new' },
  { id: 'p12', name: 'Honeycomb Waffle Stack', img: 'assets/fabric-12.jpg', desc: 'Layered waffle-weave textures in chocolate, sky, olive, ivory, navy, camel and noir.', material: 'Waffle-weave cotton', fit: 'Plush, textured hand', season: 'All season', tag: 'trending' },
  { id: 'p13', name: 'Celestial Brocade', img: 'assets/fabric-13.jpg', desc: 'Cornflower blue ground with gold-foiled botanical brocade. Statement occasion fabric.', material: 'Metallic jacquard brocade', fit: 'Structured, regal', season: 'Evening · Bridal', tag: 'limited' },
  { id: 'p14', name: 'Olive Pinstripe Drape', img: 'assets/fabric-14.jpg', desc: 'Olive green ground with delicate gold pinstripes. Soft drape with quiet luxury.', material: 'Silk-touch polyester', fit: 'Fluid drape, evening cut', season: 'All season', tag: 'trending' },
  { id: 'p15', name: 'Saffron Crepe Fold', img: 'assets/fabric-15.jpg', desc: 'Deep saffron crepe with raw fringed selvedge. Warm, rich, ceremonial.', material: 'Heavy crepe', fit: 'Tailored drape', season: 'Autumn · Festive', tag: 'new' },
  { id: 'p16', name: 'Pique Trio — Mint · Ivory · Noir', img: 'assets/fabric-16.jpg', desc: 'A trio of fine pique-textured cottons in mint, ivory and noir. Modern minimal staples.', material: 'Pique cotton', fit: 'Crisp, dimensional', season: 'Spring · Summer', tag: 'trending' },
  { id: 'p17', name: 'Lilac Satin Whisper', img: 'assets/fabric-17.jpg', desc: 'Soft lilac satin with raw-edge selvedge. Romantic and luminous against the skin.', material: 'Premium satin', fit: 'Slip drape, fluid', season: 'Spring · Evening', tag: 'new' },
  { id: 'p18', name: 'Emerald Beaded Couture', img: 'assets/fabric-18.jpg', desc: 'Deep emerald tulle hand-beaded with floral motifs and iridescent sequins. Couture-grade.', material: 'Hand-beaded tulle', fit: 'Sheer, body-skim', season: 'Gala · Bridal', tag: 'limited' },
  { id: 'p19', name: 'Spectrum Drape Wall', img: 'assets/fabric-19.jpg', desc: 'Floor-length drape rolls in tan, periwinkle, rose, wine, navy, sun, plum, cream and indigo.', material: 'Stretch jersey drape', fit: 'Body-flattering, ruched', season: 'All season', tag: 'trending' },
  { id: 'p20', name: 'Amber Liquid Silk', img: 'assets/fabric-20.jpg', desc: 'Liquid amber silk with luminous folds. Ceremonial richness for show-stopping pieces.', material: 'Liquid silk satin', fit: 'Fluid, weighty drape', season: 'Evening · Festive', tag: 'limited' },
  { id: 'p21', name: 'Camel Fringe Cotton', img: 'assets/fabric-21.jpg', desc: 'Warm camel cotton with hand-frayed fringe edges set against a backdrop of jewel-tone rolls.', material: 'Premium brushed cotton', fit: 'Soft, structured drape', season: 'All season', tag: 'new' },
  { id: 'p22', name: 'Rouge Chiffon Veil', img: 'assets/fabric-22.jpg', desc: 'Cherry-red chiffon with whisper-thin selvedge. Romantic, weightless, luminous.', material: 'Silk chiffon', fit: 'Floating, sheer drape', season: 'Spring · Evening', tag: 'new' },
  { id: 'p23', name: 'Paisley Lace Spectrum', img: 'assets/fabric-23.jpg', desc: 'Ten shades of paisley sequin lace — burgundy, emerald, blush, olive, sky and beyond.', material: 'Sequin guipure lace', fit: 'Structured, ornate', season: 'Bridal · Gala', tag: 'limited' },
  { id: 'p24', name: 'Waffle Knit Trinity', img: 'assets/fabric-24.jpg', desc: 'Forest, ivory and burgundy waffle-knit cottons stacked on shearling. Cosy, tactile, modern.', material: 'Waffle-knit cotton', fit: 'Plush, textured', season: 'Autumn · Winter', tag: 'new' },
  { id: 'p25', name: 'Aegean Floral Jacquard', img: 'assets/fabric-25.jpg', desc: 'Teal jacquard with copper, gold and aqua floral bursts. Couture statement textile.', material: 'Silk-blend jacquard', fit: 'Structured, sculptural', season: 'Evening · Couture', tag: 'limited' },
  { id: 'p26', name: 'Pearl Cascade Couture', img: 'assets/fabric-26.jpg', desc: 'Pure-white pearl-beaded couture panel — hand-set seashell scallops and a flowing train.', material: 'Hand-beaded bridal tulle', fit: 'Body-skim, train', season: 'Bridal', tag: 'limited' },
  { id: 'p27', name: 'Atelier Beaded Library', img: 'assets/fabric-27.jpg', desc: 'A library of beaded lace in fourteen tones — ivory, sapphire, gold, emerald, rose and more.', material: 'Beaded scallop lace', fit: 'Structured, ornamental', season: 'Bridal · Gala', tag: 'trending' },
  { id: 'p28', name: 'Gilded Pearl Mermaid', img: 'assets/fabric-28.jpg', desc: 'Liquid gold pearl-beaded mermaid panel with a fluted train. Pure ceremonial richness.', material: 'Gold pearl couture', fit: 'Mermaid, sculpted', season: 'Bridal · Festive', tag: 'limited' },
];

/* ---------- Render product cards ---------- */
function productCard(p) {
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="pc-image">
        <span class="pc-badge ${p.tag}">${p.tag === 'limited' ? 'Limited' : p.tag === 'new' ? 'New In' : 'Trending'}</span>
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      </div>
      <div class="pc-body">
        <h3 class="pc-name">${p.name}</h3>
        <p class="pc-meta">${p.material} · ${p.season}</p>
        <p class="pc-desc">${p.desc}</p>
        <p class="pc-price-on-request">Price on Request</p>
        <div class="pc-actions">
          <button class="btn btn-primary" data-add="${p.id}">Add to Bag</button>
          <button class="btn btn-ghost" data-order="${p.id}">Enquire</button>
        </div>
      </div>
    </article>
  `;
}

function fillGrid(id, items) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = items.map(productCard).join('');
}
const byId = id => PRODUCTS.find(p => p.id === id);
fillGrid('productGrid', PRODUCTS.slice(0, 8));
fillGrid('bestGrid', ['p4','p2','p18','p13','p26','p28','p25','p23'].map(byId));
fillGrid('newGrid', PRODUCTS.filter(p => p.tag === 'new').concat(PRODUCTS.filter(p => p.tag === 'limited')).slice(0, 12));

/* ---------- Cart ---------- */
const cart = new Map();
const $cartCount = document.getElementById('cartCount');
const $cartItems = document.getElementById('cartItems');
const $cartSubtotal = document.getElementById('cartSubtotal');
const $cartPanel = document.getElementById('cartPanel');
const $cartBackdrop = document.getElementById('cartBackdrop');

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('is-show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('is-show'), 2200);
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id); if (!p) return;
  const e = cart.get(id) || { product: p, qty: 0 };
  e.qty += 1; cart.set(id, e);
  renderCart();
  toast(`Added · ${p.name}`);
}
function setQty(id, delta) {
  const e = cart.get(id); if (!e) return;
  e.qty += delta;
  if (e.qty <= 0) cart.delete(id); else cart.set(id, e);
  renderCart();
}
function removeFromCart(id) { cart.delete(id); renderCart(); }

function renderCart() {
  const entries = [...cart.values()];
  const count = entries.reduce((s, e) => s + e.qty, 0);
  $cartCount.textContent = count;
  if (!entries.length) {
    $cartItems.innerHTML = `<div class="cart-empty">Your bag is quiet.<br/>Add a fabric to begin.</div>`;
  } else {
    $cartItems.innerHTML = entries.map(({ product: p, qty }) => `
      <div class="cart-item" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}"/>
        <div class="ci-body">
          <span class="ci-name">${p.name}</span>
          <span class="ci-price">Price on Request</span>
          <div class="ci-controls">
            <button data-dec="${p.id}">−</button>
            <span class="ci-qty">${qty}</span>
            <button data-inc="${p.id}">+</button>
            <button class="ci-remove" data-rm="${p.id}">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }
  if ($cartSubtotal) $cartSubtotal.textContent = entries.length ? `${count} item${count > 1 ? 's' : ''}` : '—';
  setWaLinks();
}
// initial render happens after setWaLinks definition below

/* WhatsApp builders */
function waUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function buildCartMessage() {
  const entries = [...cart.values()];
  if (!entries.length) return `Hello Lydia, I'd like to begin a fabric consultation.`;
  let msg = `Hello Lydia's Apparel ✦\nI'd like to enquire about the following from your atelier:\n\n`;
  entries.forEach(({ product: p, qty }, i) => {
    msg += `${i + 1}. ${p.name} — qty ${qty} (${p.material})\n`;
  });
  msg += `\nPlease confirm availability, current pricing and delivery options. Thank you.`;
  return msg;
}
function buildProductMessage(p) {
  return `Hello Lydia's Apparel ✦\nI'm interested in: ${p.name}\nMaterial: ${p.material}\n\nCould you advise on current price, available yardage and delivery?`;
}

/* ---------- Cart open/close ---------- */
function openCart() { $cartPanel.classList.add('is-open'); $cartBackdrop.classList.add('is-open'); $cartPanel.setAttribute('aria-hidden', 'false'); }
function closeCart() { $cartPanel.classList.remove('is-open'); $cartBackdrop.classList.remove('is-open'); $cartPanel.setAttribute('aria-hidden', 'true'); }
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
$cartBackdrop.addEventListener('click', closeCart);
document.getElementById('cartCheckout').addEventListener('click', () => {
  window.open(waUrl(buildCartMessage()), '_blank');
});

/* Delegated clicks */
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) { addToCart(add.dataset.add); return; }
  const ord = e.target.closest('[data-order]');
  if (ord) { const p = PRODUCTS.find(x => x.id === ord.dataset.order); if (p) window.open(waUrl(buildProductMessage(p)), '_blank'); return; }
  const inc = e.target.closest('[data-inc]'); if (inc) { setQty(inc.dataset.inc, +1); return; }
  const dec = e.target.closest('[data-dec]'); if (dec) { setQty(dec.dataset.dec, -1); return; }
  const rm = e.target.closest('[data-rm]'); if (rm) { removeFromCart(rm.dataset.rm); return; }
});

/* WhatsApp links */
function setWaLinks() {
  const url = waUrl(buildCartMessage());
  ['waFloat', 'footerWa', 'waSocial'].forEach(id => {
    const el = document.getElementById(id); if (el) el.href = url;
  });
}
setWaLinks();
renderCart();

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const stored = localStorage.getItem('lydia-theme');
if (stored) document.documentElement.setAttribute('data-theme', stored);
themeIcon.textContent = document.documentElement.getAttribute('data-theme') === 'light' ? '☀' : '☾';
themeToggle.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('lydia-theme', next);
  themeIcon.textContent = next === 'light' ? '☀' : '☾';
});

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-open');
  navLinks.classList.toggle('is-open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menuBtn.classList.remove('is-open');
  navLinks.classList.remove('is-open');
}));

/* ---------- Sticky nav ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 30);
}, { passive: true });

/* ---------- Custom cursor ---------- */
const cur = document.querySelector('.cursor');
const trail = document.querySelector('.cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;
window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
});
function loopCursor() {
  tx += (mx - tx) * 0.18;
  ty += (my - ty) * 0.18;
  trail.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
  requestAnimationFrame(loopCursor);
}
loopCursor();
document.querySelectorAll('a, button, .product-card, .collection-card, .float-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.classList.add('is-hover'); trail.classList.add('is-hover'); });
  el.addEventListener('mouseleave', () => { cur.classList.remove('is-hover'); trail.classList.remove('is-hover'); });
});

/* ---------- Hero parallax on cursor ---------- */
const stage = document.getElementById('heroStage');
if (stage) {
  stage.addEventListener('mousemove', e => {
    const rect = stage.getBoundingClientRect();
    const rx = (e.clientX - rect.left) / rect.width - 0.5;
    const ry = (e.clientY - rect.top) / rect.height - 0.5;
    stage.querySelectorAll('.float-card').forEach(c => {
      const d = parseFloat(c.dataset.depth || 1);
      c.style.transform = `${c.classList.contains('center') ? 'translate(-50%,-50%) ' : ''}translate3d(${rx * 30 * d}px, ${ry * 30 * d}px, 0) rotateY(${rx * 8 * d}deg) rotateX(${-ry * 8 * d}deg)`;
    });
  });
  stage.addEventListener('mouseleave', () => {
    stage.querySelectorAll('.float-card').forEach(c => { c.style.transform = ''; });
  });
}

/* ---------- Reveal on scroll (IntersectionObserver fallback) ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .section-head, .product-card, .collection-card, .limited-card, .exp-card, .craft-step, .dl-card, .testi-grid blockquote').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

/* ---------- GSAP intro + ScrollTrigger ---------- */
if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-title .line', { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.12, delay: 0.4 });
  gsap.from('.eyebrow, .hero-sub, .hero-cta, .hero-stats', { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.1, delay: 0.9 });
  gsap.from('.float-card', { scale: 0.6, opacity: 0, duration: 1.4, ease: 'expo.out', stagger: 0.12, delay: 0.6 });

  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.from(el, { y: 60, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
  });
  gsap.utils.toArray('.product-card').forEach((el, i) => {
    gsap.from(el, { y: 50, opacity: 0, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
  });
}

/* ---------- Slider ---------- */
const slider = document.getElementById('slider');
if (slider) {
  const slides = slider.querySelector('.slides');
  const count = slides.children.length;
  let idx = 0;
  const go = n => { idx = (n + count) % count; slides.style.transform = `translateX(-${idx * 100}%)`; };
  slider.querySelector('.sl-next').addEventListener('click', () => go(idx + 1));
  slider.querySelector('.sl-prev').addEventListener('click', () => go(idx - 1));
  setInterval(() => go(idx + 1), 6000);
}

/* ---------- Newsletter ---------- */
document.getElementById('newsBtn').addEventListener('click', () => {
  const v = document.getElementById('newsEmail').value.trim();
  if (!v || !v.includes('@')) { toast('Please enter a valid email'); return; }
  toast('Welcome to the Atelier Letter ✦');
  document.getElementById('newsEmail').value = '';
});

/* ---------- Loader off ---------- */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('is-done'), 1400);
});

/* Year */
document.getElementById('year').textContent = new Date().getFullYear();
/* =========================================================
   UPGRADE LAYER — Three.js, Swiper, tilt, strips, cube drag
   ========================================================= */

/* ---- Fabric strip marquees (duplicate set for seamless loop) ---- */
(function buildStrips() {
  const imgs = PRODUCTS.map(p => `<img src="${p.img}" alt="${p.name}" loading="lazy"/>`).join('');
  ['fabricStripTrack', 'fabricStripTrack2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = imgs + imgs; // duplicate for infinite scroll
  });
})();

/* ---- Couture Swiper (3D coverflow) ---- */
(function buildCouture() {
  const wrap = document.getElementById('coutureSlides');
  if (!wrap) return;
  wrap.innerHTML = PRODUCTS.map(p => `
    <div class="swiper-slide">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      <div class="cs-cap">
        <h4>${p.name}</h4>
        <p>${p.material} · ${p.season}</p>
      </div>
    </div>
  `).join('');
  if (window.Swiper) {
    new Swiper('.coutureSwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      speed: 900,
      autoplay: { delay: 3500, disableOnInteraction: false },
      coverflowEffect: { rotate: 35, stretch: 0, depth: 220, modifier: 1, slideShadows: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
  }
})();

/* ---- Three.js golden particle background ---- */
(function initThree() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas || !window.THREE) return;
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000);
  cam.position.z = 5;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);

  // Particle field
  const N = 1400;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 14;
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0xd9b46a, size: 0.018, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending });
  const stars = new THREE.Points(geo, mat);
  scene.add(stars);

  // Floating glowing torus (luxury accent)
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(1.2, 0.012, 16, 200),
    new THREE.MeshBasicMaterial({ color: 0x7b5cff, transparent: true, opacity: 0.35 })
  );
  torus.position.set(2.5, -1, -2);
  scene.add(torus);
  const torus2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.6, 0.008, 16, 200),
    new THREE.MeshBasicMaterial({ color: 0xd9b46a, transparent: true, opacity: 0.4 })
  );
  torus2.position.set(-2.2, 1.2, -1);
  scene.add(torus2);

  let mxN = 0, myN = 0;
  addEventListener('mousemove', e => { mxN = (e.clientX / innerWidth - 0.5); myN = (e.clientY / innerHeight - 0.5); });
  addEventListener('resize', () => {
    cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  let scrollY = 0;
  addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  function tick(t) {
    t *= 0.001;
    stars.rotation.y = t * 0.05 + mxN * 0.3;
    stars.rotation.x = t * 0.03 + myN * 0.2;
    stars.position.y = scrollY * -0.0008;
    torus.rotation.x = t * 0.4; torus.rotation.y = t * 0.3;
    torus2.rotation.x = -t * 0.3; torus2.rotation.y = -t * 0.5;
    renderer.render(scene, cam);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

/* ---- 3D tilt on product & collection cards ---- */
(function tilt() {
  const cards = document.querySelectorAll('.product-card, .collection-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (0.5 - y) * 10;
      const ry = (x - 0.5) * 12;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      card.style.setProperty('--mx', (x * 100) + '%');
      card.style.setProperty('--my', (y * 100) + '%');
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
})();

/* ---- Cube drag interaction ---- */
(function cubeDrag() {
  const cube = document.getElementById('cube');
  const stage = document.getElementById('cubeStage');
  if (!cube || !stage) return;
  let rx = -15, ry = 0, dragging = false, sx = 0, sy = 0, srx = 0, sry = 0;
  function apply() { cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`; }
  stage.addEventListener('pointerdown', e => {
    dragging = true; cube.style.animation = 'none'; sx = e.clientX; sy = e.clientY; srx = rx; sry = ry;
  });
  addEventListener('pointermove', e => {
    if (!dragging) return;
    ry = sry + (e.clientX - sx) * 0.5;
    rx = srx - (e.clientY - sy) * 0.5;
    apply();
  });
  addEventListener('pointerup', () => { dragging = false; });

  // ScrollTrigger drives the cube spin too
  if (window.ScrollTrigger) {
    ScrollTrigger.create({
      trigger: stage, start: 'top 80%', end: 'bottom 20%', scrub: 1,
      onUpdate: self => {
        if (dragging) return;
        cube.style.animation = 'none';
        ry = self.progress * 540;
        apply();
      }
    });
  }
})();

/* ---- GSAP scroll polish for new sections ---- */
if (window.gsap && window.ScrollTrigger) {
  gsap.utils.toArray('.lux-divider').forEach(el => {
    gsap.from(el, { scaleX: 0, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
  });
  gsap.from('.couture-showcase .section-head', { y: 60, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.couture-showcase', start: 'top 80%' } });
  gsap.from('.cube-stage', { scale: 0.4, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.cube-stage', start: 'top 85%' } });
}

/* =========================================================
   SEASON FEATURE — tilt + glow tracking
   ========================================================= */
(function seasonTilt() {
  document.querySelectorAll('.sf-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (0.5 - y) * 14;
      const ry = (x - 0.5) * 16;
      card.style.animation = 'none';
      card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
      card.style.setProperty('--mx', (x * 100) + '%');
      card.style.setProperty('--my', (y * 100) + '%');
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.animation = '';
    });
  });
})();
/* =========================================================
   HOUSE EDITORIAL — auto-sliding carousel
   ========================================================= */
(function houseEditorial() {
  const slides = document.querySelectorAll('.he-slide');
  const thumbs = document.querySelectorAll('.he-thumb');
  if (!slides.length) return;
  let i = 0, timer;
  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
    thumbs.forEach((t, k) => t.classList.toggle('is-active', k === i));
  }
  function play() { clearInterval(timer); timer = setInterval(() => go(i + 1), 4500); }
  thumbs.forEach(t => t.addEventListener('click', () => { go(+t.dataset.i); play(); }));
  play();
  if (window.gsap && window.ScrollTrigger) {
    gsap.from('.house-editorial', { y: 60, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.house-editorial', start: 'top 85%' } });
  }
})();
/* =========================================================
   LOOM REVEAL — scroll-triggered cinematic reveal
   ========================================================= */
(function loomReveal() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.from('.loom-roll', {
    y: 80, opacity: 0, rotateX: -18, duration: 1.1, ease: 'expo.out', stagger: 0.12,
    scrollTrigger: { trigger: '.loom-reveal', start: 'top 85%' }
  });
  gsap.from('.season-feature .sf-card', {
    y: 90, opacity: 0, scale: .92, duration: 1.2, ease: 'expo.out', stagger: 0.15,
    scrollTrigger: { trigger: '.season-feature', start: 'top 85%' }
  });
})();