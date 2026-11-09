new p5((context) => {
  const contextConfig = {
    context,
    parent: "funcion_lineal"
  }

  const globalConfig = window.globalConfig 

  let chart
  let sliderX_1
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
    sliderX_1 = window.BookComponents.Registry.get("Slider")(
      0,   // Mínimo
      6,    // Máximo
      3,    // Valor inicial
      0.01,  // Step (Paso)
      { 
        context, 
        parent: "lineal-controls", // Para que quede en la barra lateral izquierda junto al botón
        label: "Valor de X_1:"
      }
    );
    sliderM = window.BookComponents.Registry.get("Slider")(
      -5,   // Mínimo
      5,    // Máximo
      0,    // Valor inicial
      0.01,  // Step (Paso)
      { 
        context, 
        parent: "lineal-controls", // Para que quede en la barra lateral izquierda junto al botón
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
        parent: "lineal-controls", // Para que quede en la barra lateral izquierda junto al botón
        label: "Valor de B:"
      }
    );
  };

  context.draw = () => {
    const c = globalConfig.getThemeUpdated() 
    const themeHex = globalConfig.getThemeUpdatedHex() 

    context.background(...c.bg);
    sliderX_1.updateTheme(themeHex) 
    sliderM.updateTheme(themeHex) 
    sliderB.updateTheme(themeHex) 
    chart.drawGrid(themeHex)

    context.noStroke();


    let x_1 = sliderX_1.value()
    let m = sliderM.value()
    let b = sliderB.value() 
    context.drawingContext.save();
    context.drawingContext.beginPath();
    
    let xLeft = chart.toScreenX(0);
    let yTop = chart.toScreenY(6);    // Esquina superior izquierda
    let chartWidth = chart.toScreenX(6) - chart.toScreenX(0);
    let chartHeight = chart.toScreenY(0) - chart.toScreenY(6); // Esquina inferior derecha

    context.textSize(12)
    context.textAlign(context.CENTER, context.TOP);
    context.text('x_1',chart.toScreenX(x_1),chart.toScreenY(-0.25))
    context.text(`x_1: ${x_1.toFixed(2)}`,chart.toScreenX(5.5),chart.toScreenY(5.75))
    let x_2 = lineal(m,x_1,-b)
    context.text(`x_2: ${x_2.toFixed(2)}`,chart.toScreenX(5.5),chart.toScreenY(5.25))

    context.textAlign(context.RIGHT, context.CENTER);
    context.text('x_2',chart.toScreenX(-0.25),chart.toScreenY(x_2))

    context.drawingContext.rect(xLeft, yTop, chartWidth, chartHeight);
    context.drawingContext.clip(); // Todo lo que se dibuje desde aquí en adelante se recorta aquí

    context.stroke(themeHex.primary);
    context.strokeWeight(2);
    
    context.line(
      chart.toScreenX(0),
      chart.toScreenY(lineal(m, 0, -b)),
      chart.toScreenX(6),
      chart.toScreenY(lineal(m, 6, -b))
    );

    context.drawingContext.setLineDash([6, 6]);
    context.fill(themeHex.accent1);
    context.stroke(themeHex.accent1);
    context.line(
      chart.toScreenX(x_1),
      chart.toScreenY(0),
      chart.toScreenX(x_1),
      chart.toScreenY(lineal(m, x_1, -b))
    );
    context.line(
      chart.toScreenX(0),
      chart.toScreenY(lineal(m, x_1, -b)),
      chart.toScreenX(x_1),
      chart.toScreenY(lineal(m, x_1, -b))
    );
    context.drawingContext.setLineDash([]);

    context.circle(
      chart.toScreenX(x_1),
      chart.toScreenY(lineal(m, x_1, -b)),
      15
    )
    context.noStroke();
    context.drawingContext.restore();

  }
});
