window.onload = (event) => {
    console.log('page is fully loaded');
    start();
};
var game = true;

function start(){
    let start = document.getElementById("start")
    start.addEventListener("mouseover", function( event ) {
        you_lost();
    })
    
}


function you_lost() {
    let boundary1 = document.getElementById("boundary1")
    let boundary2 = boundary1.nextElementSibling;
    let boundary3 = boundary2.nextElementSibling;
    let boundary4 = boundary3.nextElementSibling;
    let boundary5 = boundary4.nextElementSibling;

    boundary1.addEventListener("mouseover", function( event ) {
        boundary1.classList.add("youlose");
        boundary2.classList.add("youlose");
        boundary3.classList.add("youlose");
        boundary4.classList.add("youlose");
        boundary5.classList.add("youlose");
        game = false;
        document.getElementById("status").innerHTML = "You Lost"
    })
    boundary2.addEventListener("mouseover", function( event ) {
        boundary1.classList.add("youlose");
        boundary2.classList.add("youlose");
        boundary3.classList.add("youlose");
        boundary4.classList.add("youlose");
        boundary5.classList.add("youlose");
        game = false;
        document.getElementById("status").innerHTML = "You Lost"
    })
    boundary3.addEventListener("mouseover", function( event ) {
        boundary1.classList.add("youlose");
        boundary2.classList.add("youlose");
        boundary3.classList.add("youlose");
        boundary4.classList.add("youlose");
        boundary5.classList.add("youlose");
        game = false;
        document.getElementById("status").innerHTML = "You Lost"
    })
    boundary4.addEventListener("mouseover", function( event ) {
        boundary1.classList.add("youlose");
        boundary2.classList.add("youlose");
        boundary3.classList.add("youlose");
        boundary4.classList.add("youlose");
        boundary5.classList.add("youlose");
        game = false;
        document.getElementById("status").innerHTML = "You Lost"
    })
    boundary5.addEventListener("mouseover", function( event ) {
        boundary1.classList.add("youlose");
        boundary2.classList.add("youlose");
        boundary3.classList.add("youlose");
        boundary4.classList.add("youlose");
        boundary5.classList.add("youlose");
        game = false;
        document.getElementById("status").innerHTML = "You Lost"
    })
    
    
    restart()
}
function restart() {
    if (game == false) {
        console.log("you restarted")
        game = true;
        reset()

    }
}
function reset(){
    let boundary1 = document.getElementById("boundary1")
    let boundary2 = boundary1.nextElementSibling;
    let boundary3 = boundary2.nextElementSibling;
    let boundary4 = boundary3.nextElementSibling;
    let boundary5 = boundary4.nextElementSibling;

    let start = document.getElementById("start")
    start.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "#88ff88";
        boundary1.classList.remove("youlose"); 
        boundary2.classList.remove("youlose"); 
        boundary3.classList.remove("youlose"); 
        boundary4.classList.remove("youlose"); 
        boundary5.classList.remove("youlose");
        document.getElementById("status").innerHTML = `Begin by moving your mouse over the "S".`
    })
    start();
    
}