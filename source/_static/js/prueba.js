const isDarkMode = () => {
  return document.documentElement.getAttribute('data-theme') === 'dark';
};

new p5((context) => {
  let w1 = 0.5;
  let w2 = -0.8;
  let b = 0.2;

  context.setup = () => {
    let canvas = context.createCanvas(400, 250);
    canvas.parent('p5-neurona-container');
  };
  context.draw = () => {
    const c = window.AIBookTheme.getPalette();

    context.background(...c.bg);

    context.fill(...c.nodeBg);
    context.stroke(...c.primary);
    context.strokeWeight(2);
    context.ellipse(200, 125, 120, 120);

    context.noStroke();
    context.fill(...c.text);
    context.textAlign(context.CENTER, context.CENTER);
    context.textSize(14);
    context.text(`w1: ${w1}\nw2: ${w2}\nb: ${b}`, 200, 125);
  };


  context.mousePressed = () => {
    if (context.dist(context.mouseX, context.mouseY, 200, 125) < 50) {
      b += 0.1; // Modificar el sesgo al hacer clic
    }
  };

});
