const LivingCreature = require("./classes");
module.exports =  class GrassEater extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.arag = 0;
        this.energy = 8;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
 
    move() {
        if (this.arag > 4) {
            let newcell = random(this.chooseCell(0));
            if (newcell) {
                let x = newcell[0];
                let y = newcell[1];
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 2;
                this.arag = 0;
                this.x = x;
                this.y = y;
                this.energy--;
            }
            if (this.energy <= 0) {
                this.die();
            }

        }
        this.arag++;
    }
    eat() {
        if (this.arag > 4) {
            let newcell = random(this.chooseCell(1));
            if (newcell) {
                let x = newcell[0];
                let y = newcell[1];
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 2;
                this.energy++;
                this.x = x;
                this.y = y;
                this.arag = 0;
                for (var i in GrassArr) {
                    if (x == GrassArr[i].x && y == GrassArr[i].y) {
                        GrassArr.splice(i, 1);
                        break;
                    }
                }
                if (this.energy >= 12) {
                    this.mulxotaker();
                    this.energy = 8;
                }

            }
            else {
                this.move();
            }
        }
        this.arag++;
    }
    mulxotaker() {
        let newcell = random(this.chooseCell(0));
        if (newcell) {
            let x = newcell[0];
            let y = newcell[1];
            matrix[y][x] = 2;
            grassEaterarr.push(new GrassEater(x, y));
        }

    }
    die() {
        for (var i in grassEaterarr) {
            if (this.x == grassEaterarr[i].x && this.y == grassEaterarr[i].y) {
                grassEaterarr.splice(i, 1)
                break;
            }
        }
        matrix[this.y][this.x] = 0;
    }
}