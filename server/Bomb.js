const LivingCreature = require("./classes");

module.exports = class Bomb extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.arag = 0;
        this.directions2 = [];
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
    getNewCoordinates2() {
        this.directions2 = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
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
        let newcell = this.random(this.chooseCell(0));
        if (this.arag > 4) {
            if (newcell) {
                let x = newcell[0];
                let y = newcell[1];
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 4;
                this.arag = 0;
                this.x = x;
                this.y = y;
            }
        }
        this.arag++;
    }
    gmbal() {
        this.getNewCoordinates2();
        let newcell1 = this.random(this.chooseCell(1))
        let newcell2 = this.random(this.chooseCell(2))
        let newcell3 = this.random(this.chooseCell(3))
        if (this.arag > 4) {
            if (newcell1 || newcell2 || newcell3) {
                for (let i = 0; i < this.directions2.length; i++) {
                    let x = this.directions2[i][0];
                    let y = this.directions2[i][1];
                    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                        matrix[y][x] = 0;
                    }

                    for (let j in GrassArr) {
                        if (x == GrassArr[j].x && y == GrassArr[j].y) {
                            GrassArr.splice(j, 1);
                            break;
                        }
                    }
                    for (let k in grassEaterarr) {
                        if (x == grassEaterarr[k].x && y == grassEaterarr[k].y) {
                            grassEaterarr.splice(k, 1);
                            break;
                        }
                    }
                    for (let l in gishaticharr) {
                        if (x == gishaticharr[l].x && y == gishaticharr[l].y) {
                            gishaticharr.splice(l, 1);
                            break;
                        }
                    }
                }
                matrix[this.y][this.x] = 0;
                let x = this.x;
                let y = this.y;
                for (let u in bombarr) {
                    if (this.x == bombarr[u].x && y == bombarr[u].y) {
                        bombarr.splice(u, 1);
                    }
                }
            }
            else {
                this.move();
            }
        }
        this.arag++;
    }
}


