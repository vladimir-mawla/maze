/* Adding onload function */
window.onload = (event) => {
    start();
};
/* Initializing game and score variables */
var game = true;
var score = 0;
/* Creating function to reset game */
function reset() {
    const button = document.getElementById("start")
    button.addEventListener('click', reset_game)
    button.addEventListener('mouseover', reset_bounderies)
}
/* Creating function to alert cheater */
function alerts(){
    const mouseTarget = document.getElementById('game');
    mouseTarget.addEventListener('mouseleave', cheater);
}

/* Creating function to start game */
function start() {
    let start = document.getElementById("start")
    start.addEventListener("mouseover", function (event) {
        bounds()
        end();
        print_score()
        alerts()
        resetTimer()
    })
    start.addEventListener("mouseleave", function (event) { 
        startTimer()
    })

}
/* Creating function to select all bounderies except the last one*/
function bounds() {
    document.querySelectorAll(".boundary:not(.example)").forEach(item => {
        item.addEventListener("mouseover", you_lost)
    });

}
/* Creating a function that ends the game */
function you_lost() {
    if (game == true) {
        document.querySelectorAll(".boundary:not(.example)").forEach(item => {
            item.classList.add("youlose")
            game = false;
        });

        if (game == false) {
            score -= 10;
            print_score()
        }
        restart()
    }
}
/* Creating function to restart the game */
function restart() {
    if (game == false) {

        reset()
    }
}

/* Adding function to reset boundaries */
function reset_bounderies() {
    game = true;
    document.querySelectorAll(".boundary:not(.example)").forEach(item => {
        item.classList.remove("youlose")
        document.getElementById("status").innerHTML = `Begin by moving your mouse over the "S".`
    })
    start();

}
/* Adding function to end game */
function end() {
    if (game == true) {

        let end = document.getElementById("end")
        end.addEventListener("mouseover", function (event) {
            if (game == true) {
                score += 5;
                print_score()
                document.getElementById("status").innerHTML = "You Won";
                game = false;
            }
        });

    }
    reset();
}
/* Adding function to reset game */
function reset_game() {
    game = true;
    score = 0;
    print_score();
    start();
}
/* Adding function to print score */
function print_score() {
    let a = document.getElementById("game").nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "Your score: " + score;
}
/* Adding function to catch cheaters */
function cheater() {
    if(game == true){
        alert("Cheater!");
        score = 0;
        print_score();

}}

var ms = 0;
var sec = 0;
var timer = false;
let stopwatch = document.getElementById("live_count")

/*Adding start timer function */
function startTimer () {
    console.log("hey there!")
    if (timer == false) {
        timer = true;

        ms = parseInt(ms);
        sec = parseInt(sec);
    
        ms = ms + 1;
    
        if (ms == 10) {
          sec = sec + 1;
          ms = 0;
        }
        if (ms < 10) {
        ms = '0' + ms;
        }
        if (sec < 10) {
        sec = '0' + sec;
        }
      
}
}
/* Adding stop timer function */
function stopTimer() {
    if (timer == true) {
      timer = false;
    }
}  
/* Adding reset timer function */
function resetTimer() {
    stopwatch.innerHTML = "00:00:00";
    timer = false;
    ms = 0;
    sec = 0;
}