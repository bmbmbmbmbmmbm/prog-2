function setup() {
  frameRate(5);
  generator(50, 50, 15, 8, 4, 2);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
  const canvas = document.querySelector("canvas");
  canvas.style.position = "absolute";
  canvas.style.left = "25%";
  canvas.style.top = "25%";
}

function draw() {
   
  for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {

          if (matrix[y][x] == 1) {
              fill("green");
          }
          else if (matrix[y][x] == 0) {
              fill("#acacac");
          }
          else if (matrix[y][x] == 2) {
              fill("red");
          }
          else if (matrix[y][x] == 3) {
              fill("#010071")
          }
          else if (matrix[y][x] == 4) {
              fill("black")
          }
          else if (matrix[y][x] == 5) {
              fill("#301934")
          }

          rect(x * side, y * side, side, side);
      }

  
  
  // HumanArr[0].Qaylel();
}
