const LivingCreature = require("./classes");

module.exports = class Human{
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
