let currentMoney = 1000;
let laptopPrice = 1500;

if (currentMoney >= laptopPrice) {
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
} else{
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}

// if-else

let currentMoney1= 800;
let laptopPrice1 = 1000;
let laptopDiscountPrice = laptopPrice1 - (laptopPrice1 * .20) //Laptop price at 20 percent off

console.log('laptop discount price: ' + laptopDiscountPrice);
if (currentMoney1 >= laptopPrice1 || currentMoney1 >= laptopDiscountPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}

