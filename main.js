function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function rand() {
    return randomInteger(1, 6)
}

var app = new Vue({
    el: '#app',
    data: {
      "left_dice_val": 1,
      "right_dice_val" : 3,
      "turns_count": 0,
      "right_dice_rot": 0
    },
    methods: {
        rotate: function () {
            if (this.right_dice_rot == 3) {
                this.right_dice_rot = 0;
            } else {
                this.right_dice_rot ++;
            }
        },
        next_round: function () {
            this.right_dice_rot = 0;
            if (this.turns_count >= 30) {
                alert("Game over!");
                return;
            } 
            this.left_dice_val = rand();
            this.right_dice_val = rand();
            this.turns_count ++;
        }
    }
});