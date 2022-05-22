/* Adding onload function */
window.onload = (event) => {
    start();
};
/* Initializing game and score variables */
var game = true;
var score = 0;
var stoptime = true;
/* Creating function to reset game */
function reset() {
    const button = document.getElementById("start")
    button.addEventListener('click', reset_game)
    button.addEventListener('mouseover', reset_boundaries)
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
            stopTimer();
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
function reset_boundaries() {
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
                stopTimer();
                resetTimer()
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
    resetTimer();
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
        resetTimer()

}}



var min = 0;
var sec = 0;
record = []


function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    let start = document.getElementById("start")
    start.removeEventListener("mouseover", startTimer)

  }
}
function resetTimer() {
    const time = document.getElementById('live_count');
    time.innerHTML = "00:00";
    stoptime = true;
  
    sec = 0;
    min = 0;
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);


    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    
    const time = document.getElementById('live_count');
    const last = document.getElementById('last_count');
    
    time.innerHTML = min + ':' + sec;
    last.innerHTML = min + ':' + sec;
    setTimeout("timerCycle()", 1000);
  }
}