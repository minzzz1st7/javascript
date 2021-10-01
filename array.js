// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);

//3. Looping over an array

//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. addition, deletion, copy
fruits.push('🍇', '🥝');
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);