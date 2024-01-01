var __THEME__ = (function () {
  var LIGHT = "light";
  var DARK = "dark";
  var STORAGE_KEY = "theme";

  function getSystemTheme() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? DARK
      : LIGHT;
  }

  function getLocalStorageTheme() {
    try {
      return localStorage && localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  }

  function setLocalStorageTheme(theme) {
    try {
      localStorage && localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      console.error(e);
    }
  }

  function setBodyClassTheme(theme) {
    document.body.classList.remove(LIGHT, DARK);
    document.body.classList.add(theme);
  }

  function getDefaultTheme() {
    return getLocalStorageTheme() || getSystemTheme();
  }

  function getTheme() {
    if (document.body.classList.contains(LIGHT)) {
      return LIGHT;
    }

    if (document.body.classList.contains(DARK)) {
      return DARK;
    }
  }

  function setTheme(theme) {
    setBodyClassTheme(theme);
    setLocalStorageTheme(theme);
  }

  setBodyClassTheme(getDefaultTheme());

  return {
    getTheme: getTheme,
    setTheme: setTheme,
  };
})();
