new p5((context) => {
  let animate = false;
  let t = 0; // Parámetro de animación de 0 a 1
  let button;

  // Función matemática Sigmoide
  const sigmoid = (z) => 1 / (1 + Math.exp(-z));

  const contextConfig = {
    context,
    parent: "p5-neurona-container"
  }

  const globalConfig = window.globalConfig 

  context.setup = () => {
    let canvas = context.createCanvas(...globalConfig.canvasSize);
    canvas.parent(contextConfig.parent);

    button = window.BookComponents.Registry.get("Button")(
      "Animar Neurona σ(z)",
      () => {
        animate = true;
        t = 0;
      },
      contextConfig 
    ) 
    chart = window.BookComponents.Registry.get("CartesianChart")(contextConfig.context , {
      width: 700,
      height: 400,
      xRange: [-1, 1],  // Rango personalizado que pediste
      yRange: [-2, 3],  // Rango personalizado que pediste
      xStep: 0.5,       // Números cada 0.5
      yStep: 1.0        // Números cada 1.0
    });

  };

  context.draw = () => {
    const c = globalConfig.getThemeUpdated() 
    const themeHex = globalConfig.getThemeUpdatedHex() 

    context.background(...c.bg);

    button.updateTheme(themeHex)
    chart.drawGrid(themeHex)

    // // --- 1. DIBUJAR PLANO CARTESIANO ---
    // const originX = 350; // Centro X (700 / 2)
    // const originY = 250; // Origen Y para dar espacio vertical
    // const scaleX = 40; // 1 unidad en z = 40 píxeles
    // const scaleY = 160; // Rango [0, 1] de la sigmoide = 160 píxeles

    // // Ejes X e Y
    // context.stroke(...c.stroke);
    // context.strokeWeight(1);
    // context.line(50, originY, 650, originY); // Eje Z (Entrada)
    // context.line(originX, 50, originX, 350); // Eje σ(z) (Salida)

    // // Línea guía horizontal en y = 1.0 y y = 0.5
    // context.drawingContext.setLineDash([4, 4]); // Línea punteada
    // context.line(50, originY - scaleY, 650, originY - scaleY); // y = 1.0
    // context.drawingContext.setLineDash([]); // Restablecer línea continua

    // // Etiquetas del plano
    // context.noStroke();
    // context.fill(...c.text);
    // context.textSize(12);
    // context.textAlign(context.CENTER, context.TOP);
    // context.text("z (Combinación lineal)", 600, originY + 10);
    // context.textAlign(context.RIGHT, context.CENTER);
    // context.text("1.0", originX - 10, originY - scaleY);
    // context.text("0.5", originX - 10, originY - scaleY / 2);
    // context.text("0.0", originX - 10, originY);

    // // --- 2. DIBUJAR CURVA SIGMOIDE σ(z) ---
    // context.noFill();
    // context.stroke(...c.primary);
    // context.strokeWeight(2.5);
    // context.beginShape();
    // for (let px = 50; px <= 650; px += 2) {
    //   let z = (px - originX) / scaleX;
    //   let sig = sigmoid(z);
    //   let py = originY - sig * scaleY;
    //   context.vertex(px, py);
    // }
    // context.endShape();

    // // --- 3. ANIMACIÓN DEL CÍRCULO EN LA CURVA ---
    // if (animate) {
    //   t += 0.008; // Velocidad de la animación
    //   if (t > 1) {
    //     t = 1;
    //     animate = false;
    //   }
    // }

    // // Convertir progreso t [0, 1] a z en el rango [-7.5, 7.5]
    // let currentZ = context.lerp(-7.5, 7.5, t);
    // let currentSig = sigmoid(currentZ);

    // let circleX = originX + currentZ * scaleX;
    // let circleY = originY - currentSig * scaleY;

    // // Proyecciones (Líneas guía hacia los ejes desde el círculo)
    // context.stroke(...c.accent1);
    // context.strokeWeight(1);
    // context.drawingContext.setLineDash([3, 3]);
    // context.line(circleX, originY, circleX, circleY);
    // context.line(originX, circleY, circleX, circleY);
    // context.drawingContext.setLineDash([]);

    // // Círculo interactivo
    // context.fill(...c.accent1);
    // context.noStroke();
    // context.ellipse(circleX, circleY, 14, 14);

    // Valor en tiempo real
    // context.fill(...c.text);
    // context.textAlign(context.LEFT, context.BOTTOM);
    // context.textSize(13);
    // context.text(
    //   `z = ${currentZ.toFixed(2)}  ➔  σ(z) = ${currentSig.toFixed(3)}`,
    //   circleX + 10,
    //   circleY - 10,
    // );
  };
});
// .. raw:: html

// <div id="p5-neurona-container"></div>
// <script src="../../_static/js/prueba.js"></script>
