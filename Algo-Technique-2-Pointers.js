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
// let testArr1 = [-1, 1, 2, 3, 5]
// let x1 = 5
// console.log('FINAL ANS:',find2Nums(testArr1, x1))

// 2. Sort a list (array of n numbers) that only has 3 unique values 
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
// let listTest2 = [1,2,3,2,3,1,2,2,3,3,3]
// sortListPointers(listTest2) 

// 3. Container With Most Water: Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
// EX INPUT: Input: height = [1,8,6,2,5,4,8,3,7]...array sorting cannot be messed with
// EX OUTPUT: 49 (...line at start=1, stop= height.length-1, 7*7=49)

function Find2LinesMostWater(array){
    let start = 0
    let stop = array.length-1
    let maxArea = 0 
    while (start < stop){
        let currArea = Math.min(array[start], array[stop]) * (stop-start)
        maxArea = Math.max(maxArea, currArea)
        if (array[start] < array[stop]){
            start ++
        } else {
            stop --
        }
    }
    console.log('MAX AREA:', maxArea)
    return maxArea
}

Find2LinesMostWater([1,8,6,2,5,4,8,3,7]) //EXPECTED OUTPUT: 8,7 -> area filled with water: 49

