window.AIBookTheme = {
  // Detecta si Sphinx o el navegador están en modo oscuro
  isDark: () => {
    const sphinxTheme = document.documentElement.getAttribute("data-theme");
    if (sphinxTheme) {
      return sphinxTheme === "dark";
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  },

  // Helper para convertir hex (#RRGGBB) a arreglo RGB [R, G, B]
  _hexToRgb(hex) {
    if (!hex) return [0, 0, 0];
    const cleanHex = hex.trim().replace("#", "");
    return [
      parseInt(cleanHex.substring(0, 2), 16) || 0,
      parseInt(cleanHex.substring(2, 4), 16) || 0,
      parseInt(cleanHex.substring(4, 6), 16) || 0,
    ];
  },

  // Helper para leer variables CSS del DOM
  _getCssVar(varName) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  },

  // Retorna la paleta activa leyendo directamente las CSS vars del tema activo
  getPalette() {
    return {
      bg: this._hexToRgb(this._getCssVar("--pst-color-background")),
      nodeBg: this._hexToRgb(this._getCssVar("--pst-color-surface")),
      text: this._hexToRgb(this._getCssVar("--pst-color-text-base")),
      textMuted: this._hexToRgb(this._getCssVar("--pst-color-text-muted")),
      primary: this._hexToRgb(this._getCssVar("--pst-color-primary")),
      accent1: this._hexToRgb(this._getCssVar("--pst-color-secondary")),
      accent2: this._hexToRgb(this._getCssVar("--pst-color-inline-code")),
      stroke: this._hexToRgb(this._getCssVar("--pst-color-border")),
    };
  },
};
