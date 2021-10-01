//Objects
const name = 'mz';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}
const mz = { name:'mz', age:4}
mz.hasJob = true;
delete mz.hasJob;


// 2. Computed properties
console.log(mz.name);
console.log(mz['name']);
mz['hasJob'] = true;

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');




