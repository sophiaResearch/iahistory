new p5((context) => {
  const contextConfig = {
    context,
    parent: "frontera_figuras"
  }

  const figurasData = [
    { id: 1, x1: 1.0, x2: 1.5, esTriangulo: false },
    { id: 2, x1: 2.0, x2: 1.0, esTriangulo: false },
    { id: 3, x1: 1.5, x2: 3.0, esTriangulo: false },
    { id: 4, x1: 3.0, x2: 2.0, esTriangulo: false },
    { id: 5, x1: 4.5, x2: 2.0, esTriangulo: true },
    { id: 6, x1: 2.0, x2: 5.0, esTriangulo: true },
    { id: 7, x1: 4.0, x2: 4.5, esTriangulo: true },
    { id: 8, x1: 3.5, x2: 3.5, esTriangulo: true }
  ];
  const globalConfig = window.globalConfig 

  let chart
  let sliderM
  let sliderB
    
  const xStart = 0;
  const xEnd = 6;

  const lineal = (m, x, b) => {return m*x - b} 
  context.setup = () => {
    let canvas = context.createCanvas(500,500);
    canvas.parent(contextConfig.parent);
    chart = window.BookComponents.Registry.get("CartesianChart")(contextConfig.context , {
      width: 500,
      height: 500,
      xRange: [0, 6], 
      yRange: [0, 6],
      xStep: 1,
      yStep: 1 
    });
    sliderM = window.BookComponents.Registry.get("Slider")(
      -5,   // Mínimo
      5,    // Máximo
      0,    // Valor inicial
      0.01,  // Step (Paso)
      { 
        context, 
        parent: "frontera-controls", // Para que quede en la barra lateral izquierda junto al botón
        label: "Valor de M:"
      }
    );
    sliderB = window.BookComponents.Registry.get("Slider")(
      0,   // Mínimo
      6,    // Máximo
      3,    // Valor inicial
      0.01,  // Step (Paso)
      { 
        context, 
        parent: "frontera-controls", // Para que quede en la barra lateral izquierda junto al botón
        label: "Valor de B:"
      }
    );
  };

  context.draw = () => {
    const c = globalConfig.getThemeUpdated() 
    const themeHex = globalConfig.getThemeUpdatedHex() 

    context.background(...c.bg);
    sliderM.updateTheme(themeHex) 
    sliderB.updateTheme(themeHex) 
    chart.drawGrid(themeHex)

    context.noStroke();

    figurasData.forEach((fig) => {
      let px = chart.toScreenX(fig.x1);
      let py = chart.toScreenY(fig.x2);
      if (fig.esTriangulo) {
        context.fill(themeHex.accent2);
    
        let size = 28;
        context.triangle(
          px, py - size / 2,          // Vértice superior
          px - size / 2, py + size / 2, // Vértice inferior izquierdo
          px + size / 2, py + size / 2  // Vértice inferior derecho
        );
      } else {
        context.fill(themeHex.accent1);
    
        let size = 22;
        context.rectMode(context.CENTER);
        context.rect(px, py, size, size);
        context.rectMode(context.CORNER); // Restaurar modo por defecto
      }
    })

    let m = sliderM.value()
    let b = sliderB.value() 
    context.drawingContext.save();
    context.drawingContext.beginPath();
    
    let xLeft = chart.toScreenX(0);
    let yTop = chart.toScreenY(6);    // Esquina superior izquierda
    let chartWidth = chart.toScreenX(6) - chart.toScreenX(0);
    let chartHeight = chart.toScreenY(0) - chart.toScreenY(6); // Esquina inferior derecha

    context.drawingContext.rect(xLeft, yTop, chartWidth, chartHeight);
    context.drawingContext.clip(); // Todo lo que se dibuje desde aquí en adelante se recorta aquí

    context.stroke(themeHex.primary);
    context.strokeWeight(3);
    
    context.line(
      chart.toScreenX(0),
      chart.toScreenY(lineal(m, 0, -b)),
      chart.toScreenX(6),
      chart.toScreenY(lineal(m, 6, -b))
    );
    context.noStroke();
    context.drawingContext.restore();

  }
});
