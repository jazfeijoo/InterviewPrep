//Given an array of words and an array of sentences, determine which words are anagrams of each other. 
//Calculate how many sentences can be created by replacing any word with one of its anagrams.

// Complete the countSentences function:

// Parameters：
// string wordSet[n]：an array of strings
// string sentences[m]：an array of strings

// Returns：
// int[]：an array of m integers that denote the number of sentences that can be formed from each sentence

function countSentences(words, sentences){

    const isAnagram = (w1, w2) => {
        let final = true
        if (w1.length !== w2.length){
            return !final
        }
        let a = {}
        let b = {}
       // console.log('WORDS:',w1, w2)
        for(index in w1){
            let char =  w1[index]
            a[char] ? a[char] += 1 : a[char] = 1 
        }
        for(index in w2){
            let char =  w2[index]
            b[char] ? b[char] += 1 : b[char] = 1 
        }
        for (index in w1){
            let char =  w1[index]
            if ( !b[char]){
                return !final
            }
            if ( a[char] !== b[char]){
                return !final
            }
        }
        //console.log('HASH:',a, b, final)
        return final 
    }
    let map = {}
    for(let i=0; i<words.length; i++){
        let word = words[i]
        let otherWords = words.slice()
        otherWords.splice(i,1)
        //console.log('LOGGING: ',word, otherWords)
        for(let j=0; j<otherWords.length; j++){
            let otherWord = otherWords[j]
            let isAna = isAnagram(word, otherWord)
            if (isAna){
                // console.log('CHECK',word, otherWord, isAna, otherWords)
                map[word] ? map[word].push(otherWord) : map[word] = [otherWord]
            }
        }
    } //end of map creation
    let final = []
    //for EACH SENTENCE
    for (sentence of sentences){
        let sentenceNum = 0
        let wordArr = sentence.split(' ')
        wordArr.map(word => {
            if (map[word]){
                sentenceNum += (map[word].length * 2)
            } 
        })
        final.push(sentenceNum)
    }
    console.log('FINAL: ',final)
    return final
}

let wordSet1 = ['the', 'bats', 'tabs', 'in', 'cat', 'act']
let sentence1 = ['cat the bats', 'in the act', 'act tabs in']
countSentences(wordSet1, sentence1); //EXPECTED OUTPUT: 4, 2, 4