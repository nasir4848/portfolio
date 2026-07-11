// Add a simple scroll effect to navbar
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// ===============================
// Certificate Modal Logic (Slider)
// ===============================

var modal = document.getElementById("certModal");
var modalImg = document.getElementById("certImage");
var span = document.getElementsByClassName("close")[0];
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

var currentImages = []; 
var currentIndex = 0;   


function openModal(imageArray) {
    currentImages = imageArray;
    currentIndex = 0; 
    modal.style.display = "flex";
    modalImg.src = currentImages[currentIndex];


    if (currentImages.length > 1) {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    }
}

function changeImage(direction) {
    currentIndex += direction;
    

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    } 

    else if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }
    
    modalImg.src = currentImages[currentIndex];
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}