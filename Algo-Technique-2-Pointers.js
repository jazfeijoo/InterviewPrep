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

// Find2LinesMostWater([1,8,6,2,5,4,8,3,7]) 
//EXPECTED OUTPUT: 8,7 -> area filled with water: 49

// 4. Max Number of K-Sum Pairs: You are given an integer array nums and an integer k. 
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.
// Input: nums = [1,2,3,4], k = 5
// Output: 2

function maxSumKPairs(list, target){
    let maxNum = 0
    while (1 < list.length){
        let findNum = target - list[0]
        list.splice(0,1)
        let idx = list.indexOf(findNum)
        if (-1 < idx){
            list.splice(idx,1)
            maxNum ++
        }
    }
    console.log('OUPUT:', maxNum)
    return maxNum
}
// maxSumKPairs([1,2,3,4], 5) //OUTPUT: 2 , max of 2 operations 
// maxSumKPairs([3,1,3,4,3], 6) //OUTPUT: 1

// 5. Shortest Unsorted Continuous Subarray
// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, 
// then the whole array will be sorted in ascending order.
// Return the shortest such subarray and output its length.
// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

function shortestUnsortedSubArray(list){
    let start = null
    let stop = null
    let end = list.length-1
    let curr = 1
    while (curr < end){
        if (list[curr-1] <= list[curr]){
           // do nothing
        } else {
           if (start === null){
               start = curr-1
           }
           else {
            stop = curr
           }
        }
        curr++
    }
    let shortest = list.slice(start, stop+1)
    // console.log(shortest.length, shortest)
    return shortest
}
//shortestUnsortedSubArray([2,6,4,8,10,9,15]) //OUTPUT: [6, 4, 8, 10, 9] aka 5 


// 6. Minimize Maximum Pair Sum in Array
// The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
// Each element of nums is in exactly one pair, and the maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

function minMaxPairSum(array){
    array.sort((a,b) =>{ return a -b} )
    let max = - Infinity
    let pairs = array.map((num, idx) => {
        if (idx <= (array.length / 2)){
            let sum = num + array[array.length-1-idx]
            max = Math.max(max, sum)
            return [num, array[array.length-1-idx]]
        }
    }).splice(0,array.length / 2 +1)
    // console.log('FINAL:',pairs, max)
    return max
}
// minMaxPairSum([3,5,2,3]) // EXPECTED OUTPUT: 7
// minMaxPairSum([3,5,4,2,4,6]) // EXPECTED OUTPUT: 8

// 7. Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
// In this case, 6 units of rain water (blue section) are being trapped.

function trapWaterAmount(heights){
    let left = null
    let right = null
    let sub = []
    let curr = 0 
    let final = 0
    while (curr < heights.length - 1){
        if (left === null && right === null){
            if ( heights[curr+1] < heights[curr]){
                left = curr
            }
        }
        else if (right === null){
            if ( heights[left] <= heights[curr]){
                right = heights[curr]
            } else {
                sub.push(heights[curr])
            }
        }
        if (right !== null){
            let height = Math.min(left, right)
            for (let i=0; i < sub.length -1;i++){
                final += height - sub[i]
            }
            console.log('SUB:', sub)
            left = null
            right = null 
            sub = []
        }
        curr++
    }  
    console.log('OUTPUT:',final) 
    return final

}

// trapWaterAmount([0,1,0,2,1,0,1,3,2,1,2,1]) //OUPUT: 6 

//8. Shortest Subarray to be Removed to Make Array Sorted
// Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.
// Return the length of the shortest subarray to remove.
// A subarray is a contiguous subsequence of the array.
//Input: arr = [1,2,3,10,4,2,3,5] Output: 3
// Input: arr = [5,4,3,2,1] Output: 4
function shortRemoveToSort(arr){
    let start = null
    let stop = null
    let idx = 1
    while (idx < arr.length){
        let prev = arr[idx-1]
        let curr = arr[idx]
        if (curr < prev){
            if (start === null){
                start = idx-1
            } else {
                stop = idx
            }
        }
        idx++ 
    }
    let sub = arr.slice(start, stop+1)
    if (sub.length === arr.length){
        return sub.length-1
    }
    return sub.length
}

console.log(shortRemoveToSort([1,2,3,10,4,2,3,5])) //output: 3
console.log(shortRemoveToSort([5,4,3,2,1])) //output: 4