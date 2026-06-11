/* ============================================================
   PFD200 Portfolio — Main JavaScript
   Robson Da Silva — NCGID125482
   ============================================================ */

/* -------------------------------------------------------------
   Projects page — filter chips
   Shows only the cards whose data-category matches the chip.
   A card may belong to more than one category (space separated).
   ------------------------------------------------------------- */

const chips = document.querySelectorAll('.chip');
const projectCards = document.querySelectorAll('.project-card');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;

    // Move the active state to the clicked chip
    chips.forEach((c) => c.classList.remove('is-active'));
    chip.classList.add('is-active');

    // Show or hide each card based on its categories
    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      const matches = filter === 'all' || categories.includes(filter);
      card.classList.toggle('is-hidden', !matches);
    });
  });
});
