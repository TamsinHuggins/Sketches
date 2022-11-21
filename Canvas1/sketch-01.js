const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.1;
    const h = height * 0.3;
    let x, y;

    const num = 8;

    const radius = width * 0.001;

    const degToRad = (degrees) => {
      return (degrees / 180) * Math.PI;
    };

    let g = 100;
    let b = 150;
    let r = 20;
    // puts the rotation point in the middle i think?
    for (let i = 0; i < num; i++) {
      const slice = degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);

      context.rotate(-angle);

      context.beginPath();
      context.fillStyle = `rgba(${200 - r * i},${g}, ${b * 0.3 * i},0.5)`;
      context.rect(w * 0.4, h * 0.1, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
