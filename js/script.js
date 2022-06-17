let allImages = ["bobrossparrot", "bobrossparrot",
                "explodyparrot", "explodyparrot",
                "fiestaparrot", "fiestaparrot",
                "metalparrot", "metalparrot",
                "revertitparrot", "revertitparrot",
                "tripletsparrot", "tripletsparrot",
                "unicornparrot", "unicornparrot"];

let usedImages = [];

let cardNumber = 1;
while (cardNumber % 2 !== 0 || cardNumber > 14 || cardNumber < 4) {
    cardNumber = prompt("Com quantas cartas deseja jogar?");
}

for (let index = 0; index < cardNumber; index ++) {
    usedImages.push(allImages[index]);
}

