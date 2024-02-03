// function add(a , b){

//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return 'please give me two numbers'
//     }
//     return a + b
// }

// console.log(add(4, "a"));


// function findSum(arr) {
//     if(!Array.isArray(arr)){
//         return 'tumei array deoy nai'
//     }
//     let sum = 0;
//     for(let item of arr){
//         sum += item;
//     }
//     return sum;
// }



// const arr = [10, 20, 82, 76, 99]
// const result = findSum(arr);
// console.log(result);


function findVowel(s) {

    if(typeof s !== 'string'){
        return 'please provide string'
    }

    let vowel = 0;
    let consonant = 0;
    let space = 0;
    let vowelArray = [];
    for(let i = 0; i < s.length; i++){
        // a e i o u
        let char = s[i].toLowerCase()
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            vowel++;
            vowelArray.push(char)
        }else if(char !== " "){
            consonant++;
        }else{
            space++;
        }
    }

    const obj = {
        vowelCount : vowel,
        consonantCount : consonant,
        spaceCount :  space,
        vowelArray : vowelArray 
    }

    return obj
}




const sentences = 'the name Of our coUntry is bangladesh';

const result = findVowel(sentences)
console.log(result);

