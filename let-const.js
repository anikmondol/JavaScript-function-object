// var x = 'Hello';
// var x = 'World'

// console.log(x);


// let -- const


// let x = 'hello';
// const y = 'world';


// let x = 'anik';
// const y = 'mondal'



// x = 'mehedy';
// x = 'Linkon'

// console.log(x);

// y = 'hasan';

// console.log(y);


// let => we can re assign value but can not re declare it

// let => we can not re-assign and re-declare it


// const name = 'mehedy';

// amer namer moddhe (li) ace kina

// const result = name.includes('ehe');
// console.log(result);


// const pets = ['cat', 'dog', 'rat'];


// const result = pets.includes('dog');
// console.log(result);


// const arr = ['ant', 'camel', 'duck', 'elephant', 'cat', 'dog'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); // suru hobe koto theke , sesh hobe kar age porjonto

// const result = arr.splice(2, 1);
// const result = arr.splice(1, 2);


// arr.splice(2,0, 'rat', 'anki', 'afhj')
// arr.splice(2, 1, 'rat');
// splice(startIndex, deleteCount, insertItem)


// console.log(result);
// console.log(arr);



// const arr = ['ant', 'camel', 'duck', 'elephant', 'cat', 'dog'];


// arr.pop();
// arr.push('anuo');

// arr.unshift('alfkkas');
// arr.shift();

// console.log(arr);


// object

// const person = {
//     name: 'mehedy',
//     age: 25,
//     address: "Rajshahi",
//     phone: "1321313132"   
// }

// dot notation, bracket notation

// console.log(person.address);
// console.log(person.age);

// const x = 'address'
// console.log(person[x]);

// const result = Object.values(person);

// let keys = Object.keys(person);

// for(let key of keys){
//     console.log(person[key]);
//     // console.log(key);
// }


// const person = {
//     name: 'mehedy',
//     age: 25,
//     address: "Rajshahi",
//     phone: "1321313132"   
// }


// let keys = Object.keys(person);

// for(let key of keys){
//     // console.log(key);
//     console.log(person[key]);
// }



const person = {
    name: 'mehedy',
    age: 25,
    address: "Rajshahi",
    phone: "1321313132"   
}


for(let key in person){
    console.log(person[key]);
}