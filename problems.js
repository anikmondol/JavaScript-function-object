// function  sumOfArray(arr) {
//     let sum = 0;
//     for(let i of arr){
//         sum += i;
//     }
//     return sum;
// }

// const num = [1, 2, 3, 4, 5];
// const total = sumOfArray(num);
// console.log(total);


// function sumOfOdd(arr) {
//     let sum = 0;
//     for(let i of arr){
//         if(i % 2 === 1){
//             sum += i;
//         }
//     }
    
//     return sum;
// }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = sumOfOdd(numbers);
// console.log(result);



// function sumOfEven(arr){
//     let sum = 0;
//     for(let item of arr){
//         if(item % 2 === 0){
//             sum += item;
//         }
//     }
//     return sum;
// }



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const total = sumOfEven(numbers);
// console.log(total);



// amer name anik, amer bari Dhaka, amer boys 24


// function information(obj) {
//     const sentences = `amer name ${obj.name}, amer bari ${obj.address}, amer boyos ${obj.age}`
//     return sentences
// }


// const myInfo = {
//     name : 'anik',
//     age : 24,
//     address: 'Dhaka'
// }

// console.log(information(myInfo));


// factorial

// 5! = 5 * 4 * 3 * 2 * 1
// 1! = 1
// 0! = 1


// const number = 0;

// let result = 1;

// for(let i = number; i >= 1; i--){
//     result *= i;
// }

// console.log(result);


// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(1));


// function factorial(number){
//     if(number === 0 || number === 1){
//         return 1
//     }else{
//         let result = 1;
//         for(let i = number; i >= 1; i--){
//             result *= i;
//         }
//         return result;
//     }
// }


// console.log(factorial(0));


// find the largest number from  an array


// function  findMax(arr) {
//     let max = arr[0];
//     for(let i = 0; i <arr.length; i++){
//         if(i < max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([1, 2, 4, 8, 3]));


// function findLargest(arr) {
//     let max = arr[0]
//     for(let item of arr){
//         if(max < item){
//             max = item;
//         }
//     }
//     return max;
// }


// const array = [10, 40, 50, 22];
// const result = findLargest(array);
// console.log(result);


// function findName(n){
//     let max = n[0];
//     for(let i of n){
//         if(max.length < i.length){
//             max = i;
//         }
//     }
//     return max;
// }




// const friends = ['anik', 'Ritu', 'arpon', 'jou', "puja"]

// const result = findName(friends);
// console.log(result);


// function biggestFriend(friends) {
//     let biggest = friends[0];
//     for(let item of friends){
//         if(biggest.length < item.length){
//             biggest = item;
//         }
//     }
//     return biggest;
// }


// console.log(biggestFriend(['ani', 'tumei', 'naki']));