// PROBLEM 2 : RANDOM NOTE -> write a function that returns T/F given 1 inputs: magazine (array of letters )& word (ex: bed) and determine if word can exist in magazine 

let magazine1 = ['a', 'b', 'z', 'd', 'e', 'e','r','t','u','i','s']
let word1 = 'dear' //T
let word2 = 'yell' //F

function validateWord(array,word){
    let map = {}
    for (i=0; i<array.length; i++){
        let current = arr[i]
        map[current] ? map[current] ++ : map[current] = 1 
    }
    console.log(map)

}

validateWord(magazine1, word1)