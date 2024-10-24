const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var ec = document.querySelector("#elem-cont");
var fix = document.querySelector("#fixed");
var hideTimeout = null;  
ec.addEventListener("mouseenter", function() {
    if (hideTimeout) clearTimeout(hideTimeout);  
    fix.style.display = "block";
    fix.style.pointerEvents = "none";  
});

ec.addEventListener("mouseleave", function() {
    hideTimeout = setTimeout(function() {
        fix.style.display = "none";
    }, 100); 
});

fix.addEventListener("mouseenter", function() {
    if (hideTimeout) clearTimeout(hideTimeout); 
    fix.style.display = "block";
    fix.style.pointerEvents = "auto"; 
});

fix.addEventListener("mouseleave", function() {
    hideTimeout = setTimeout(function() {
        fix.style.display = "none";
        fix.style.pointerEvents = "none";  
    }, 100); 
});

var e = document.querySelectorAll(".elem");
e.forEach(function(f) {
    f.addEventListener("mouseenter", function() {
        var img = f.getAttribute("img-data");
        fix.style.backgroundImage = `url(${img})`;
        fix.style.pointerEvents = "none";  
    });
});
