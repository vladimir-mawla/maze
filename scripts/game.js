window.onload = (event) => {
    console.log('page is fully loaded');
    
    document.getElementById("start").addEventListener("mouseover", mouseOver);
    
    function mouseOver() {
    document.getElementById("start").style.backgroundColor = "white";
    }
};