# JavaScript Advanced

![javascript](https://i.imgur.com/tl3rVly.png)

## Lexical Scoping
Lexical scoping determines the scope of a variable by its placement in the source code. Variables declared within a function or block are only accessible within that function or block, as determined during the code's definition, not execution. For example:

```
function outer() {
    let outerVariable = "I'm outside!";

    function inner() {
        console.log(outerVariable); // Accessible due to lexical scoping
    }

    inner();
}

outer();
```
Here, inner can access outerVariable because it is defined within the lexical scope of outer.

## Closure
A closure is a function that retains access to its outer scope, even after the outer function has finished executing. Closures are often used to create private variables or maintain state.

Example:

```
function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
The returned function forms a closure over count, keeping its value between calls.

## Call Stack
The call stack is a data structure that tracks the sequence of function calls in a program. When a function is called, it is pushed onto the stack. When the function completes, it is popped off the stack.

Example:
```
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
}

first();
```
Call stack sequence:
- first is pushed and executed.
- second is called from first, pushed onto the stack, and executed.
- second completes, then first completes, and both are popped off the stack.

## Binding
Binding refers to how a function is bound to its context (the value of this). This can be controlled using .bind(), .call(), or .apply().

Example:
```
const obj = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

const greet = obj.greet;
greet(); // undefined, as 'this' is lost

const boundGreet = obj.greet.bind(obj);
boundGreet(); // "Hello, Alice"
```
Using .bind() ensures this always points to obj in boundGreet.

## Callbacks
Callbacks are functions passed as arguments to other functions and executed later. They enable asynchronous programming and are often used in operations like event handling or API requests.

Example:
```
function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 1000);
}

function processData(data) {
    console.log(`Processing: ${data}`);
}

fetchData(processData);
```
Here, processData is passed as a callback to fetchData and is executed once the data is retrieved.
