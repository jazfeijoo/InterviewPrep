// ARRAY ELEMENTS...
// DYNAMIC ARRAY LISTS IN JS...

// let array1 = new Array();
// let array2 = new Array(10).fill('0')
// console.log('OUTPUT:',typeof array1, array1)
// console.log('OUTPUT:',typeof array2, array2)

// FUNCTIONS FOR REMOVING DUPLICATES FROM ARRAYS:

// function removeDuplicates(arr){
   
//     let filtered = arr.filter((num, idx) => {
//         return arr.indexOf(num) === idx
//     })
//     console.log(filtered)
//     return filtered
// }

// function removeDuplicates(arr){
//     let final = new Set(arr)
//     console.log(Array.from(final))
//     return Array.from(final)
    
// }

// function removeDuplicates(arr){
//     let unique = []
//     arr.forEach(num => {
//         if(!unique.includes(num)){
//             unique.push(num)
//         }
//     });
//     console.log('UNIQUE: ', unique)
//     return unique
// }

// removeDuplicates([0,0,0,1,1,1,2,2,2,3,4])

// PROBLEM: find max pair sum of array
// 1. The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
// Each element of nums is in exactly one pair, and The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

// function minMaxPairSum(arr){
//     arr.sort((a,b) => {
//         return a - b
//     })
//     let sum = arr[0] + arr[arr.length-1]
//     console.log(sum)
//     return sum
// }
// minMaxPairSum([3,5,4,2,4,6]) //EXPECTED: 8 
// minMaxPairSum([3,5,2,3]) //EXPECTED: 7 