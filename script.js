
// const productContainers = [...document.querySelectorAll("div.product-containers")];
// const productContainers = document.querySelectorAll(".product-container");
const nxtBtn = document.querySelector(".nxt-btn");
const preBtn = document.querySelector(".pre-btn");

const track = document.querySelector(".product-container")
const cards = Array.from(track.children);
let cardWidth = cards[0].getBoundingClientRect().width;

const setCardPosition = (card, index) => {
    console.log(cardWidth)
    console.log(cardWidth * index * 'px')
    card.style.width = cardWidth * index * 'px';
    console.log(card, card.style.width)
}
cards.forEach(setCardPosition)

nxtBtn.addEventListener('click', () => {
    const currentCard = card.querySelector(".current-card");
    const nextCard = currentCard.nextElementSibling;
    const amountToMove = nextCard.style.left;
    console.log(currentCard.style);
    console.log(nextCard);
    console.log(amountToMove);
    
    track.style.transform = 'translateX(-' + amountToMove + ')';
    
});

preBtn.addEventListener('click', () => {
    
});


// console.log(preBtn, nxtBtn, productContainers);
// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     console.log(containerDimensions);
//     let containerWidth = containerDimensions.width;


// });