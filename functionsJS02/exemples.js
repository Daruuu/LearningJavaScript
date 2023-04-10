
function displayGreeting() {
    console.log('Hello, world!');
}

// calling the function

// function with a parameter called name
function displayGreeting(name) { 
    // creating a new local variable that inserts the name into a string   
    const message = `Hello, ${name}!`; 
    // printing the variable to the console
    console.log(message);
}
displayGreeting("Daruny");

function displayGreetingValues(name, salutation='Hello') {
    console.log(`${salutation}, ${name}`);
}

displayGreetingValues('kenneth');
displayGreetingValues('kenneth', 'helous');


function createGreetingMessage(name) {
    const message = `Hello, ${name}`;
    return message;
}

let greetingMessage = createGreetingMessage('Daruuu');
console.log(greetingMessage);

// anonymous functions
function displayDone() {
    console.log('Done');
}
setTimeout(displayDone, 3000)

setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)

// arrow functions

setTimeout(
    () => {
        console.log('done!');
    },
    3000    //3000 milliseconds (3 seconds)
)

