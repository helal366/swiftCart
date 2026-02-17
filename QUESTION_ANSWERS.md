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

# 5) Explain the concept of Scope in JavaScript (Global, Function, Block).