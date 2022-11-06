class Gishatich extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.arag = 0;
        this.time = 0;
        this.energy = 0;
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