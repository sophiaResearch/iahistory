((BookComponents) => {
  BookComponents.Registry.define('CartesianChart', (p, userConfig = {}) => {
    // Configuración por defecto personalizable (añadimos showGrid: true por defecto)
    const config = {
      width: userConfig.width || 700,
      height: userConfig.height || 400,
      xRange: userConfig.xRange || [-7.5, 7.5],
      yRange: userConfig.yRange || [0, 1],
      xStep: userConfig.xStep || 1,
      yStep: userConfig.yStep || 0.2,
      margin: userConfig.margin || 50,
      showGrid: userConfig.showGrid !== undefined ? userConfig.showGrid : true // Opción para activar/desactivar la cuadrícula
    };

    const { width, height, xRange, yRange, xStep, yStep, margin, showGrid } = config;
    const [xMin, xMax] = xRange;
    const [yMin, yMax] = yRange;

    // Funciones de mapeo de coordenadas matemáticas a píxeles del canvas actual
    const toScreenX = (x) => p.map(x, xMin, xMax, margin, width - margin);
    const toScreenY = (y) => p.map(y, yMin, yMax, height - margin, margin);

    return {
      toScreenX,
      toScreenY,

      // Método principal que dibuja el plano completo en tu canvas activo
      drawGrid(palette) {
        const strokeColor = palette.stroke;
        const textColor = palette.text;

        const yZero = toScreenY(0);
        const xZero = toScreenX(0);

        // --- 0. DIBUJAR CUADRÍCULA (GRID) SI ESTÁ ACTIVADA ---
        if (showGrid) {
          p.stroke(strokeColor);
          p.strokeWeight(0.5); // Líneas más delgadas y sutiles para la cuadrícula
          // Opcional: bajar la opacidad si tu paleta lo soporta, o usar un tono tenue

          // Líneas verticales de la cuadrícula (por cada xStep)
          for (let x = xMin; x <= xMax; x += xStep) {
            // Evitamos duplicar la línea sobre el propio Eje Y si pasa por el 0
            if (Math.abs(x) > 0.0001) {
              let sx = toScreenX(x);
              if (sx >= margin && sx <= width - margin) {
                p.line(sx, margin, sx, height - margin);
              }
            }
          }

          // Líneas horizontales de la cuadrícula (por cada yStep)
          for (let y = yMin; y <= yMax; y += yStep) {
            // Evitamos duplicar la línea sobre el propio Eje X si pasa por el 0
            if (Math.abs(y) > 0.0001) {
              let sy = toScreenY(y);
              if (sy >= margin && sy <= height - margin) {
                p.line(margin, sy, width - margin, sy);
              }
            }
          }
        }

        // --- 1. DIBUJAR EJES PRINCIPALES ---
        p.stroke(strokeColor);
        p.strokeWeight(2); // Ejes principales más marcados

        // Eje X
        if (yZero >= margin && yZero <= height - margin) {
          p.line(margin, yZero, width - margin, yZero);
        }
        // Eje Y
        if (xZero >= margin && xZero <= width - margin) {
          p.line(xZero, margin, xZero, height - margin);
        }

        // --- 2. ETIQUETAS Y NÚMEROS (TICS) ---
        p.noStroke();
        p.fill(textColor);
        p.textSize(11);

        // Números en el Eje X
        p.textAlign(p.CENTER, p.TOP);
        for (let x = xMin; x <= xMax; x += xStep) {
          let sx = toScreenX(x);
          let sy = (yZero >= margin && yZero <= height - margin) ? yZero : height - margin;
          
          p.stroke(strokeColor);
          p.strokeWeight(1);
          p.line(sx, sy - 4, sx, sy + 4);
          p.noStroke();
          p.text(Number(x.toFixed(2)), sx, sy + 6);
        }

        // Números en el Eje Y
        p.textAlign(p.RIGHT, p.CENTER);
        for (let y = yMin; y <= yMax; y += yStep) {
          let sy = toScreenY(y);
          let sx = (xZero >= margin && xZero <= width - margin) ? xZero : margin;

          p.stroke(strokeColor);
          p.strokeWeight(1);
          p.line(sx - 4, sy, sx + 4, sy);
          p.noStroke();
          p.text(Number(y.toFixed(2)), sx - 8, sy);
        }
      }
    };
  });

})(window.BookComponents = window.BookComponents || {});
