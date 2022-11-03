var matrix = [];

var side = 20;
let GrassArr = [];
let grassEaterarr = [];
let gishaticharr = [];
let bombarr = [];
let HumanArr = [];


let Add = document.getElementById("add")
Add.addEventListener('click', event => {
    generator(50, 50, 0, 0, 0, 0, 1);
  });

  let Del = document.getElementById("del")
Del.addEventListener('click', event => {
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 5)  matrix[y][x] = 0;
        }
    }
    HumanArr = [];
  });

let Clear = document.getElementById("jnj")
Clear.addEventListener('click', event => {
   JnjelSax()
  });

let Start = document.getElementById("Start")
Start.addEventListener('click', event => {
    generator(50, 50, 15, 8, 4, 2, 0);
   });

let Stgrass = document.getElementById("grass")
Stgrass.addEventListener('click', event => {
    let inp4 = document.getElementById("inpgrass")
    let val4 = inp4.value
    generator(50, 50, val4, 0, 0, 0, 0);
   });

   let Stgrasseater = document.getElementById("grasseater")
Stgrasseater.addEventListener('click', event => {
    let inp3 = document.getElementById("inpgrasset")
    let val3 = inp3.value
    generator(50, 50, 0, val3, 0, 0, 0);
   });
   let Stgishatich = document.getElementById("gishatich")
Stgishatich.addEventListener('click', event => {
    let inp2 = document.getElementById("inpgish")
    let val2 = inp2.value
    generator(50, 50, 0, 0, val2, 0, 0);
   });
   let Stbomb = document.getElementById("bomb")
Stbomb.addEventListener('click', event => {
    let inp = document.getElementById("inpbomb")
    let val = inp.value
    generator(50, 50, 0, 0, 0, val, 0);
   });

function JnjelSax() {
    

    GrassArr = [];
    grassEaterarr = [];
    gishaticharr = [];
    bombarr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0
        }
    }
}



function generator(high, length, meker, erkusner, ereqner, chorser, hing) {
    for (let i = 0; i < high; i++) {
        matrix.push([]);
        for (let j = 0; j < length; j++) {
            matrix[i].push(0);
        }
    }
    for (let i = 0; i < meker; i++) {
        let x = Math.round(Math.random() * (length - 1));
        let y = Math.round(Math.random() * (high - 1));
        matrix[y][x] = 1;
        GrassArr.push(new Grass(x, y));
    }
    for (let i = 0; i < erkusner; i++) {
        let x = Math.round(Math.random() * (length - 1));
        let y = Math.round(Math.random() * (high - 1));
        matrix[y][x] = 2;
        grassEaterarr.push(new GrassEater(x, y));
    }
    for (let i = 0; i < ereqner; i++) {
        let x = Math.round(Math.random() * (length - 1));
        let y = Math.round(Math.random() * (high - 1));
        matrix[y][x] = 3;
        gishaticharr.push(new Gishatich(x, y));
    }
    for (let i = 0; i < chorser; i++) {
        let x = Math.round(Math.random() * (length - 1));
        let y = Math.round(Math.random() * (high - 1));
        matrix[y][x] = 4;
        bombarr.push(new Bomb(x, y));
    }
    if(hing == 1 && HumanArr == 0){
    let x = Math.round(Math.random() * (length - 1));
    let y = Math.round(Math.random() * (high - 1));
    matrix[y][x] = 5;
    HumanArr.push(new Human(y, x));
    }

}

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

function keyPressed() {
    if (keyCode === 65) {
     HumanArr[0].Left()
    } else if (keyCode === 68) {
        HumanArr[0].Right()
    } else if (keyCode === 87) {
        HumanArr[0].Up()
    }else if (keyCode === 83) {
        HumanArr[0].Down()
    }
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

    }
    for (let i = 0; i < GrassArr.length; i++) {
        GrassArr[i].mul();
    }
    for (let i = 0; i < grassEaterarr.length; i++) {
        grassEaterarr[i].eat();
    }
    for (let i = 0; i < gishaticharr.length; i++) {
        gishaticharr[i].eat();
    }
    for (let i = 0; i < bombarr.length; i++) {
        bombarr[i].gmbal();
    }
    
    // HumanArr[0].Qaylel();
}

