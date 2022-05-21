window.onload = (event) => {
    start();
};
var game = true;
var score = 0;

function reset() {
    const button = document.getElementById("start")
    button.addEventListener('click', reset_game)
    button.addEventListener('mouseover', reset_bounderies)
}


function start() {
    let start = document.getElementById("start")
    start.addEventListener("mouseover", function (event) {
        bounds()
        end();
        print_score()
    })

}
function bounds() {
    document.querySelectorAll(".boundary:not(.example)").forEach(item => {
        item.addEventListener("mouseover", you_lost)
    });

}
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
function restart() {
    if (game == false) {

        reset()
    }
}

if (game == false) {
    score -= 10;
    print_score()
}
function reset_bounderies() {
    game= true;
    document.querySelectorAll(".boundary:not(.example)").forEach(item => {
        item.classList.remove("youlose")
        document.getElementById("status").innerHTML = `Begin by moving your mouse over the "S".`
    })
    start();

}
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
}
function reset_game() {
    game= true;
    score = 0;
    print_score();
    start();
}

function print_score(){
    let a = document.getElementById("game").nextElementSibling.nextElementSibling.innerHTML = "Your score: " + score;
}