/* =========================================================
   Lydia's Apparel — main script
   Pure vanilla JS + GSAP/ScrollTrigger (CDN)
   ========================================================= */

const WHATSAPP_NUMBER = '2348145024193'; // Lydia's Apparel WhatsApp

/* ---------- Product catalogue (rich luxury data) ----------
   Each fabric has a real Product ID, colour swatches, recommended uses,
   occasions, care, styling notes and an exclusivity line — used by the
   premium product-detail modal.
----------------------------------------------------------- */
const USES_OCCASION = {
  evening:   { uses: ['Evening gowns','Cocktail dresses','Statement blouses','Luxury robes'], occ: ['Gala dinners','Receptions','Anniversaries','After-hours'] },
  bridal:    { uses: ['Bridal gowns','Reception dresses','Veils & trains','Couture jackets'], occ: ['Weddings','Engagement','Pre-wedding shoots','Religious blessings'] },
  ceremony:  { uses: ['Agbada','Kaftan','Senator wear','Boubou','Owambe dresses'], occ: ['Weddings','Naming ceremonies','Traditional celebrations','Religious festivals'] },
  tailoring: { uses: ['Bespoke suits','Blazers','Overcoats','Trousers','Waistcoats'], occ: ['Executive wear','Business meetings','Corporate events','Boardroom'] },
  shirting:  { uses: ['Luxury shirts','Day dresses','Blouses','Casual jackets'], occ: ['Daywear','Office','Brunch','Travel'] },
  daywear:   { uses: ['Day dresses','Skirts','Light blouses','Resort wear'], occ: ['Daywear','Brunch','Garden parties','Holiday'] },
  couture:   { uses: ['Couture gowns','Statement pieces','Editorial fashion','Red-carpet looks'], occ: ['Red carpet','Galas','Editorial shoots','High-fashion events'] },
};
const PRODUCT_META = {
  p1:  { code:'LA-001', kind:'shirting',  feel:'Silky-smooth, light handle', drape:'Light · soft drape', colours:[['Blush','#f1c5c5'],['Sand','#dcc7a4'],['Sky','#bcd6e6'],['Charcoal','#3b3b40']] },
  p2:  { code:'MSC-202',kind:'evening',   feel:'Sand-washed, weighty silk', drape:'Medium · fluid drape', colours:[['Moss','#4f6a3c'],['Olive','#6b7a3a']] },
  p3:  { code:'ECS-103',kind:'shirting',  feel:'Crisp, cool to the touch',  drape:'Light · holds shape', colours:[['Ivory','#f4ecdc'],['Wine','#5a1a2e'],['Navy','#1f2a4d'],['Azure','#3d7fb8']] },
  p4:  { code:'RVS-204',kind:'evening',   feel:'Water-cool, liquid hand',   drape:'Medium · slip drape', colours:[['Royal Violet','#4a2b8c'],['Midnight','#1a1338']] },
  p5:  { code:'ESM-301',kind:'couture',   feel:'Beaded, stretch-mesh body', drape:'Light · body-skim',   colours:[['Champagne','#e3cfa5'],['Noir','#15131a']] },
  p6:  { code:'HEM-405',kind:'ceremony',  feel:'Embossed, structured satin',drape:'Medium · structured', colours:[['Garnet','#7a1f2b'],['Forest','#274635'],['Bronze','#7a5a2c']] },
  p7:  { code:'HEP-407',kind:'ceremony',  feel:'Peached, brushed cotton',   drape:'Medium · tailored',   colours:[['Wine','#5a1a2e'],['Forest','#274635'],['Gold','#b48a3a'],['Black','#0d0d10'],['Burnt Orange','#b5532a'],['Dark Brown','#3d2418']] },
  p8:  { code:'ASR-808',kind:'tailoring', feel:'Dense, warm-handed wool',   drape:'Heavy · tailoring',   colours:[['Charcoal Check','#2c2f36'],['Navy Pinstripe','#1c2240'],['Storm Grey','#4a4e57']] },
  p9:  { code:'BWS-901',kind:'tailoring', feel:'Smooth worsted wool',       drape:'Medium · crisp crease',colours:[['Storm Grey','#4a4e57'],['Ivory','#efe6d4'],['Sand','#cbb389'],['Indigo','#23335c']] },
  p10: { code:'ACS-909',kind:'shirting',  feel:'Smooth, breathable',        drape:'Light · versatile',   colours:[['Coral','#e07a5f'],['Teal','#2d6e7e'],['Plum','#5e2d52'],['Oxford','#1f2a44']] },
  p11: { code:'PRP-111',kind:'daywear',   feel:'Soft, brushed daywear',     drape:'Light · soft',        colours:[['Rose','#e7b7c3'],['Lavender','#c6b5e0'],['Sage','#b6c8a9'],['Sky','#bcd6e6'],['Mint','#bfe2d0']] },
  p12: { code:'HWS-112',kind:'daywear',   feel:'Textured waffle-weave',     drape:'Medium · plush',      colours:[['Chocolate','#4b2e1f'],['Sky','#bcd6e6'],['Olive','#6b7a3a'],['Ivory','#efe6d4'],['Navy','#1f2a4d'],['Camel','#b08a55'],['Noir','#15131a']] },
  p13: { code:'CSB-113',kind:'bridal',    feel:'Structured metallic brocade',drape:'Heavy · regal',      colours:[['Cornflower & Gold','#5c7fbf']] },
  p14: { code:'OPD-114',kind:'evening',   feel:'Silk-touch, smooth drape',  drape:'Medium · fluid',      colours:[['Olive · Gold Pin','#6b7a3a']] },
  p15: { code:'SCF-115',kind:'ceremony',  feel:'Pebble-crepe, weighty',     drape:'Medium · tailored',   colours:[['Saffron','#d49a2a']] },
  p16: { code:'PTM-116',kind:'shirting',  feel:'Crisp pique texture',       drape:'Light · dimensional', colours:[['Mint','#bfe2d0'],['Ivory','#efe6d4'],['Noir','#15131a']] },
  p17: { code:'LSW-117',kind:'evening',   feel:'Luminous, slip-smooth',     drape:'Light · slip drape',  colours:[['Lilac','#c9b3df']] },
  p18: { code:'EBC-118',kind:'couture',   feel:'Sheer beaded tulle',        drape:'Light · body-skim',   colours:[['Emerald','#1f6b48']] },
  p19: { code:'SDW-119',kind:'evening',   feel:'Stretch jersey, fluid',     drape:'Medium · body-skim',  colours:[['Tan','#b08a55'],['Periwinkle','#9aa6d6'],['Rose','#e7b7c3'],['Wine','#5a1a2e'],['Navy','#1f2a4d'],['Sun','#e8c452'],['Plum','#5e2d52'],['Cream','#efe6d4'],['Indigo','#23335c']] },
  p20: { code:'ALS-120',kind:'ceremony',  feel:'Liquid silk satin',         drape:'Heavy · weighty',     colours:[['Amber','#c98a32']] },
  p21: { code:'CFC-121',kind:'daywear',   feel:'Soft brushed cotton, fringed',drape:'Medium · soft',     colours:[['Camel','#b08a55']] },
  p22: { code:'RCV-122',kind:'evening',   feel:'Whisper-thin, sheer chiffon',drape:'Light · floating',   colours:[['Cherry','#a3242a']] },
  p23: { code:'PLS-123',kind:'bridal',    feel:'Ornate sequin lace',        drape:'Medium · structured', colours:[['Burgundy','#5a1a2e'],['Emerald','#1f6b48'],['Blush','#f1c5c5'],['Olive','#6b7a3a'],['Sky','#bcd6e6']] },
  p24: { code:'WKT-124',kind:'daywear',   feel:'Plush waffle-knit',         drape:'Medium · cosy',       colours:[['Forest','#274635'],['Ivory','#efe6d4'],['Burgundy','#5a1a2e']] },
  p25: { code:'AFJ-125',kind:'couture',   feel:'Sculptural floral jacquard',drape:'Heavy · structured',  colours:[['Teal · Copper','#2d6e7e']] },
  p26: { code:'PCC-126',kind:'bridal',    feel:'Hand-beaded bridal tulle',  drape:'Light · train',       colours:[['Pearl White','#f4ecdc']] },
  p27: { code:'ABL-127',kind:'bridal',    feel:'Ornamental beaded lace',    drape:'Medium · structured', colours:[['Ivory','#efe6d4'],['Sapphire','#1b3a8a'],['Gold','#b48a3a'],['Emerald','#1f6b48'],['Rose','#e7b7c3']] },
  p28: { code:'GPM-128',kind:'bridal',    feel:'Gold pearl couture, sculpted',drape:'Heavy · mermaid',   colours:[['Liquid Gold','#c9a64c']] },
};
const BASE = [
  { id:'p1', name:'Spectrum Cotton-Silk Edit', img:'assets/fabric-01.jpg', material:'Cotton-silk blend', season:'All season', tag:'trending', desc:'A signature collection of multi-tone luxury fabrics — soft pastels through refined modern greys, hand-selected for elevated everyday dressing.' },
  { id:'p2', name:'Moss Silk Crepe', img:'assets/fabric-02.jpg', material:'Mulberry silk crepe', season:'Spring · Summer', tag:'limited', desc:'A deep, living green silk crepe with a sand-washed finish. It drapes like quiet rainfall and feels exceptionally smooth against the skin.' },
  { id:'p3', name:'Egyptian Cotton Shirting Set', img:'assets/fabric-03.jpg', material:'Egyptian cotton 120s', season:'All season', tag:'trending', desc:'Bespoke-grade shirting cottons in white, wine, navy and azure — crisp, breathable and impeccably refined for shirts of every register.' },
  { id:'p4', name:'Midnight Sapphire Cotton-Silk Blend', img:'assets/fabric-04.jpg', material:'Cotton-silk charmeuse', season:'Evening · All season', tag:'limited', desc:'A refined cotton-silk textile developed for ceremonial wear and elevated contemporary tailoring. Its silky surface reflects light softly while keeping the structure and durability of premium cotton — luxurious to the touch, distinguished in appearance.' },
  { id:'p5', name:'Champagne Sequin Mesh', img:'assets/fabric-05.jpg', material:'Hand-beaded tulle', season:'Evening · Gala', tag:'limited', desc:'Hand-beaded across a stretch tulle base — designed for couture evening pieces that catch light like jewellery.' },
  { id:'p6', name:'Heritage Embossed Satin', img:'assets/fabric-06.jpg', material:'Satin jacquard', season:'Autumn · Winter', tag:'new', desc:'Floral-embossed satin in mature jewel tones — quietly opulent, ideal for occasion wear and richly tailored pieces.' },
  { id:'p7', name:'Harmattan Brushed Cotton', img:'assets/fabric-07.jpg', material:'Brushed cotton twill', season:'Autumn · Festive', tag:'new', desc:'Wine, dark green, gold, black, burnt orange and dark brown — the season palette in a soft peached cotton, made for ceremony and modern tailoring.' },
  { id:'p8', name:'Italian Wool Suiting Rolls', img:'assets/fabric-08.jpg', material:'Super 150s Italian wool', season:'Autumn · Winter', tag:'trending', desc:'Italian wool checks and pinstripes — the foundation of bespoke suits, overcoats and a wardrobe that ages beautifully.' },
  { id:'p9', name:'Worsted Wool Suiting Stack', img:'assets/fabric-10.jpg', material:'Worsted wool', season:'All season', tag:'trending', desc:'Worsted wools in storm grey, ivory, sand and indigo — they hold a crease beautifully and tailor into sharp, intelligent silhouettes.' },
  { id:'p10', name:'Capsule Shirting Palette', img:'assets/fabric-09.jpg', material:'Cotton-poly blend', season:'All season', tag:'new', desc:'A complete wardrobe palette in one capsule — coral, teal, plum and oxford. Versatile shirting weight for daily luxury.' },
  { id:'p11', name:'Pastel Daywear Pyramid', img:'assets/fabric-11.jpg', material:'Premium cotton blend', season:'Spring · Summer', tag:'new', desc:'A pyramid of pastel rolls — rose, lavender, sage, sky and mint. The soft palette of modern daywear.' },
  { id:'p12', name:'Honeycomb Waffle Collection', img:'assets/fabric-12.jpg', material:'Waffle-weave cotton', season:'All season', tag:'trending', desc:'Layered waffle-weave textures across seven shades — plush, tactile and quietly contemporary for casual luxury.' },
  { id:'p13', name:'Celestial Cornflower Brocade', img:'assets/fabric-13.jpg', material:'Metallic jacquard brocade', season:'Evening · Bridal', tag:'limited', desc:'Cornflower blue ground with gold-foiled botanical brocade — a statement occasion fabric for bridal, gala and ceremonial wear.' },
  { id:'p14', name:'Olive Pinstripe Silk-Touch', img:'assets/fabric-14.jpg', material:'Silk-touch polyester', season:'All season', tag:'trending', desc:'Olive green ground with delicate gold pinstripes. A soft, fluid drape with the discipline of quiet luxury.' },
  { id:'p15', name:'Saffron Heavy Crepe', img:'assets/fabric-15.jpg', material:'Heavy crepe', season:'Autumn · Festive', tag:'new', desc:'Deep saffron crepe with raw fringed selvedge — warm, rich, ceremonial. Tailors into structured occasion pieces.' },
  { id:'p16', name:'Pique Cotton Trio', img:'assets/fabric-16.jpg', material:'Pique cotton', season:'Spring · Summer', tag:'trending', desc:'A trio of fine pique-textured cottons in mint, ivory and noir — the modern minimal staples of an elevated wardrobe.' },
  { id:'p17', name:'Lilac Satin Whisper', img:'assets/fabric-17.jpg', material:'Premium satin', season:'Spring · Evening', tag:'new', desc:'Soft lilac satin with raw-edge selvedge. Romantic and luminous against the skin — slip-drape evening luxury.' },
  { id:'p18', name:'Emerald Beaded Couture', img:'assets/fabric-18.jpg', material:'Hand-beaded tulle', season:'Gala · Bridal', tag:'limited', desc:'Deep emerald tulle hand-beaded with floral motifs and iridescent sequins. Couture-grade fabric, made for show-stopping pieces.' },
  { id:'p19', name:'Spectrum Stretch Drape Wall', img:'assets/fabric-19.jpg', material:'Stretch jersey drape', season:'All season', tag:'trending', desc:'Floor-length drape rolls in nine shades — body-flattering and ruched, ideal for elegant evening silhouettes.' },
  { id:'p20', name:'Amber Liquid Silk', img:'assets/fabric-20.jpg', material:'Liquid silk satin', season:'Evening · Festive', tag:'limited', desc:'Liquid amber silk with luminous folds — ceremonial richness for show-stopping ceremonial and bridal pieces.' },
  { id:'p21', name:'Camel Fringe Cotton', img:'assets/fabric-21.jpg', material:'Premium brushed cotton', season:'All season', tag:'new', desc:'Warm camel cotton with hand-frayed fringe edges — a soft, structured textile that holds its shape with quiet warmth.' },
  { id:'p22', name:'Rouge Chiffon Veil', img:'assets/fabric-22.jpg', material:'Silk chiffon', season:'Spring · Evening', tag:'new', desc:'Cherry-red chiffon with whisper-thin selvedge. Romantic, weightless, luminous — for veils, overlays and floating evening gowns.' },
  { id:'p23', name:'Paisley Sequin Lace Spectrum', img:'assets/fabric-23.jpg', material:'Sequin guipure lace', season:'Bridal · Gala', tag:'limited', desc:'Ten shades of paisley sequin lace — burgundy, emerald, blush, olive, sky and beyond. Ornate, sculptural, statement-grade.' },
  { id:'p24', name:'Waffle Knit Trinity', img:'assets/fabric-24.jpg', material:'Waffle-knit cotton', season:'Autumn · Winter', tag:'new', desc:'Forest, ivory and burgundy waffle-knit cottons stacked on shearling — cosy, tactile and quietly modern.' },
  { id:'p25', name:'Aegean Floral Jacquard', img:'assets/fabric-25.jpg', material:'Silk-blend jacquard', season:'Evening · Couture', tag:'limited', desc:'Teal jacquard with copper, gold and aqua floral bursts. A couture statement textile, sculptural and luminous.' },
  { id:'p26', name:'Pearl Cascade Bridal Couture', img:'assets/fabric-26.jpg', material:'Hand-beaded bridal tulle', season:'Bridal', tag:'limited', desc:'A pure-white pearl-beaded couture panel — hand-set seashell scallops and a flowing train. Editioned for one bride per season.' },
  { id:'p27', name:'Beaded Lace Library', img:'assets/fabric-27.jpg', material:'Beaded scallop lace', season:'Bridal · Gala', tag:'trending', desc:'A library of beaded lace in fourteen tones — ivory, sapphire, gold, emerald, rose and more. Ornamental and ready for couture.' },
  { id:'p28', name:'Gilded Pearl Mermaid', img:'assets/fabric-28.jpg', material:'Gold pearl couture', season:'Bridal · Festive', tag:'limited', desc:'Liquid gold pearl-beaded mermaid panel with a fluted train — pure ceremonial richness, sculpted by hand.' },
];
const PRODUCTS = BASE.map(b => {
  const m = PRODUCT_META[b.id] || {};
  const u = USES_OCCASION[m.kind] || USES_OCCASION.daywear;
  return Object.assign({}, b, {
    code: m.code || b.id.toUpperCase(),
    fit: m.drape || 'Refined drape',
    feel: m.feel || 'Soft, premium hand',
    drape: m.drape || 'Refined drape',
    colours: m.colours || [['Signature','#b48a3a']],
    uses: u.uses, occasions: u.occ,
    care: 'Dry-clean recommended. Iron on low through a pressing cloth. Store rolled in tissue.',
    styling: 'Pair with neutral tailoring for daywear, or with metallic accents and rich jewel tones for evening and ceremonial looks.',
    exclusive: m.kind === 'bridal' || b.tag === 'limited'
      ? '✦ Limited yardage — numbered cut, never re-issued.'
      : '✦ Hand-finished at the atelier — limited monthly availability.',
  });
});
// Quick filename → product lookup (for auto-binding every fabric image on page)
const PRODUCT_BY_FILE = PRODUCTS.reduce((acc,p)=>{ acc[p.img.split('/').pop()] = p; return acc; }, {});

/* ---------- Render product cards ---------- */
function productCard(p) {
  return `
    <article class="product-card" data-id="${p.id}" data-pid="${p.id}">
      <div class="pc-image" data-pid="${p.id}">
        <span class="pc-badge ${p.tag}">${p.tag === 'limited' ? 'Limited' : p.tag === 'new' ? 'New In' : 'Trending'}</span>
        <img src="${p.img}" alt="${p.name}" loading="lazy" data-pid="${p.id}"/>
        <span class="pc-hover-cta">View Details →</span>
      </div>
      <div class="pc-body">
        <h3 class="pc-name">${p.name}</h3>
        <p class="pc-meta">${p.material} · ${p.season}</p>
        <p class="pc-desc">${p.desc}</p>
        <p class="pc-price-on-request">Price on Request</p>
        <div class="pc-actions">
          <button class="btn btn-primary" data-view="${p.id}">View Details</button>
          <button class="btn btn-ghost" data-order="${p.id}">Order on WhatsApp</button>
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
  const colour = (p._selectedColour || (p.colours && p.colours[0] && p.colours[0][0]) || 'As shown');
  const qty = p._enquiryYardage ? `\nYardage: ${p._enquiryYardage}` : '';
  return (
`Hello Lydia's Apparel ✦

I am interested in the *${p.name}*.
• Product ID: ${p.code}
• Colour: ${colour}
• Material: ${p.material}
• Feel: ${p.feel}
• Drape: ${p.drape}
• Best for: ${p.uses.slice(0,3).join(', ')}${qty}

Please share availability, current pricing and delivery options to my location. Thank you.`
  );
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
  const view = e.target.closest('[data-view]');
  if (view) { openProduct(view.dataset.view); return; }
  const ord = e.target.closest('[data-order]');
  if (ord) { const p = PRODUCTS.find(x => x.id === ord.dataset.order); if (p) window.open(waUrl(buildProductMessage(p)), '_blank'); return; }
  const inc = e.target.closest('[data-inc]'); if (inc) { setQty(inc.dataset.inc, +1); return; }
  const dec = e.target.closest('[data-dec]'); if (dec) { setQty(dec.dataset.dec, -1); return; }
  const rm = e.target.closest('[data-rm]'); if (rm) { removeFromCart(rm.dataset.rm); return; }
  // Auto-clickable fabric — any element carrying data-pid
  const pidEl = e.target.closest('[data-pid]');
  if (pidEl && !e.target.closest('button, a, [data-view], [data-order], [data-add]')) {
    openProduct(pidEl.dataset.pid); return;
  }
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
document.querySelectorAll('.reveal, .section-head, .collection-card, .limited-card, .exp-card, .craft-step, .dl-card, .testi-grid blockquote').forEach(el => {
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
    // animate-in only (no initial opacity:0) so cards are always visible even if ScrollTrigger
    // mis-calculates positions due to lazy-loaded images / layout shift in dynamic grids.
    gsap.from(el, { y: 40, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 95%' } });
  });
  // Refresh ScrollTrigger once images finish loading so triggers use correct positions.
  window.addEventListener('load', () => { if (window.ScrollTrigger) ScrollTrigger.refresh(); });
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

/* =========================================================
   LUXURY PRODUCT DETAIL MODAL
   ========================================================= */
const PD = {
  el: document.getElementById('pdModal'),
  bd: document.getElementById('pdBackdrop'),
  img: document.getElementById('pdImg'),
  spin: document.getElementById('pdSpin'),
  thumbs: document.getElementById('pdThumbs'),
  name: document.getElementById('pdName'),
  code: document.getElementById('pdCode'),
  lead: document.getElementById('pdLead'),
  material: document.getElementById('pdMaterial'),
  feel: document.getElementById('pdFeel'),
  drape: document.getElementById('pdDrape'),
  season: document.getElementById('pdSeason'),
  uses: document.getElementById('pdUses'),
  occ: document.getElementById('pdOccasions'),
  cols: document.getElementById('pdColours'),
  styling: document.getElementById('pdStyling'),
  care: document.getElementById('pdCare'),
  excl: document.getElementById('pdExclusive'),
  kicker: document.getElementById('pdKicker'),
  order: document.getElementById('pdOrder'),
  add: document.getElementById('pdAdd'),
  consult: document.getElementById('pdConsult'),
  rotate: document.getElementById('pdRotate'),
  zoom: document.getElementById('pdZoom'),
  close: document.getElementById('pdClose'),
  current: null,
};

function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || !PD.el) return;
  PD.current = p;
  p._selectedColour = (p.colours && p.colours[0] && p.colours[0][0]) || 'As shown';
  PD.img.src = p.img; PD.img.alt = p.name;
  PD.name.textContent = p.name;
  PD.code.textContent = p.code;
  PD.lead.textContent = p.desc;
  PD.material.textContent = p.material;
  PD.feel.textContent = p.feel;
  PD.drape.textContent = p.drape;
  PD.season.textContent = p.season;
  PD.kicker.textContent = (p.tag === 'limited' ? 'Limited Luxury Fabric' : p.tag === 'new' ? 'New Arrival' : 'Customer Favourite');
  PD.uses.innerHTML = p.uses.map(u => `<li>${u}</li>`).join('');
  PD.occ.innerHTML = p.occasions.map(u => `<li>${u}</li>`).join('');
  PD.cols.innerHTML = p.colours.map(([nm, hex], i) => `
    <button class="pd-col ${i===0?'is-on':''}" data-col="${nm}" title="${nm}">
      <span style="background:${hex}"></span><em>${nm}</em>
    </button>`).join('');
  PD.styling.textContent = p.styling;
  PD.care.textContent = p.care;
  PD.excl.textContent = p.exclusive;
  PD.consult.href = waUrl(`Hello Lydia's Apparel ✦\nI'd like to speak with a fabric consultant about the ${p.name} (${p.code}).`);
  // thumbs (variant views — reuse main image + 3 nearest fabrics for visual variety)
  // "Also explore" — clicking a side thumb loads that fabric's FULL details (fixes bug
  // where every thumb showed the first fabric's description).
  const idx = PRODUCTS.findIndex(x => x.id === p.id);
  const extra = [];
  for (let off = 1; extra.length < 4; off++) {
    const a = PRODUCTS[(idx + off) % PRODUCTS.length];
    if (a && a.id !== p.id) extra.push(a);
    if (off > PRODUCTS.length) break;
  }
  PD.thumbs.innerHTML =
    `<p class="pd-thumbs-label">Also explore →</p>` +
    [p, ...extra].map((x, i) =>
      `<button class="pd-thumb ${i===0?'is-on':''}" data-pid="${x.id}" title="${x.name}">
         <img src="${x.img}" alt="${x.name}"/>
         <em>${x.name}</em>
       </button>`
    ).join('') +
    `<button class="pd-thumb pd-thumb-cmp" data-add-compare="${p.id}" title="Add to comparison">＋ Compare</button>`;
  // open
  PD.el.classList.add('is-open');
  PD.bd.classList.add('is-open');
  PD.el.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  PD.spin.classList.remove('spinning'); // reset
}
function closeProduct() {
  PD.el.classList.remove('is-open');
  PD.bd.classList.remove('is-open');
  PD.el.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
if (PD.el) {
  PD.close.addEventListener('click', closeProduct);
  PD.bd.addEventListener('click', closeProduct);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProduct(); });
  PD.order.addEventListener('click', () => { if (PD.current) window.open(waUrl(buildProductMessage(PD.current)), '_blank'); });
  PD.add.addEventListener('click', () => { if (PD.current) { addToCart(PD.current.id); } });
  PD.rotate.addEventListener('click', () => { PD.spin.classList.toggle('spinning'); });
  PD.zoom.addEventListener('click', () => { PD.spin.classList.toggle('zoomed'); });
  PD.cols.addEventListener('click', e => {
    const b = e.target.closest('[data-col]'); if (!b || !PD.current) return;
    PD.cols.querySelectorAll('.pd-col').forEach(x => x.classList.remove('is-on'));
    b.classList.add('is-on'); PD.current._selectedColour = b.dataset.col;
  });
  PD.thumbs.addEventListener('click', e => {
    const addCmp = e.target.closest('[data-add-compare]');
    if (addCmp) { addToCompare(addCmp.dataset.addCompare); toast('Added to comparison'); return; }
    const t = e.target.closest('[data-pid]'); if (!t) return;
    // Re-open the modal for the clicked fabric — refreshes ALL details (fixes
    // the previous bug where side thumbs only swapped the main image but kept
    // the original fabric's description and metadata).
    openProduct(t.dataset.pid);
  });
  // 360° drag spin
  let pdDrag = false, pdSX = 0, pdRot = 0, pdStart = 0;
  PD.spin.addEventListener('pointerdown', e => { pdDrag = true; pdSX = e.clientX; pdStart = pdRot; PD.spin.classList.remove('spinning'); });
  addEventListener('pointermove', e => {
    if (!pdDrag) return;
    pdRot = pdStart + (e.clientX - pdSX) * 0.6;
    PD.img.style.transform = `rotateY(${pdRot}deg)`;
  });
  addEventListener('pointerup', () => { pdDrag = false; });
}

/* ========== Auto-bind every fabric image on the page to its product ========== */
(function autoBindFabricImages() {
  document.querySelectorAll('img').forEach(img => {
    const src = (img.getAttribute('src') || '').split('/').pop();
    const p = PRODUCT_BY_FILE[src];
    if (!p) return;
    if (!img.dataset.pid) img.dataset.pid = p.id;
    img.classList.add('is-clickable-fabric');
    img.style.cursor = 'pointer';
    if (!img.getAttribute('title')) img.setAttribute('title', `View ${p.name}`);
  });
  // also tag the rich containers
  document.querySelectorAll('.float-card, .cube-face, .orbit-thumb, .loom-roll, .he-thumb, .he-slide, .sf-card, .swiper-slide, .limited-card, .seasonal-stack img, .material-imgs img, .slide')
    .forEach(el => {
      const im = el.querySelector('img'); if (!im) return;
      const src = (im.getAttribute('src') || '').split('/').pop();
      const p = PRODUCT_BY_FILE[src]; if (!p) return;
      if (!el.dataset.pid) el.dataset.pid = p.id;
      el.style.cursor = 'pointer';
    });
})();

/* =========================================================
   FABRIC COMPARISON TOOL
   - Floating "Compare" tray docked above the WhatsApp button
   - Add up to 3 fabrics from any product card or the detail modal
   - "Compare now" opens a side-by-side modal of full specs
   - One-tap WhatsApp enquiry for any compared fabric
   ========================================================= */
(function fabricCompare(){
  const MAX = 3;
  const state = []; // array of product ids

  // ---- Tray ----
  const tray = document.createElement('div');
  tray.className = 'cmp-tray';
  tray.innerHTML = `
    <div class="cmp-tray-head">
      <span>Compare Fabrics</span>
      <button class="cmp-clear" title="Clear all">Clear</button>
    </div>
    <div class="cmp-slots"></div>
    <button class="btn btn-primary cmp-go">Compare now</button>
    <p class="cmp-hint">Add up to 3 fabrics to compare side-by-side.</p>
  `;
  document.body.appendChild(tray);
  const slotsEl = tray.querySelector('.cmp-slots');
  const goBtn   = tray.querySelector('.cmp-go');
  const clrBtn  = tray.querySelector('.cmp-clear');

  // ---- Modal ----
  const modal = document.createElement('div');
  modal.className = 'cmp-modal';
  modal.innerHTML = `
    <div class="cmp-backdrop"></div>
    <div class="cmp-dialog" role="dialog" aria-modal="true">
      <button class="cmp-close" aria-label="Close">×</button>
      <header class="cmp-head">
        <p class="kicker">Fabric Comparison</p>
        <h3>Side-by-side · Lydia's Atelier</h3>
      </header>
      <div class="cmp-table"></div>
    </div>`;
  document.body.appendChild(modal);
  const tableEl = modal.querySelector('.cmp-table');
  modal.querySelector('.cmp-backdrop').addEventListener('click', closeModal);
  modal.querySelector('.cmp-close').addEventListener('click', closeModal);

  function openModal(){ modal.classList.add('is-open'); document.body.style.overflow='hidden'; }
  function closeModal(){ modal.classList.remove('is-open'); document.body.style.overflow=''; }

  function render(){
    tray.classList.toggle('is-on', state.length > 0);
    slotsEl.innerHTML =
      state.map(id => {
        const p = PRODUCTS.find(x => x.id === id); if (!p) return '';
        return `<div class="cmp-slot" title="${p.name}">
          <img src="${p.img}" alt="${p.name}"/>
          <button class="cmp-rm" data-rm="${p.id}" aria-label="Remove">×</button>
        </div>`;
      }).join('') +
      Array.from({length: Math.max(0, MAX - state.length)}, () =>
        `<div class="cmp-slot empty">+</div>`).join('');
    goBtn.disabled = state.length < 2;
    goBtn.textContent = state.length < 2 ? `Add ${2 - state.length} more` : `Compare now (${state.length})`;
  }

  function addCompare(id){
    if (state.includes(id)) return;
    if (state.length >= MAX) state.shift();
    state.push(id);
    render();
  }
  function remove(id){
    const i = state.indexOf(id); if (i > -1) state.splice(i, 1);
    render();
  }
  // expose for the modal "+ Compare" button
  window.__addToCompare = addCompare;

  slotsEl.addEventListener('click', e => {
    const rm = e.target.closest('[data-rm]'); if (rm) remove(rm.dataset.rm);
  });
  clrBtn.addEventListener('click', () => { state.length = 0; render(); });
  goBtn.addEventListener('click', () => {
    if (state.length < 2) return;
    const items = state.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    const rows = [
      ['Product ID',   p => p.code],
      ['Material',     p => p.material],
      ['Feel',         p => p.feel],
      ['Drape',        p => p.drape],
      ['Season',       p => p.season],
      ['Best for',     p => p.uses.slice(0,3).join(', ')],
      ['Occasion',     p => p.occasions.slice(0,3).join(', ')],
      ['Colours',      p => p.colours.map(c => `<span class="cmp-sw" style="background:${c[1]}" title="${c[0]}"></span>`).join('')],
      ['Exclusivity',  p => p.exclusive],
      ['Care',         p => p.care],
    ];
    tableEl.innerHTML = `
      <div class="cmp-cols" style="--n:${items.length}">
        ${items.map(p => `
          <div class="cmp-col">
            <div class="cmp-col-img"><img src="${p.img}" alt="${p.name}" data-pid="${p.id}"/></div>
            <h4>${p.name}</h4>
            <p class="cmp-meta">${p.material}</p>
            <a class="btn btn-primary cmp-wa" href="${waUrl(buildProductMessage(p))}" target="_blank" rel="noopener">Order on WhatsApp</a>
          </div>`).join('')}
      </div>
      <table class="cmp-grid">
        ${rows.map(([label, get]) => `
          <tr><th>${label}</th>${items.map(p => `<td>${get(p)}</td>`).join('')}</tr>
        `).join('')}
      </table>`;
    openModal();
  });

  // Add small "Compare" button to every product card
  function decorateCards(){
    document.querySelectorAll('.product-card').forEach(card => {
      if (card.querySelector('.pc-cmp')) return;
      const id = card.dataset.id; if (!id) return;
      const btn = document.createElement('button');
      btn.className = 'pc-cmp'; btn.type = 'button';
      btn.dataset.compare = id; btn.title = 'Add to comparison';
      btn.textContent = '⇄ Compare';
      card.appendChild(btn);
    });
  }
  decorateCards();
  new MutationObserver(decorateCards).observe(document.body, { childList:true, subtree:true });

  // Global click for [data-compare]
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-compare]');
    if (!b) return;
    e.preventDefault(); e.stopPropagation();
    addCompare(b.dataset.compare);
    toast('Added to comparison');
  });

  // Re-open product detail from inside compare modal
  tableEl && tableEl.addEventListener('click', e => {
    const i = e.target.closest('img[data-pid]');
    if (i) { closeModal(); openProduct(i.dataset.pid); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  render();
})();

// Bridge used by the modal's "＋ Compare" button
function addToCompare(id){ if (window.__addToCompare) window.__addToCompare(id); }
