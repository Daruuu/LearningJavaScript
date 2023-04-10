
let cardOne = 7;
let cardTwo = 5;
let sum = cardOne + cardTwo;

let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

let cardThree = 7;
sum += cardThree;

if(sum > 21) {
    console.log('you lost!');
    // process.exit(1);
}
console.log(`you have ${sum} points.`);


let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;

if (bankSum > 21 || (sum <=21 && sum > bankSum)) {
    console.log('you win');
    process.exit(1);
} else{
    console.log('bank wins');
}




