let allImages = ["bobrossparrot", "bobrossparrot",
    "explodyparrot", "explodyparrot",
    "fiestaparrot", "fiestaparrot",
    "metalparrot", "metalparrot",
    "revertitparrot", "revertitparrot",
    "tripletsparrot", "tripletsparrot",
    "unicornparrot", "unicornparrot"];

let usedImages = [];

let playCounter = 0;

let backedCounter = 0;

let element = document.querySelector(".cards");

let cardNumber = 1;
while (cardNumber % 2 !== 0 || cardNumber > 14 || cardNumber < 4) {
    cardNumber = prompt("Com quantas cartas deseja jogar?");
}

for (let index = 0; index < cardNumber; index++) {
    usedImages.push(allImages[index]);
}

usedImages.sort(randomGenerator);

for (let index = 0; index < usedImages.length; index++) {
    element.innerHTML = element.innerHTML + `  
                            <div class="card ${usedImages[index]}" onClick="flipCard(this);">

                                <div class="front-face face">
                                    <img class="imgfront" src="images/front.png">
                                </div>
                                <div class="back-face face">
                                    <img class="imgback" src="images/${usedImages[index]}.gif">
                                </div>

                            </div>
                            `
}

function flipCard(clickedCard) {
    clickedCard.querySelector(".front-face").classList.add("front-face-clicked");
    clickedCard.querySelector(".back-face").classList.remove("back-face");
    clickedCard.querySelector("div:nth-child(2)").classList.add("back-face-clicked");

}

function randomGenerator() {
    return Math.random() - 0.5;
}