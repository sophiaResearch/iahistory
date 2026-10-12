((BookComponents) => {
  BookComponents.Registry.define('Slider', (min, max, value, step, contextConfig = {}) => {
    const ctx = contextConfig.context;

    const container = ctx.createDiv();
    if (contextConfig.parent) {
      container.parent(contextConfig.parent);
    }
    container.style("margin-top", "10px");
    container.style("margin-bottom", "10px");
    container.style("width", "100%");
    container.style("font-family", "inherit");
    container.style("font-size", "12px");

    // --- 1. ETIQUETA SUPERIOR (Muestra el valor actual) ---
    const labelDiv = ctx.createDiv();
    labelDiv.parent(container);
    labelDiv.style("display", "flex");
    labelDiv.style("justify-content", "space-between");
    labelDiv.style("margin-bottom", "4px");
    labelDiv.style("font-weight", "600");

    const titleSpan = ctx.createSpan(contextConfig.label || "Valor:");
    titleSpan.parent(labelDiv);

    const valueSpan = ctx.createSpan(Number(value).toFixed(2));
    valueSpan.parent(labelDiv);

    // --- 2. CREAR EL DESLIZADOR ---
    let slider = ctx.createSlider(min, max, value, step);
    slider.parent(container);
    slider.style("width", "100%");
    slider.style("cursor", "pointer");

    // --- 3. ETIQUETAS INFERIORES (Mínimo y Máximo en los extremos) ---
    const extremesDiv = ctx.createDiv();
    extremesDiv.parent(container);
    extremesDiv.style("display", "flex");
    extremesDiv.style("justify-content", "space-between");
    extremesDiv.style("font-size", "10px");
    extremesDiv.style("opacity", "0.7");

    const minSpan = ctx.createSpan(min);
    minSpan.parent(extremesDiv);

    const maxSpan = ctx.createSpan(max);
    maxSpan.parent(extremesDiv);

    // --- 4. ACTUALIZAR TEMA ---
    slider.updateTheme = function (palette) {
      const activePalette = palette;
      if (!activePalette) return;

      const { primary, text } = activePalette;
      if (primary) {
        this.style("accent-color", primary);
      }
      if (text) {
        labelDiv.style("color", text);
        extremesDiv.style("color", text);
      }
    };

    // --- 5. EVENTO EN TIEMPO REAL CON .input() ---
    // Cada vez que el usuario mueve el deslizador, actualiza el texto superior al instante
    slider.input(() => {
      let currentVal = slider.value();
      valueSpan.html(Number(currentVal).toFixed(2));
    });

    // Inicializar el tema por defecto
    slider.updateTheme();

    return slider;
  });

})(window.BookComponents = window.BookComponents || {});
