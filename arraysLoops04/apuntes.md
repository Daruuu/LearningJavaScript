
## Introduction

Learning objectives
In this module, you'll learn about:

Arrays and what they're used for.
How to use loops to work with arrays.
How to apply array operations.


## Manipulate arrays

For data and information on your websites to be interactive, you need a way to manipulate and store the data in your code
Thankfully, JavaScript has a way to store multiple items in an array.
Using arrays will help save you from declaring many variables, among other benefits.

### About arrays

An array is a type of data structure that contains more than one element. Imagine a purchase order containing multiple order items or an ice cream bar having multiple flavors to choose from.

``` js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan"];
```

#### Access an item

To access a specific element, you use brackets and the position you're interested in, like this:

``` js
array[<number>]
iceCreamFlavors[3] // Pistachio
```

#### Change a value

To change a value in an array, you need to select the item's index and assign it a new value by using the equal sign assignment operator (=) and a value to the right of the operator.

``` js
iceCreamFlavors[4] = "Butter Pecan"; //Changes "Neapolitan" to "Butter Pecan"
```

#### Add more values

The push() method takes an item as input and adds the item to the original array.

``` js
iceCreamFlavors.push("Mint Chip");
```

#### Use the array length

``` js
iceCreamFlavors.length // 6 flavors, because you recently added "Mint Chip"
```

#### Remove a value

To remove a value from an array, you can use delete. Let's say you've just run out of "Mint Chip."

``` js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
delete iceCreamFlavors[iceCreamFlavors.length-1];
console.log(iceCreamFlavors[length-1]) // undefined
```

#### Remove an item

For this operation, you'll use the array method splice(). It takes a position and how many elements to remove, as shown in this code:

``` js
array.splice(<position index, <number of elements to remove>)
```

To remove an item ("Vanilla" ), use the `splice()` method, like this:

``` js
iceCreamFlavor.splice(2,1); 
iceCreamFlavor // [ 'Chocolate', 'Strawberry', 'Pistachio', 'Neapolitan', 'Mint Chip' ]
```

### Iterate over items in an array by using loops

#### For loops

Counter: A variable that's ordinarily initialized with a number that counts the number of iterations.

``` js
let i = 0;
```

Condition: An expression that uses comparison operators to cause the loop to stop when true.

``` js
i < 10;
```

Increment expression: An expression that runs at the end of each iteration, ordinarily to change the counter value. You can increment as much as you want per iteration, but it's common to increase by one,

``` js
i++;
i +=2; // this would work too and increases by 2
```

When the three parts are used together, a `for` loop can look like this:

``` js
for (let i = 0; i < 10; i++ ) {
  console.log(i);
}
```

#### While loops

Unlike the `for` loop, a `while` loop requires a condition that will stop the loop only when the expression in the while loop evaluates to `true`.


```js
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

### Loops and arrays

Remember, you defined a condition on when to end the list, like this:

```js
i < 10
```

Para recorrer el array podemos utilizar un el metodo `.length` del array en js.

```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} // Ends when all flavors are printed
```

### The forEach() loop

There's another loop on the array itself called forEach().
The forEach() loop iterates over the items and offers a simplified way to loop, because you don't need a counter if all you want to do is loop.
For example:

```js
let numbers = [2, 5, 7, 9, 1];
numbers.foreach(numbers => console.log(number));
```

Also, if you want access to the current index, you can have that too, by slightly changing the preceding code to the following:

```js
numbers.forEach((number, index) => console.log(`Number ${number} ${index}`));
```

#### When to use which loop construct

The for and forEach() loops both let you loop over the array's items, but the difference between them is that the for loop lets you exit if a certain condition is fulfilled.

```js
let numbers = [1, 2, -1, 4, 5];
for(let i = 0; i< numbers.length; i++>) {
    if (numbers[i] < 0) {
        break;
    }
    console.log(numbers[i]);
}
```

Agregar `break` hace que el ciclo se detenga en un elemento negativo. 
El forEach()bucle no puede hacer eso.

foreach link

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

for-of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

### Use operations to query arrays

You've come a long way, but there's more to arrays than just iterating through them or removing and adding items. You can also query them or perform operations on them.

#### Filtering

#### Find an item by using find()

You can use the find() method on the array, as shown here:

```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

iceCreamFlavors.find(flavor => flavor === "Chocolate") // "Chocolate"
```

The find() operation runs the function that you provided as input for each item. If the operation finds the searched-for element, it returns the element.
If it doesn't find the element, it returns undefined.






