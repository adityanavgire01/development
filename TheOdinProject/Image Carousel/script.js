const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let intervalId;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Show the selected slide and activate corresponding dot
    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
}

// Function to show next slide
function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
}

// Function to show previous slide
function prevSlide() {
    let newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

// Function to start auto-sliding
function startAutoSlide() {
    intervalId = setInterval(nextSlide, 5000);
}

// function to stop auto-slide on manual interaction
function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
}

// Add event listeners
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

// add event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoSlide();
    });
});

// Start auto-slide on page load
showSlide(currentIndex);
startAutoSlide();
