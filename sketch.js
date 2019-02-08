
var tree;

function setup(){
  createCanvas(600, 400);
  background(51);
  tree = new Tree();
  for (let index = 0; index < 10; index++) {
    tree.addValue(floor(random(0, 100)))
  }
  tree.traverse()
}