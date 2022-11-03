class Human {
    constructor(y, x) {
        this.x = x;
        this.y = y;
        this.Score = 0;
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
   
    Left() {
        if(this.x > 0){
                matrix[this.y][this.x] = 0;
                this.x -= 1;
                matrix[this.y][this.x] = 5;
        }
        
    
}

Right() {
    if(this.x < matrix[0].length){
            matrix[this.y][this.x] = 0;
            this.x += 1;
            matrix[this.y][this.x] = 5;
    }
    

}
Up() {
    if(this.y > 0){
            matrix[this.y][this.x] = 0;
            this.y -= 1;
            matrix[this.y][this.x] = 5;
    }
}
Down() {
        if(this.y < matrix.length){
                matrix[this.y][this.x] = 0;
                this.y += 1;
                matrix[this.y][this.x] = 5;
        }
        
    
}

}







class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.arag = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return (found);

    }

    mul() {
        let newcell = random(this.chooseCell(0));
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







class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.arag = 0;
        this.energy = 8;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return (found);

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

class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.arag = 0;
        this.time = 0;
        this.energy = 0;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return (found);

    }
    move() {
        let newcell = random(this.chooseCell(0));
        if (this.arag > 4) {
            if (newcell) {
                let x = newcell[0];
                let y = newcell[1];
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 3;
                this.arag = 0;
                this.x = x;
                this.y = y;
                this.time++;
                if (this.time >= 10) {
                    this.mul();
                }
            }

        }
        this.arag++;
    }
    eat() {
        let newcell = random(this.chooseCell(2));
        let newcelldatark = random(this.chooseCell(0));
        let newcellxot = random(this.chooseCell(1));
        if (this.arag > 4) {
            if (newcell) {
                let x = newcell[0];
                let y = newcell[1];
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 3;
                this.x = x;
                this.y = y;
                this.arag = 0;
                this.time++;
                for (var i in grassEaterarr) {
                    if (x == grassEaterarr[i].x && y == grassEaterarr[i].y) {
                        grassEaterarr.splice(i, 1);
                        break;
                    }
                }
                if (this.time >= 6) {
                    this.mul();
                }
            }
            else if (newcelldatark) {
                this.move();
            }
            else if (newcellxot) {
                this.die();
            }
        }
        this.arag++;
    }
    mul() {
        let newcell = random(this.chooseCell(0));
        if (newcell) {
            let x = newcell[0];
            let y = newcell[1];
            matrix[y][x] = 3;
            gishaticharr.push(new Gishatich(x, y));
            this.time = 0;
        }

    }
    die() {
        for (var i in gishaticharr) {
            if (this.x == gishaticharr[i].x && this.y == gishaticharr[i].y) {
                gishaticharr.splice(i, 1)
                break;
            }
        }
        matrix[this.y][this.x] = 0;
    }
}

class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.arag = 0;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return (found);

    }
    move() {
        let newcell = random(this.chooseCell(0));
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
        let newcell1 = random(this.chooseCell(1))
        let newcell2 = random(this.chooseCell(2))
        let newcell3 = random(this.chooseCell(3))
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


