var socket = io();

function setup() {
  frameRate(5);
//   generator(50, 50, 15, 8, 4, 2);
//   createCanvas(matrix[0].length * side, matrix.length * side);
     createCanvas(400, 400);

  background('#acacac');
  const canvas = document.querySelector("canvas");
  canvas.style.position = "absolute";
  canvas.style.left = "25%";
  canvas.style.top = "25%";
}

socket.on("MatrixGo", draw);

function draw(matrix) {
   console.log(matrix)
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

          rect(x * 50, y * 50, 50, 50);
      }

  
  
  // HumanArr[0].Qaylel();
}
}
