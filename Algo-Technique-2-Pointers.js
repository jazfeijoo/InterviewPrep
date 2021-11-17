//PRACTICE PROBLEMS FOR 2 POINTERS METHOD OF SOLVING ALGO PROBLEMS:

//1. Find 2 numbers in a SORTED array that sum to a target

function find2Nums(list, target){
    //let startIdx = 0
    let endIdx = list.length -1
    let currIdx = 0
    while (currIdx <= endIdx){
        let currSum = list[currIdx] + list[endIdx]
        if (currSum === target){
            return [list[currIdx], list[endIdx]]
        }
        else if (currSum < target){
            currIdx++
        }
        else {
            endIdx --
        }
    }
    return 0
}
let testArr1 = [-1, 1, 2, 3, 5]
let x1 = 5
console.log('FINAL ANS:',find2Nums(testArr1, x1))

// 2, Sort a list (array of n numbers) that only has 3 unique values 
function sortListPointers(list){
    let startIndex = 0
    let endIndex = list.length -1
    let currIndex = 0
    while (currIndex <= endIndex){
        if (list[currIndex] == 1){
            list[currIndex] = list[startIndex]
            list[startIndex] = 1
            startIndex++
            currIndex++
        }
        if (list[currIndex] == 2){
            currIndex++
        }
        if(list[currIndex] == 3){
            list[currIndex] = list[endIndex]
            list[endIndex] = 3
            endIndex--
        }
    }
   // console.log('FINAL LIST: ',list)
    return list 
}
sortListPointers(listTest2)