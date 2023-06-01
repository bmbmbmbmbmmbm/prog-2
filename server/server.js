var express = require("express");
var app = express();
GrassArr = [];
grassEaterarr = [];
gishaticharr = [];
bombarr = [];
HumanArr = [];

app.use(express.static("../client"));

app.get("/", function(req, res){
   res.redirect("index.html");
});
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3005, function(){
   console.log("Example is running");
});

const LivingCreature = require("./classes");
const Bomb = require("./Bomb.js");
const Gishatich = require("./Gishatich.js");
const Grass = require("./grass.js");
const GrassEater = require("./GrassEater.js");
const Human = require("./Human.js");
const { SocketAddress } = require("net");
matrix = [];

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
       if(matrix[y][x] == 0) matrix[y][x] = 1;
   }
   for (let i = 0; i < erkusner; i++) {
       let x = Math.round(Math.random() * (length - 1));
       let y = Math.round(Math.random() * (high - 1));
       if(matrix[y][x] == 0) matrix[y][x] = 2;
   }
   for (let i = 0; i < ereqner; i++) {
       let x = Math.round(Math.random() * (length - 1));
       let y = Math.round(Math.random() * (high - 1));
       if(matrix[y][x] == 0) matrix[y][x] = 3;
   }
   for (let i = 0; i < chorser; i++) {
       let x = Math.round(Math.random() * (length - 1));
       let y = Math.round(Math.random() * (high - 1));
       if(matrix[y][x] == 0) matrix[y][x] = 4;
   }
   if(hing == 1 && HumanArr == 0){
   let x = Math.round(Math.random() * (length - 1));
   let y = Math.round(Math.random() * (high - 1));
   if(matrix[y][x] == 0) matrix[y][x] = 5;
   }

}

function objectCreate() {
   for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++) {
 
           if (matrix[y][x] == 1) {
            GrassArr.push(new Grass(x, y));
           }
           else if (matrix[y][x] == 2) {
            grassEaterarr.push(new GrassEater(x, y));
           }
           else if (matrix[y][x] == 3) {
            gishaticharr.push(new Gishatich(x, y));
           }
           else if (matrix[y][x] == 4) {
            bombarr.push(new Bomb(x, y));
           }
           else if (matrix[y][x] == 5) {
            HumanArr.push(new Human(y, x));
           }
       }
     }
 }

 
 allMatrix = [];

 function game(){
    allMatrix.push(GrassArr);
    allMatrix.push(grassEaterarr);
    allMatrix.push(gishaticharr);
    allMatrix.push(bombarr);
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

    // function keyPressed() {
    //     if (keyCode === 65) {
    //      HumanArr[0].Left()
    //     } else if (keyCode === 68) {
    //         HumanArr[0].Right()
    //     } else if (keyCode === 87) {
    //         HumanArr[0].Up()
    //     }else if (keyCode === 83) {
    //         HumanArr[0].Down()
    //     }
    //   }
    //   keyPressed();

   if(season == 1) io.sockets.emit("MatrixGo", matrix); 
   else if(season == 2) io.sockets.emit("MatrixWinter", matrix);
   else if(season == 3) io.sockets.emit("MatrixAutumn", matrix);

 }
 season = 1;
gamespeed = 100;

 function StartGame(){
     console.log("100")
    generator(30,30, 5,15,10,10,4);
    io.sockets.emit("MatrixGo", matrix);
    objectCreate();
    setInterval(game, gamespeed);
 }
 StartGame();
function Em(){
    io.sockets.emit("Stati", allMatrix);
}
io.on('connection', function (socket) {
    // socket.emit("MatrixGo", matrix)
    setInterval(Em, 5000)
    socket.on("Delete", JnjelSax);
    socket.on("Start", StartGame);
    socket.on("addGrass", addGrass);
    socket.on("addGrassEater", addGrassEater);
    socket.on("addGish", addGish);
    socket.on("addBomb", addBomb);
    socket.on("winter", winterTime);
    socket.on("summer", summerTime);
    socket.on("autumn", autumnTime);
} )

function addBomb(val1){
    generator(30, 30, 0, 0, 0, val1, 0);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
             bombarr.push(new Bomb(x, y));
            }
        }
      }
      io.sockets.emit("MatrixGo", matrix);
}
function addGish(val2){
    generator(30, 30, 0, 0, val2, 0, 0);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
             gishaticharr.push(new Gishatich(x, y));
            }
        }
      }
      io.sockets.emit("MatrixGo", matrix);
}
function addGrass(val4){
    generator(30, 30, val4, 0, 0, 0, 0);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
             GrassArr.push(new Grass(x, y));
            }
        }
      }
      io.sockets.emit("MatrixGo", matrix);
}

function addGrassEater(val3){
    generator(30, 30, 0, val3, 0, 0, 0);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
             grassEaterarr.push(new GrassEater(x, y));
            }
        }
      }
      io.sockets.emit("MatrixGo", matrix);
    }

function JnjelSax() {
    console.log("asasa");
    GrassArr = [];
    grassEaterarr = [];
    gishaticharr = [];
    bombarr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0
        }
    }
    io.sockets.emit("MatrixGo", matrix);
}

function winterTime(){
    season = 2;
    gamespeed = 500;
    GrassArr = [];
    gishaticharr.forEach(element => {
        element.winter = false;
    });
    // io.sockets.emit("MatrixWinter", matrix);
}

function summerTime(){
    season = 1;
    gamespeed = 100;
    generator(30, 30, 25, 0, 0, 0, 0);
    gishaticharr.forEach(element => {
        element.winter = true;
    });
    GrassArr.forEach(element => {
        element.time = 20;
    });
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
             GrassArr.push(new Grass(x, y));
            }
        }
      }
}

function autumnTime(){
    gamespeed = 300;
    season = 3;
    GrassArr.forEach(element => {
        element.time = 30;
    });
}