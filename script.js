
// const productContainers = [...document.querySelectorAll("div.product-containers")];
const productContainers = document.querySelectorAll(".product-container");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

// const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
// const preBtn = [...document.querySelectorAll(".pre-btn")];

console.log(preBtn, nxtBtn, productContainers);
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', (e) => {
        console.log('clik')
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', (e) => {
        item.scrollLeft -= containerWidth;
    });
});