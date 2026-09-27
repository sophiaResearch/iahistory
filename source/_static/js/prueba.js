new p5((context) => {
  context.setup = () => {
    let canvas = context.createCanvas(400, 250);
    canvas.parent("p5-neurona-container");
  };

  context.draw = () => {
    const c = window.AIBookTheme.getPalette();
    context.background(...c.bg);

    context.stroke(...c.primary);
    context.strokeWeight(1);
    context.noFill();

    context.beginShape();
    context.vertex(10, 10);
    context.vertex(10, 100);
    context.vertex(100, 10);
    context.vertex(100, 100);
    context.endShape();
  };
});
