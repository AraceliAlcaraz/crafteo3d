const filters = document.querySelector('.filters');
const buttons = [...filters.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-category]')];
const results = document.querySelector('#resultados');

filters.hidden = false;
filters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  const category = button.dataset.filter;
  buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  cards.forEach((card) => {
    card.hidden = category !== 'todos' && card.dataset.category !== category;
    if (!card.hidden) count++;
  });
  results.textContent = count === 1 ? '1 producto visible' : `${count} productos visibles`;
});

// The promotion stays visible even when another category is selected.
document.querySelector('.promo-banner a').addEventListener('click', () => {
  if (document.querySelector('#mochi').hidden) {
    buttons.find((button) => button.dataset.filter === 'lamparas').click();
  }
});
