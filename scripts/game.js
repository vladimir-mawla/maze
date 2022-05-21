window.onload = (event) => {
    start();
};
var game = true;
var score = 0;

function start() {
    let start = document.getElementById("start")
    start.addEventListener("mouseover", function (event) {
        bounds()
        end();
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
            console.log(score)
        }
        restart()
    }
}
function restart() {
    if (game == false) {

        reset_bounderies()
        reset_game()
    }
}

if (game == false) {
    score -= 10;
    console.log(score)
}
function reset_bounderies() {


    let start = document.getElementById("start")
    start.addEventListener("mouseover", function (event) {
        game = true;
        document.querySelectorAll(".boundary:not(.example)").forEach(item => {
            item.classList.remove("youlose")
            document.getElementById("status").innerHTML = `Begin by moving your mouse over the "S".`
        })
    })
    start();

}
function end() {
    if (game == true) {

        let end = document.getElementById("end")
        end.addEventListener("mouseover", function (event) {
            if (game == true) {
                score += 5;
                console.log(score)
                document.getElementById("status").innerHTML = "You Won";
                game = false;
            }
        });

    }
}
function reset_game() {

    let start = document.getElementById("start")
    start.addEventListener("click", function (event) {
        game = true;
        score = 0;
        document.querySelectorAll(".boundary:not(.example)").forEach(item => {
            item.classList.remove("youlose")
            document.getElementById("status").innerHTML = `Begin by moving your mouse over the "S".`
        })
    })
    start();

}