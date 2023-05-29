const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");

console.log("test", slides, buttons);
let currSlide = 0;
let lastSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translate(${((index - number) * 120)}%)`;
    });
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.dataset.button == "next" ? ++currSlide : --currSlide;
        
        if (currSlide > lastSlide) {
            currSlide = 0;
        } else if (currSlide < 0) {
            currSlide = lastSlide;
        }

        updateCarousel(currSlide);
    })
});

updateCarousel();