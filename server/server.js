var express = require("express");
var app = express();

app.use(express.static("../client"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3001, function(){
   console.log("Example is running on port 3003");
});

const LivingCreature = require("./classes");
const Bomb = require("./Bomb.js");
const Gishatich = require("./Gishatich.js");
const Grass = require("./grass.js");
const GrassEater = require("./GrassEater.js");
const Human = require("./Human.js");
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
generator(15, 15, 20,20,20,20,20)
console.log(matrix);
