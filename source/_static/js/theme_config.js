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

  // Paletas de colores centralizadas
  colors: {
    light: {
      bg: [233, 236, 239], // GrisPizarraClaro (#E9ECEF)
      nodeBg: [248, 250, 252], // BlancoSuperficie (#F8FAFC)
      text: [30, 41, 59], // GrisCarbon (#1E293B)
      textMuted: [71, 85, 105], // GrisMedio (#475569)
      primary: [124, 58, 237], // Violeta (#7C3AED)
      accent1: [8, 145, 178], // CyanProfundo (#0891B2) - Entradas
      accent2: [224, 86, 112], // RosaCoral (#E05670) - Salidas
      stroke: [203, 213, 225], // GrisBorde (#CBD5E1)
    },
    dark: {
      bg: [44, 44, 44], // GrisPizarraOscuro (#2C2C2C)
      nodeBg: [56, 56, 56], // GrisSuperficieOscuro (#383838)
      text: [228, 228, 228], // GrisClaro (#E4E4E4)
      textMuted: [163, 163, 163], // GrisNeutroMuted (#A3A3A3)
      primary: [179, 156, 208], // Lavanda (#B39CD0)
      accent1: [168, 218, 220], // CyanClaro (#A8DADC) - Entradas
      accent2: [255, 193, 204], // RosaSuave (#FFC1CC) - Salidas
      stroke: [68, 68, 68], // GrisBordeOscuro (#444444)
    },
  },

  // Retorna la paleta activa según el tema actual
  getPalette() {
    return this.isDark() ? this.colors.dark : this.colors.light;
  },
};
