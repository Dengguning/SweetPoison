window.onload = function() {
    menumove();
}


function menumove() {
    
    var hamBox = document.querySelector(".ham-box");
    var navTop = document.querySelector(".nav-top");
    var navMenu = document.querySelector(".nav-menu");
                        
    hamBox.addEventListener("click", function() {
        navTop.classList.toggle("nav-top-x");
        navMenu.classList.toggle("nav-menu-x");
                            
    })
    
    
    
    
    
}





