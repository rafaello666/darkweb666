/*  ──────────────────────────────────────────
    darkweb666  ·  minimal vanilla-JS bundle
    ────────────────────────────────────────── */

/* A) Fade-in całej strony po załadowaniu */
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-visible');   // ↓ patrz CSS
  });
  
  /* B) Kopiowanie adresu .onion do schowka */
  function copyOnion() {
    navigator.clipboard
             .writeText(document.getElementById('onion').innerText)
             .then(() => alert('Skopiowano .onion ✅'),
                   () => alert('Kopiowanie nieudane ❌'));
  }
  
  /* C) Eksport dla atrybutu onclick w HTML */
  window.copyOnion = copyOnion;
  