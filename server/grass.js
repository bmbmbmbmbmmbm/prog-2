const LivingCreature = require("./classes");
module.exports =  class Grass extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.arag=0;
    }

    mul() {
        let newcell = this.random(this.chooseCell(0));
        if (newcell && this.arag > 12) {
            let x = newcell[0];
            let y = newcell[1];
            matrix[y][x] = 1;
            GrassArr.push(new Grass(x, y));
            this.arag = 0;
        }
        this.arag++;

    }

}

// function random(arr){
//     let rand = Math.round(Math.random()* (arr.length - 1));
//     return arr[rand];
// }