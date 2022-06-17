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

let clickedCard;

let firstFlippedCard;

let cardNumber = 1;
while (cardNumber % 2 !== 0 || cardNumber > 14 || cardNumber < 4) {
    cardNumber = Number(prompt("Com quantas cartas deseja jogar?"));
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

function flipCard(element) {
    clickedCard = element;

    clickedCard.classList.add("flipped")
    clickedCard.querySelector(".front-face").classList.add("front-face-clicked");
    clickedCard.querySelector(".back-face").classList.remove("back-face");
    clickedCard.querySelector("div:nth-child(2)").classList.add("back-face-clicked");

    playCounter++;
    backedCounter++;

    if (backedCounter % 2 === 0) {
        if (backedCounter === cardNumber) {
            alert(`Você ganhou em ${playCounter} jogadas!`);
        }

        let class1 = firstFlippedCard.classList[1];
        let class2 = clickedCard.classList[1];

        if (class1 !== class2) {

            setTimeout(unflipCard, 1000);

        }

    } else {
        firstFlippedCard = clickedCard;
    }
}

function randomGenerator() {
    return Math.random() - 0.5;
}

function unflipCard() {

    backedCounter = backedCounter - 2;

    firstFlippedCard.classList.remove("flipped");
    firstFlippedCard.querySelector(".front-face").classList.remove("front-face-clicked");
    firstFlippedCard.querySelector(".back-face-clicked").classList.remove("back-face-clicked");
    firstFlippedCard.querySelector("div:nth-child(2)").classList.add("back-face");

    clickedCard.classList.remove("flipped");
    clickedCard.querySelector(".front-face").classList.remove("front-face-clicked");
    clickedCard.querySelector(".back-face-clicked").classList.remove("back-face-clicked");
    clickedCard.querySelector("div:nth-child(2)").classList.add("back-face");

    console.log(25);
}