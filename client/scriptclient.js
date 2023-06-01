

var socket = io();

let Winterbtn = document.getElementById("WinterKnopka");
Winterbtn.addEventListener('click', event => socket.emit("winter"));

let Summerbtn = document.getElementById("SummerKnopka");
Summerbtn.addEventListener('click', event => socket.emit("summer"));

let Autumnbtn = document.getElementById("AutumnKnopka");
Autumnbtn.addEventListener('click', event => socket.emit("autumn"));

let DelAll = document.getElementById("jnj")
DelAll.addEventListener('click', event => socket.emit("Delete"));

let start = document.getElementById("Start")
start.addEventListener('click', event => socket.emit("Start"));

let Stgrass = document.getElementById("grass")
Stgrass.addEventListener('click', event => {
    let val4 = document.getElementById("inpgrass").value;
    socket.emit("addGrass", val4);
   });

let Stgreasseater = document.getElementById("grasseater")
Stgreasseater.addEventListener('click', event => {
let val3 = document.getElementById("inpgrasset").value;
socket.emit("addGrassEater", val3);
});

let Stgish = document.getElementById("gishatich")
Stgish.addEventListener('click', event => {
let val2 = document.getElementById("inpgish").value;
socket.emit("addGish", val2);
});

let Stbomb = document.getElementById("bombiknopka")
Stbomb.addEventListener('click', event => {
let val1 = document.getElementById("inpbomb").value;
socket.emit("addBomb", val1);
});

socket.on("Stati", StatSss);
function StatSss(allMatrix){
    console.log("Grass count = " + allMatrix[0].length)
    console.log("GrassEater count = " + allMatrix[1].length)
    console.log("Gishatic count = " + allMatrix[2].length)
    console.log("Bomb count = " + allMatrix[3].length)

}

function setup() {
  frameRate(5);
  createCanvas(30*50, 30*50);

  background('#acacac');
  const canvas = document.querySelector("canvas");
  canvas.style.position = "absolute";
  canvas.style.left = "25%";
  canvas.style.top = "15%";
}

socket.on("MatrixGo", draw);
socket.on("MatrixWinter", drawWinter);
socket.on("MatrixAutumn", drawAutumn);

function drawWinter(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#03e0fa");
            }
            else if (matrix[y][x] == 2) {
                fill("red");
            }
            else if (matrix[y][x] == 3) {
                fill("#5f2f1b")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }
            else if (matrix[y][x] == 5) {
                fill("#301934")
            }
  
            rect(x * 50, y * 50, 50, 50);
        }
    }
}

function draw(matrix) {
  for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {

          if (matrix[y][x] == 1) {
              fill("green");
          }
          else if (matrix[y][x] == 0) {
              fill("#00ff04");
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

function drawAutumn(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
  
            if (matrix[y][x] == 1) {
                fill("#d27713");
            }
            else if (matrix[y][x] == 0) {
                fill("#ff8300");
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
    }
}
