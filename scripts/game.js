window.onload = (event) => {
    console.log('page is fully loaded');
    
    document.getElementById("start").addEventListener("mouseover", mouse_over);
    
    function mouse_over() {
    document.getElementById("start").style.backgroundColor = "white";
    }
};