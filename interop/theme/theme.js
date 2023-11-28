window.ThemeInterop = {
  SwitchTheme: async function (isDark) {
    if (isDark) {
      document.body.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('preferDark', 'true');
    }
    else {
      document.body.setAttribute('data-bs-theme', '');
      localStorage.setItem('preferDark', 'false');
    }
  },
  IsDarkPreferred: async function () {
    return localStorage.getItem('preferDark') == 'true';
  }
}

window.ThemeInterop.SwitchTheme(localStorage.getItem('preferDark') == 'true');