function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

let randomNum = getRandom(1,1000);
let randomRound = Math.round(randomNum);

