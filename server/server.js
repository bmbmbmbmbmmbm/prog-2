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

server.listen(3001, function(){
   console.log("Example is running on port 3003");
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
       matrix[y][x] = 1;
   }
   for (let i = 0; i < erkusner; i++) {
       let x = Math.round(Math.random() * (length - 1));
       let y = Math.round(Math.random() * (high - 1));
       matrix[y][x] = 2;
   }
   for (let i = 0; i < ereqner; i++) {
       let x = Math.round(Math.random() * (length - 1));
       let y = Math.round(Math.random() * (high - 1));
       matrix[y][x] = 3;
   }
   for (let i = 0; i < chorser; i++) {
       let x = Math.round(Math.random() * (length - 1));
       let y = Math.round(Math.random() * (high - 1));
       matrix[y][x] = 4;
   }
   if(hing == 1 && HumanArr == 0){
   let x = Math.round(Math.random() * (length - 1));
   let y = Math.round(Math.random() * (high - 1));
   matrix[y][x] = 5;
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

 function game(){
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
   io.sockets.emit("MatrixGo", matrix)
 }
 setInterval(game, 1000);
 generator(15, 15, 20,20,20,20,20)
 objectCreate()
 console.log(grassEaterarr, GrassArr);


io.on('connection', function (socket) {
    // socket.emit("MatrixGo", matrix)
} )