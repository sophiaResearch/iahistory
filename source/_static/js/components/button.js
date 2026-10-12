((BookComponents) => {
  BookComponents.Registry.define('Button', (valueText, eventClick, contextConfig = {}) =>{
    let button = contextConfig.context.createButton(valueText)
    button.parent(contextConfig.parent);
    button.style("margin-top", "10px");
    button.style("padding", "8px 16px");
    button.style("cursor", "pointer");
    button.style("border-radius", "4px");
    button.style("border", "none");
    button.style("font-weight", "bold");

    button.mousePressed(eventClick)

    button.updateTheme = function (palette){
      const activePalette = palette
      if (!activePalette) return;
      const {bg, primary} = activePalette;

      this.style("background-color", primary);
      this.style("color", bg);
    }
    button.updateTheme()
    
    return button
  }) 

})(window.BookComponents = window.BookComponents || {});

