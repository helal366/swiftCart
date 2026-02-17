# 1) What is the difference between `null` and `undefined`?
### Undefined: A variable that has been declared but not assigned yet. undefined is an unintentional absence of value. undefined is produced automatically by JavaScript when a value is missing.
#### Example:
``` 
let x;
console.log(x); // undefined
```

### null: null is an intentional absence of value. It must be assign by a developer or a programmer.
#### Example: 
```
let x=10;
x=null;
console.log(x); // null
```

# 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
### map(): map() is a built-in javascript array function which returns a new array and complete the tasks according to the instructions on each element without mmodifying the original array.
#### Example:
```
const nums = [1, 2, 3, 4];

const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(nums);    // [1, 2, 3, 4] (unchanged)
```


### forEach(): forEach() is a built-in javascript array function which returns nothing and only complete the tasks according to the prpper instructions on each element of the array.
#### Example: 
```
const nums = [1, 2, 3, 4];

nums.forEach(n => {
  console.log(n * 2);  //  2,4,6,8,10
});
console.log(nums) /// [1,2,3,4,5]
```

# 3) What is the difference between `==` and `===`?
### `==` is known as loose eqality and `===` is known as strict eqality.

 ###   `==` (loose eqality) compares only type not the value which has another name as type coercion.

 #### Example:
 ```
    console.log(5=='5');     // true
    console.log(0==false);   // true
    console.log(null == undefined); // true

 ```
 
###  `===` (strict eqality) compares both the type and the value.

 #### Example:

 ```
    console.log(5==='5');     // false
    console.log(0===false);   // false
    console.log(null===undefined); // false
 ```
# 4) What is the significance of `async`/`await` in fetching API data?
### async/await: The main function of async/await is o handle asynchronous operations like API calls, timers, file loading in a simple, readable way.

```
    Suppose, we are going to fetch an url.
    const res=fetch(url); 
    console.log(res);   
This will return a promise like: Promise { <pending> } and we will never get the data.

    On the other hand, 
        async function test() {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data); 
        }
        test()

This will give us javascript data by executing some sequencial ways. The ways are:
1️. Send request
2️. Wait for response
3️. Convert to JSON
4️. Use data

```

# 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
### In JavaScript, scope determines where a variable or function is accessible in our code. It defines the visibility and lifetime of variables.
```
    There are three types of scope: Global scope, Function scope, Block scope.
```
#### Global Scope: Variables which are declared outside any function or block have global scope. They are accessible anywhere in the code, including inside functions and block.
```
    let name = "Faisal"; // global

    function greet() {
      console.log("Hello " + name); // can access global variable
    }

    greet();                // Hello Faisal
    console.log(name);      // Faisal

```
#### Function Scope: Variables which are declared inside a function are only accessible within that function. They cannot be accessed outside the function. var is function-scoped.
```
    function add(a, b) {
        let sum = a + b;            // function scope
        console.log(sum);           // accessible here
    }

add(2, 3);                     // 5
console.log(sum);              // Error: sum is not defined

```

#### Block scope: Variables declared with let or const inside curly braces {} are block-scoped. Variables declared with let or const inside curly braces {} are block-scoped.
```
    if (true) {
        let a = "I exist only inside this block";
        const b = 100;
        var c = "I am var";
    }

console.log(a); // Error
console.log(b); // Error
console.log(c); // Works (var is not block-scoped)

```

