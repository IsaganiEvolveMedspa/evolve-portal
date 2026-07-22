// Evolve Med Spa — Internal Employee Portal
// Recreated behavior from the Component/DCLogic class in Evolve Home.dc.html

document.addEventListener('DOMContentLoaded', () => {
  setGreeting();
  setupSearch();
});

/**
 * Sets the time-based greeting headline and today's date string.
 * Mirrors the original renderVals() logic:
 *   - "Good morning" before 12:00, "Good afternoon" before 17:00, else "Good evening"
 *   - Falls back to "Team" if no employee name is configured
 */
function setGreeting(employeeName = 'Team') {
  const now = new Date();
  const h = now.getHours();
  const greeting = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  const dateStr = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const name = (employeeName || '').trim();
  const headline = name ? `${greeting}, ${name}.` : `${greeting}.`;

  const headlineEl = document.getElementById('hero-headline');
  const dateEl = document.getElementById('hero-date');
  if (headlineEl) headlineEl.textContent = headline;
  if (dateEl) dateEl.textContent = dateStr;
}

/**
 * Wires up the header search input to filter tiles by their
 * data-keywords attribute + visible text, and hides any section
 * that ends up with zero visible tiles. Mirrors handleSearch()
 * from the original component.
 */
function setupSearch() {
  const input = document.getElementById('portal-search');
  const root = document.querySelector('[data-app-root]');
  if (!input || !root) return;

  input.addEventListener('input', (e) => {
    const q = (e.target.value || '').trim().toLowerCase();

    root.querySelectorAll('[data-tile]').forEach((tile) => {
      const hay = ((tile.getAttribute('data-keywords') || '') + ' ' + tile.textContent).toLowerCase();
      tile.style.display = (!q || hay.includes(q)) ? '' : 'none';
    });

    root.querySelectorAll('[data-section]').forEach((section) => {
      const visible = [...section.querySelectorAll('[data-tile]')].some(
        (t) => t.style.display !== 'none'
      );
      section.style.display = visible ? '' : 'none';
    });
  });
}
