// PROBLEM 2 : RANDOM NOTE -> write a function that returns T/F given 1 inputs: magazine (array of letters )& word (ex: bed) and determine if word can exist in magazine 

let magazine1 = ['a', 'b', 'z', 'd', 'e', 'e','r','t','u','i','s']
let word1 = 'dear' //T
let word2 = 'yell' //F

function validateWord(array,word){
    let final = true
    if (array.length < word.length){
        return !final
    }
    let map = {}
    for (i=0; i<array.length; i++){
        const current = array[i]
        map[current] ? map[current] ++ : map[current] = 1 
    }

    for (j=0;j<word.length; j++){
        let letter = word[j]
        if (!map[letter] || map[letter] === 0) return !final  
        map[letter] --
    }
    return final;
}

console.log('SHOULD BE TRUE',validateWord(magazine1, word1))
console.log('SHOULD BE FALSE',validateWord(magazine1, word2))