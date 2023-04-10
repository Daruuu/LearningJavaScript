
## Learning objectives

In this module, you'll learn:

- How to write a basic function.
- What parameters are and how to use them.
- How to return values from a function.
- How to use anonymous functions.

### Overview of functions

Las funciones son bloques de construcción clave para escribir código.
Una función es una colección reutilizable de líneas de código que hace que suceda algo dentro de su programa.

¡Incluso puede llamar funciones desde otras funciones!

Create and call a function

Una función toma alguna entrada y luego devuelve una salida que de alguna manera transforma la entrada.
Por ejemplo, una función de suma puede tomar dos números enteros y luego devolver la suma de sus valores.

Las funciones se componen de tres componentes diferentes:

- El cuerpo de una función es un bloque de código que se ejecuta cuando se llama a la función.
- Un parámetro es otro nombre para la entrada que se pasa a una función.
- Finalmente, hay un valor de retorno , o la salida de la función.

La sintaxis de una función se muestra en el siguiente código:

``` js
    functinos nameOfFunction(parameter) {// function definition with some input
        //function body
    }
```

Para comenzar, veamos algunas funciones básicas que no toman ninguna entrada ni devuelven ningún valor.
Si desea crear una función para mostrar un saludo.

``` js
function displayGreeting(){
    console.log("Hello, world");
}
```
Para llamar a una funcion es necesario agrear los parentesis con sus parametros.

``` js
displayGreeting();
```

#### Best Practices

When you're creating functions, keep in mind a few best practices:

Use descriptive names that say what the functions are intended to do.
For example, the name displayGreeting makes it clear that the purpose of the function is to display a greeting. A name like greet, for a function that performs the same task, is a little ambiguous. It might display a greeting, but it might also perform a different operation.

Use camelCasing to combine words. To write in camelCase, keep the first word of your variable or function lowercase, and capitalize each subsequent word.
Because function and variable names can't contain spaces, camelCasing makes the words in your code easier to read. For example, displayGreeting is easier to read than displaygreeting.

Keep your functions focused on a specific task. Doing so not only makes a function easier to reuse throughout a program, but it also makes it easier to debug your code. If you have an issue with your function not performing the task you thought it would, you know the problem is contained within that function.

Use commented text to annotate your code and describe what your functions do. To improve the readability of your code, include in the comment a short description of each function's task.
You create comments by typing a double slash `//`, followed by your description. The comment ends when you start a new line.



### Function parameters

Para hacer que una función sea más reutilizable, a menudo querrá pasarle información.
Este tipo de entrada se llama parámetro . A veces también llamado argumento, un parámetro es información adicional que se envía a una función.

Supongamos que desea cambiar su `displayGreeting` función para poder saludar a una persona específica, en lugar de imprimir solo "¡Hola, mundo!" cada vez que llame a la función. Puede utilizar un parámetro para especificar el nombre de la persona.

Los parámetros se enumeran en la definición de la función y están encerrados entre paréntesis ( ()). Puede tener varios parámetros separados por comas, como se muestra aquí:

``` js
function name(param, param2, param3) {

}
```
Puede actualizar su displayGreetingfunción para tomar el nombre de una persona como entrada.

``` js
// function with a parameter called name
function displayGreeting(name) { 
    // creating a new local variable that inserts the name into a string   
    const message = `Hello, ${name}!`; 
    // printing the variable to the console
    console.log(message);
}
```

Valores predeterminados

Puede hacer que su función sea aún más flexible agregando más parámetros. Pero, ¿qué sucede si no desea solicitar que se especifiquen todos los valores?
Siguiendo con nuestro ejemplo de saludo, puede salir `name` según sea necesario (necesita saber a quién está saludando), pero desea permitir que el saludo en sí se personalice.
Si alguien no quiere personalizarlo, puede proporcionar un valor predeterminado en su lugar.
Para hacerlo, establezca el valor de la misma manera que establece un valor para una variable: parameterName = `defaultValue`. 
Por ejemplo:

``` js
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

``` js
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

### Return values

You can create this function by using a return value.
A return value is returned by the function, and you can store it in a variable just as you can store a literal value, such as a string or number.

``` js
return myVariable;
```

``` js
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

No se puede acceder a las variables que defina dentro de una función desde cualquier lugar fuera de la función.
Estas variables se denominan variables locales.
Fuera de la función, se consideran fuera del alcance .

``` js
let greetingMessage = createGreetingMessage('Christopher');
```

### Anonymous functions

You can call a function on demand by using its name and passing in any appropriate parameters.
But sometimes you might want to allow another process to execute the functions you've created.

Imagine creating a webpage with several timers.
When a timer finishes, you want to run code to display a message.
The problem is that you know the timer will expire but, because the timer length might change, you don't know exactly when it will expire.
Therefore, you don't know exactly when you want your code to run.
To support this type of a scenario, you can use a `callback`.

Los callbacks se usan frecuentemente en diferentes frameworks y bibliotecas para indicar el código que se debe ejecutar cuando algo sucede o termina.
Por ejemplo, se usa un `callback` para indicar lo que debe suceder cuando un usuario selecciona un botón, una operación de larga duración termina o un temporizador expira.
Además, los callbacks pueden ser útiles en situaciones donde no se conoce con exactitud cuándo se completará una tarea.

### Use a callback

es una función normal y puede crearla como lo haría con cualquier función que haya escrito en el pasado.
En el siguiente ejemplo, notará que es una función normal sin parámetros.

``` js
function displayDone() {
  console.log('Done');
}
```

You can pass it into a function, which accepts a `callback` such as setTimeout. The setTimeout callback is a built-in function that allows you to create a timer. When the timer finishes, it calls the function that's passed in as the first parameter. The second parameter indicates the number of milliseconds to wait until it calls the function.

If you want to set a 3-second timeout and have the code display "Done!" when it's finished running, you could use setTimeout, like this:

``` js
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Tenga en cuenta que `displayDone` no va seguido de un par de paréntesis vacíos ( `()`) cuando se pasa como parámetro a setTimeout.
Si escribe `setTimeout(displayDone(), 3000)`, le está dando instrucciones a JavaScript para que se ejecute displayDoneinmediatamente. Debido a que desea pasar la función por `setTimeout` para `setTimeout` sea llamado cuando transcurra el tiempo, solo usa `displayDone`.


### Anonymous function

Although the preceding code is valid, such code can create what some developers call "namespace pollution."
That is, when you write code with numerous variables, functions, and other entities with names, it can become confusing to know the purpose of each, and you can sometimes run out of good names.
In our example, if the only place displayDone will be used is with setTimeout you don't need to give it a name.
You can create an anonymous function.

Una función anónima es una función sin nombre. Las funciones anónimas se comportan de la misma manera que las funciones normales y es la forma en que los desarrolladores normalmente configuran las devoluciones de llamadas.

Puede crear una función anónima usando la misma sintaxis que usaría para crear una función normal, excepto que omite el nombre.
Por ejemplo:

``` js
setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
```

### Arrow functions

Arrow functions, or fat arrow functions, are a slightly different way of creating anonymous functions.
Arrow functions use the `=>` operator to indicate the start of the body of the function.
You can rewrite the preceding anonymous function example by using fat arrow syntax:

``` js
setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
```
