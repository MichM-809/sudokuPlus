let button;

function setup() {
  createCanvas(400, 400);
  button = createButton('Click Me');
  button.position(150, 180);
  button.mousePressed(changeBackground);
}