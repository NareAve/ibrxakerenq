class LivingCreature {
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.index = index;
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
    chooseCell(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }   
        }
        return found;
    }

//     mul (ch,arr) {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);
 
//         if(newCell){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = ch;
 
//             var newCreat = new LivingCreature(newX, newY);
//             arr.push(newCreat);
//             this.energy = 8;
//         }
//     }
}
   
