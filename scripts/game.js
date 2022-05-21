window.onload = (event) => {
    start();
};
var game = true;
var score = 0;

function start() {
    let start = document.getElementById("start")
    start.addEventListener("mouseover", function( event ) {
        you_lost();
        end();
    })
    
}


function you_lost() {
    let boundary1 = document.getElementById("boundary1")
    let boundary2 = boundary1.nextElementSibling;
    let boundary3 = boundary2.nextElementSibling;
    let boundary4 = boundary3.nextElementSibling;
    let boundary5 = boundary4.nextElementSibling;
if(game == true){
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
    
}
    restart()
}
function restart() {
    if (game == false) {
        
        reset_bounderies()
        reset_game()
    }
}
function reset_bounderies(){
    let boundary1 = document.getElementById("boundary1")
    let boundary2 = boundary1.nextElementSibling;
    let boundary3 = boundary2.nextElementSibling;
    let boundary4 = boundary3.nextElementSibling;
    let boundary5 = boundary4.nextElementSibling;

    let start = document.getElementById("start")
    start.addEventListener("mouseover", function( event ) {
        game = true;
        boundary1.classList.remove("youlose"); 
        boundary2.classList.remove("youlose"); 
        boundary3.classList.remove("youlose"); 
        boundary4.classList.remove("youlose"); 
        boundary5.classList.remove("youlose");
        document.getElementById("status").innerHTML = `Begin by moving your mouse over the "S".`
    })
    start();
    
}
function end() {
    if (game == true) {
        
        let end = document.getElementById("end")
        end.addEventListener("mouseover", function( event ) {
            
            document.getElementById("status").innerHTML = "You Won";
            game = false;
        });
        
}
}
function reset_game(){
    let boundary1 = document.getElementById("boundary1")
    let boundary2 = boundary1.nextElementSibling;
    let boundary3 = boundary2.nextElementSibling;
    let boundary4 = boundary3.nextElementSibling;
    let boundary5 = boundary4.nextElementSibling;

    let start = document.getElementById("start")
    start.addEventListener("click", function( event ) {
        game = true;
        score = 0;
        document.getElementById("status").innerHTML = `Begin by moving your mouse over the "S".`
    })
    start();
    
}