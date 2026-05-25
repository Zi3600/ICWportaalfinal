// ============================================================
// ICW-portaal — shared script
// Loaded by every page. Contains only what's shared:
//   - toggleMenu()  : opens/closes the burger menu
//   - toggleLang()  : opens/closes the language dropdown
//   - On page load  : reads the saved language and calls setLang()
//
// Each page has its own setLang() function inline (in a <script>
// at the bottom of the page) because every page has different
// text that needs to be translated.
// ============================================================

// Open or close the burger menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// Open or close the language dropdown
function toggleLang() {
  document.getElementById("lang-menu").classList.toggle("show");
}

// When the page opens, check if a language was saved before
// and switch the page to that language.
// The setLang() function lives on the page itself, so we only
// call it after the page has finished loading.
window.addEventListener("load", function () {
  let savedLang = localStorage.getItem("icw-lang");
  if (savedLang === "en") {
    setLang("en");
  } else if (savedLang === "fr") {
    setLang("fr");
  }
  // If nothing was saved, the page just stays in Dutch (the default).
});