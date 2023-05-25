
const productContainers = [...document.querySelectorAll("div.product-containers")];
const testing = document.querySelectorAll("div.product-containers");
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

console.log(preBtn, nxtBtn, productContainers, testing);
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});