window.AIBookTheme = {
  // Detecta si Sphinx o el navegador están en modo oscuro
  isDark: () => {
    const sphinxTheme = document.documentElement.getAttribute('data-theme');
    if (sphinxTheme) {
      return sphinxTheme === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  },

  // Paletas de colores centralizadas
  colors: {
    light: {
      bg: [245, 245, 248],
      nodeBg: [255, 255, 255],
      stroke: [50, 50, 60],
      text: [30, 30, 40],
      primary: [41, 128, 185],   // Azul
      secondary: [231, 76, 60],  // Rojo
      accent: [39, 174, 96]      // Verde
    },
    dark: {
      bg: [30, 30, 35],
      nodeBg: [45, 45, 52],
      stroke: [200, 200, 210],
      text: [230, 230, 240],
      primary: [52, 152, 219],
      secondary: [235, 104, 91],
      accent: [46, 204, 113]
    }
  },

  // Retorna la paleta activa según el tema actual
  getPalette: () => {
    return this.isDark() ? this.colors.dark : this.colors.light;
  }
};
