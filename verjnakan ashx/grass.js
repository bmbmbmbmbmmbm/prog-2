class Grass extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.arag=0;
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