//PROBLEM 1: given 2 arrays -> check if the 2nd array is an exact match w/ corresponding square value of values in array 1

const { merge } = require("lodash");

function squarematch(arr1, arr2){
    let freq1 = {}
    let freq2 = {}

    for (const num of arr1){
        freq1[num] ? freq1[num] ++ : freq1[num] = 1  
    }
    for (const num of arr2){
        freq2[num] ? freq2[num] ++ : freq2[num] = 1  
    }

    for (let key in freq1){
        if (!(key ** 2 in freq2)){
            return false;
        }
        if(freq1[key] !== freq2[key**2]){
            return false
        }
    }
    return true;
}

// squarematch([1,2,3,2,5],[1,4,9,4,25]);  //should be TRUE
// squarematch([1,2,3,2,5],[1,4,9,3,25]); //should be FALSE

//PROBLEM 2: Given 2 strings, write a func that determines if the 2nd str is an anagram of the 1st string. 

function validAnagram(str1, str2){
    charFreq1 = {}
    let final = true
    if (str1.length != str2.length){
        final = false
    } else {
        for (let i=0; i< str1.length; i++){
            let currChar = str1[i]
            charFreq1[currChar] ? charFreq1[currChar]++ : charFreq1[currChar] = 1 
        }
        for (let i=0; i < str2.length; i++){
            let currChar = str2[i]
            charFreq1[currChar] && charFreq1[currChar] >= 1 ? charFreq1[currChar]-- : final = false
        }
    }
    return final
}

// validAnagram('awesome', 'awesom') 
// validAnagram('text', 'text') 

// PROBLEM 3: Write a func that accepts a SORTED array of integers. The func should find the FIRST pair where the sum is zero.

//easy version of problem 3:
function sumZero(arr){
    for (let i=0; i<arr.length; i++){
        let final = [arr[i]]
        for(let j=i+1; j<arr.length; j++){
            if (arr[i] + arr[j] === 0) {
                final.push(arr[j])
                return final 
            }  
        }
    }
    return undefined
}

// sumZero([-3,-2,-1,0,1,2,3])
// sumZero([-3,-2,-1,0])

//better version of problem 3: 

function sumZeroBetter(arr){
    let left = 0
    let right = arr.length-1
    while (left < right){
        let sum = arr[left] + arr[right]
        if (sum === 0){
            return [arr[left], arr[right]]
        }
        else if (sum > 0){
            right --;
        }
        else {
            left ++;
        }
    }
}
// sumZeroBetter([-3,-2,-1,0,1,2,3])


// PROBLEM 4: implement a function which accepts a SORTED array and counts the unique values in the array 

function countUnique(arr){
    let unique = {}
 for (let i=0; i<arr.length; i++){
    let curr = arr[i]
    unique[curr] ? unique[curr]++ : unique[curr] = 1 
 }
 //console.log(Object.keys(unique).length)
 return Object.keys(unique).length
}

// countUnique([1,2,2,2,2,3,4,5])
// countUnique([1,1,1,1])
// countUnique([1,3,4,8])

function countUniqueByReducer(arr){
    
    let count = arr.reduce((accum, key, i, arr) => {
        if (i === 0){
            accum ++
        } else {
            if (key !== arr[i-1]){
                accum ++
            }
        }
        return accum  
    }, 0)
   // console.log(count)
    return count 


}

// countUniqueByReducer([1,2,2,2,2,3,4,5])

//PROBLEM 5: sliding window question... write a func that accepts an array of integers and a number called of n. 
//The function should calc the max sum of n CONSECUTIVE elements in an array... 

//simple version of solution (not sliding window pattern):
function maxSubSum(arr, num){
    if (num > arr.length){
        return null;
    } else {
        let max = 0
        let limit = arr.length - num + 1
        for (let i=0; i< limit; i++){
            let temp = 0
            for (let j=0; j<num; j++){
                temp += arr[i+j]
            }
            if (temp > max){
                max = temp
            }
        }
        return max; 
    }
}

// maxSubSum([1,2,5,2,8,1,5], 2) //10
// maxSubSum([1,4,6,8], 1) //8
// maxSubSum([], 4) //null

//better version of solution (sliding window pattern):
//REVIEW WINDOW APPROACH VS PREV APPROACH: 
function windowSubMax(arr, n){
    let maxSum = 0
    let tempSum = 0 

    if (num > arr.length){return null} 
    for (let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i=num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

//EXAMPLE: CAPITALIZE FIRST LETTER OF EACH STRING IN GIVEN ARRAY:

function capFirst(arr){
    return arr.map(str => {
        return str[0].toUpperCase().concat(str.slice(1))
    })
}

//EXAMPLE: write a recursive function -> sums all even numbers in an object (can contain nested objects as well!)

function nestedEvenSum (obj, sum=0) {
        let objValArr = Object.values(obj)
        for (let i =0; i<objValArr.length; i++){
            let currVal = objValArr[i]
            if (typeof currVal === 'number' && currVal % 2 === 0){
                sum += currVal
            } 
             else if (typeof currVal === 'object'){
                sum += nestedEvenSum(currVal);
            } 
        }
        return sum
}

  
var obj1 = {
outer: 2,
obj: {
    inner: 2,
    otherObj: {
    superInner: 2,
    notANumber: true,
    alsoNotANumber: "yup"
    }
}
}
  
var obj2 = {
a: 2,
b: {b: 2, bb: {b: 3, bb: {b: 2}}},
c: {c: {c: 2}, cc: 'ball', ccc: 5},
d: 1,
e: {e: {e: 2}, ee: 'car'}
};
  
//   nestedEvenSum(obj1); // 6
//   nestedEvenSum(obj2); // 10

//EXAMPLE: write a func that takes an object and finds all of the values which are numbers & converts them to strings 
// object can have nested objects (recursion seems like the best fit!)

function stringifyNums(obj){
    let keyArray = Object.keys(obj)
    for (let i =0; i<keyArray.length; i++){
        let currKey = keyArray[i]
        let currVal = Object.values(obj)[i]
        if (typeof currVal === 'number'){
            obj[currKey] = String(currVal)
        } 
        else if (typeof currVal === 'object'){
            stringifyNums(currVal);
        } 
    }
    return obj
}

let ob1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// stringifyNums(ob1)

// IMPLEMENT LINEAR SEARCH OF ARRAY INDEX (without using indexof method)

function linearSearch(arr, num){
    let final = -1
    for (let i=0; i<arr.length; i++){
        if (arr[i] === num){
            final = i
        }
    }
    return final
}

// linearSearch([0,1,2,3,4,5,6,7],4)
// linearSearch([0,1,2,3,5,6,7],4)

// IMPLEMENT BINARY SEARCH OF ARRAY: find index of num param if insise array param

function binarySearch(arr, num){
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor(start + end)/2
    while (arr[middle] !== num && start <= end){
        if (num < arr[middle]){
            end = middle - 1
        } 
        else {
            start = middle + 1 
        }
        middle = Math.floor((start + end)/2)
    }
    return arr[middle] === num? middle : -1
}
//  console.log(binarySearch([0,1,2,3,4,5,6,7,8],3))

// EXAMPLE: niave search of substring inside of larger string 

function findSubString(str, substr){
    for (let i=0; i<str.length; i++){
        let count = 0 
        for (let j=0; j< substr.length; j++){
            if(str[i+j] !== substr[j]){
                break
            } else {
                count ++
            }
        }
        if (count === substr.length){
            return true
        }
    }
    return false
}
// console.log('ANS:',findSubString('compareTHIS', 'are'))

//WRITE A BUBBLE-SORT FUNC FOR AN ARRAY (add swap func as well):

//NAIVE BUBBLESORT (unnecessary looping):
// function bubbleSort(arr){
//     for (let i=0; i< arr.length; i++){
//         for (let j=0; j < arr.length; j++){
//             if (arr[j] > arr[j+1]){
//                 swap(arr,j,j+1)
//             }
//         }
//     }
//     console.log(arr)
//     return arr
// }
// IMPROVED BUBBLESORT: 
// 1st improvement: i + j values for loop (converge instead!)
// 2nd improvement: is we did swap for the last loop (in j ), then we are done! therefore break! avoid unncessary looping 
function bubbleSort(arr){
    for (let i=arr.length; i > 0; i--){
        let swapCheck = false
        for (let j=0; j < i-1 ; j++){
            if (arr[j] > arr[j+1]){
                swap(arr,j,j+1)
                swapCheck = true
            }
        }
        if (!swapCheck) break;
    }
    console.log(arr)
    return arr
}

function swap(arr, idx1, idx2){
let temp = arr[idx1]
arr[idx1] = arr[idx2]
arr[idx2] = temp
}

// bubbleSort([23,3,11,2,31])

//SELECTION SORT: 
function selectionSort(arr){
    for (let i=0; i < arr.length; i++){ 
        let min = i 
        for (let j=i+1; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j
            }
        }
        if (i !== min){
            swap(arr,min,i)
        }
    }
    console.log(arr)
    return arr
}    

// selectionSort([23,3,11,2,0, 45]);

// INSERTION SORT: 

function insertionSort(arr){
    for (let i=0; i< arr.length-1; i++){
        let curr = arr[i]
        let right =  i+1
        if (curr > arr[right]){ 
            for (let j=i; j>=0; j--){
                if (arr[right] < arr[j]){
                        swap(arr, right, j)
                        right --
                }  
            }
        }
    }
    // console.log('FIN ARR:',arr)
    return arr
}
// insertionSort([3,11,2,0, 1,40])


//MERGE SORT:

function mergeSort(arr){
 if (arr.length <=1) return arr
     let half = Math.floor(arr.length/2)
     let left = mergeSort(arr.slice(0,half))
     let right = mergeSort(arr.slice(half))
     return mergeArr(left, right)
}

// console.log(mergeSort([3,11,2,0, 1,40]))

function mergeArr(arr1, arr2){
    let final = []
    let i = 0
    let j = 0
    while (i<arr1.length && j<arr2.length){
        if ( arr2[j] >= arr1[i]){
            final.push(arr1[i])
            i++
        } else {
            final.push(arr2[j])
            j++
        }
    }
    while (i< arr1.length){
        final.push(arr1[i])
        i++
    }
    while (j < arr2.length){
        final.push(arr2[j])
        j++
    }
    // console.log('FINAL M.:', final)
    return final
}
// mergeArr([1,2], [6,7,8])


// quicksort: 

function quickSort(arr){
    if (arr.length <2){
        return arr
    }
    let pivot = arr[0]
    let i=1
    let left = []
    let right = []
    while (i<arr.length){
        if (pivot > arr[i]){
            left.push(arr[i])
        } 
        if (pivot <= arr[i]){
            right.push(arr[i])
        }
        i++
    }
    let final = [...quickSort(left), pivot,...quickSort(right)]
    console.log('FIN: ',final)
    return final
}
 quickSort([3,11,2,5, 1,49,7,77])