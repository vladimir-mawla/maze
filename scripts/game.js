window.onload = (event) => {
    console.log('page is fully loaded');
    
    let start = document.getElementById("start")
    let boundary1 = document.getElementById("boundary1")
    
    let boundary2 = boundary1.nextElementSibling;
    let boundary3 = boundary2.nextElementSibling;
    let boundary4 = boundary3.nextElementSibling;
    let boundary5 = boundary4.nextElementSibling;

    
    start.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "white";
      
    })
    boundary1.addEventListener("mouseover", function( event ) {
        boundary1.classList.add("youlose");
    })
    
    boundary2.addEventListener("mouseover", function( event ) {
        boundary2.classList.add("youlose");
    })
    boundary3.addEventListener("mouseover", function( event ) {
        boundary3.classList.add("youlose");
    })
    boundary4.addEventListener("mouseover", function( event ) {
        boundary4.classList.add("youlose");
    })
    boundary5.addEventListener("mouseover", function( event ) {
        boundary5.classList.add("youlose");
    })
};