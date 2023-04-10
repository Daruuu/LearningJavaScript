
## Programming languages

Programming languages are a vehicle for communication between humans and computers. Devices can understand only the binary characters 1 and 0.
For most developers, using only binary characters isn't an efficient way to communicate.

Programming languages come in a variety of formats and can serve different purposes.
For example, JavaScript is used primarily for web applications, and Bash is used primarily for operating systems.

## Low-level and high-level languages

To be interpreted by a device, low-level languages typically require fewer steps than do high-level languages.
However, what makes high-level languages popular is their readability and support. JavaScript is considered a high-level language.

The code in the next section illustrates the difference between a high-level language, such as JavaScript, and a low-level assembly language.

The following code is written in JavaScript, a high-level language. It implements an algorithm by using constructs such as variables, for-loops, and other statements.

``` js
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

The preceding code illustrates an algorithm for implementing a Fibonacci sequence. Now, here's the corresponding code in the assembly language:

``` cobol
area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

A Fibonacci sequence is defined as a set of numbers such that each number is the sum of the two preceding numbers, starting from 0 and 1.

### Keyword to work with variables

The keyword `let` was introduced in the JavaScript standard ECMAScript 6 (ES6).
Using `let` gives your variable block scope.
We recommend that you use `let` over var to better manage scope in your application.

JavaScript uses the different types of scope, like global scope and function scope,
to determine what variables are available in which parts of the code.
For example, a global variable is available inside a function because it belongs to global scope, or "outer" scope.
Variables designated with the keyword var are scoped (their values are visible) within the function body, and let variables are scoped to their enclosing block within curly brackets.
That means that if you use `var` in a for loop, it's visible outside the for loop, which might have unexpected results.
Using `let` is a better choice because it's available only in the enclosing block (that is, the for loop), so its availability might be more expected.

#### Assigning a value

let myVariable;

myVariable = 123;

The use of the assignment operator (=) in this example sets a value to a variable.
It differs from a comparison, which uses two or three operators like == or ===.

#### Constants

The declaration and initialization of a constant follows the same concepts as a variable, except that it uses the const keyword:

const MY_VARIABLE = 123;

The following code syntax for a simple value is not allowed:

const PI = 3.14;
PI = 4; // not allowed

The following syntax has a protected object reference and is not allowed:

const obj = { a: 3 };
obj = { b: 5 } // not allowed

The following syntax has an object value that's not protected. It is allowed, because you're changing the value of the object but not the reference itself.

const obj = { a: 3 };
obj.a = 5;  // allowed

## Data Types

Data types are also called JavaScript data primitives, because they're the lowest-level data types that the language provides.
There are six primitive data types:
string, number, bigint, boolean, undefined, and symbol.

### Numbers

Variables can store all types of numbers, including decimals or negative numbers.

+ Addition: Calculates the sum of two numbers. 1 + 2 //expected answer is 3

+ Subtraction: Calculates the difference of two numbers. 1 - 2 //expected answer is -1

+ Multiplication: Calculates the product of two numbers. 1 * 2 //expected answer is 2

/ Division: Calculates the quotient of two numbers. 1 / 2 //expected answer is 0.5

% Remainder: Calculates the remainder from the division of two numbers. 1 % 2 //expected answer is 1

### Strings

Strings are sets of characters that reside between single or double quotes.

'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';

Recuerde usar comillas cuando escriba una cadena, o JavaScript asumirá que es un nombre de variable.

let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

Template literals are another way to format strings, except that instead of quotes, you use backticks. Anything that's not plain text must be placed inside placeholders ${ }, including any variables that might be strings. Here's an example:

let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!

Los literales de plantilla respetarán los espacios y saltos de línea

### Booleans

Booleans can be only two values: true or false.
