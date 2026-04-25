// ================================================
//  LE GRAND HÔTEL — Digital Menu (Browse Only)
// ================================================

// ── Tab switching ────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('section-' + target)?.classList.add('active');
    document.querySelector('.category-nav').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Render menu from data ────────────────────
function renderMenu() {
  ['breakfast', 'lunch', 'dinner', 'beverages'].forEach(cat => {
    const section = document.getElementById('section-' + cat);
    if (!section) return;
    const container = section.querySelector('.menu-content');
    if (!container) return;
    container.innerHTML = '';

    MENU_DATA[cat].forEach(group => {
      const subDiv = document.createElement('div');
      subDiv.className = 'subcategory';
      subDiv.innerHTML = '<h3>' + group.subcategory + '</h3>';
      container.appendChild(subDiv);

      const grid = document.createElement('div');
      grid.className = 'menu-grid';
      group.items.forEach(item => grid.appendChild(createItemEl(item)));
      container.appendChild(grid);
    });
  });
}

function createItemEl(item) {
  const div = document.createElement('div');
  div.className = 'menu-item ' + item.type;

  const badges = (item.badges || []).map(b => {
    if (b === 'chef')  return '<span class="badge badge-chef">Chef\'s Pick</span>';
    if (b === 'new')   return '<span class="badge badge-new">New</span>';
    if (b === 'spicy') return '<span class="badge badge-spicy">🌶 Spicy</span>';
    return '';
  }).join('');

  const tags = (item.tags || []).map(t => '<span class="item-tag">' + t + '</span>').join('');

  div.innerHTML =
    '<div class="item-dot-wrap"><div class="item-dot"></div></div>' +
    '<div class="item-body">' +
      '<div class="item-name">' + item.name + ' ' + badges + '</div>' +
      '<div class="item-desc">' + item.desc + '</div>' +
      '<div class="item-tags">' + tags + '</div>' +
    '</div>' +
    '<div class="item-right">' +
      '<div class="item-price"><span>&#8377; </span>' + item.price.toLocaleString('en-IN') + '</div>' +
    '</div>';

  // Tap anywhere on card → open detail modal
  div.addEventListener('click', () => openModal(item));
  return div;
}

// ── Detail Modal ─────────────────────────────
const modalOverlay = document.getElementById('modalOverlay');

function openModal(item) {
  document.getElementById('modalName').textContent  = item.name;
  document.getElementById('modalPrice').textContent = '₹ ' + item.price.toLocaleString('en-IN');
  document.getElementById('modalDesc').textContent  = item.desc;
  document.getElementById('modalTags').innerHTML    = (item.tags || []).map(t => '<span class="item-tag">' + t + '</span>').join('');
  document.getElementById('modalType').textContent  = item.type === 'veg' ? '🟢 Vegetarian' : '🔴 Non-Vegetarian';
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

// ── Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', renderMenu);
