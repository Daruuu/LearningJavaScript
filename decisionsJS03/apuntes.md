## Make decisions with JavaScript

This lesson covers the basics of JavaScript if/else decision-making concepts. You'll learn how comparing variables, using Booleans, and using if/else statements allow you to make decisions in your code.

Learning objectives
In this module, you'll:

Review Booleans.
Learn about comparison operators.
Explore how if and else are used in JavaScript.
Discover how to form conditions and make decisions with logical operators.

### Booleand operators

`<` Less than: Compares two values and returns the true Boolean data type if the value on the left side is less than the right 5 < 6 // true

`<=` Less than or equal to: Compares two values and returns the true Boolean data type if the value on the left side is less than or equal to the right 5 <= 6 // true

`>` Greater than: Compares two values and returns the true Boolean data type if the value on the left side is larger than the right 5 > 6 // false

`>=` Greater than or equal to: Compares two values and returns the true Boolean data type if the value on the left side is larger than or equal to the right 5 >= 6 // false

`===` Strict equality: Compares two values and returns the true Boolean data type if values on the right and left are equal and are the same data type 5 === 6 // false

`!==`	Inequality: Compares two values and returns the opposite Boolean value of what a strict equality operator would return 5 !== 6 // true

``` js
let timeOfDay = 8;
let timeToWakeUp = timeOfDay >= 8; // `timeToWakeUp` holds the value `true`
```

### If...else statement

The else statement will run the code in between its blocks when the if condition evaluates to false. Using else is optional.

``` js
let currentMoney = 1000;
let laptopPrice = 1500;

if (currentMoney >= laptopPrice) {
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
} else{
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}
```

### Logical operators

#### Logical operators and Booleans

There are specific operators that let us connect many Boolean statements.
The result is a more complex statement that still evaluates to true or false.
You can use the following set of operators to construct these more complex comparisons:

`&&` Logical AND: Compares two Boolean expressions. Returns true only if both sides are true.
(5 > 6) && (5 < 6 ) //One side is false, other is true. Returns false

`||` Logical OR: Compares two Boolean expressions. Returns true if at least one side is true.
(5 > 6) || (5 < 6) //One side is false, other is true. Returns true

`!` Logical NOT: Returns the opposite value of a Boolean expression.
!(5 > 6) // 5 is not greater than 6, but "!" will return true

#### Conditions and decisions with logical operators

You can use these complex operators with both assignments but also with if and else clauses.

##### In assignments

As part of assigning a value to a variable, you can use an or (||) operator.

``` js
let isHoliday = true;
let isMember = true;
let hasDiscount = isHoliday || isMember;
```

##### In if...else

You can also use this kind of logical operator in an if/else statement.

``` js
let currentMoney= 800;
let laptopPrice = 1000;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}
```

### Negation operator

By using the ! operator, you can negate the expression. It would look like so:

``` js
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternary expressions

Syntax of ternary operator:

``` js
let variable = condition ? <return this if is true> : <return this if false>;
```

``` js
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

``` js
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```








