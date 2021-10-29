// PROBLEM 5: given an array and a target value as parameters, provide min & max indexes/ranges for the target value:
// ASSUME THE ARRAY IS SORTED!!! 
// EX: [1,3,3,5,7,8,9,9,15], target = 9 ... result: [6,7]
// APPROACH: use binary search (log n time) to find LOWEST index found (min range index)

function getRanges(arr, target){
    let start = 0
    let end = arr.length - 1
    let min
    let max
    while (start < end){
        let midIndex = Math.floor((start + end)/2)
        let curr = arr[midIndex]
        if (curr < target){
            start = midIndex + 1
        } else if (target < curr) {
            end = midIndex - 1
        } else {
            min = midIndex
            for(let i=midIndex+1; i<arr.length; i++){
                if (arr[min] === arr[i]){
                    max = i
                } 
            }
            break
        }
    }
    console.log('RESULTS:',[min,max])
    return [min,max]
}

getRanges([1,3,3,5,7,8,9,9,15], 9)