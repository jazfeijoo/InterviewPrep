// PROBLEM 6: Given an array, produce all possible permutations for array of numbers 
// EX: [1,2,3] => => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3, 1, 2], [3, 2, 1]
// Permutation of [1,2,3] => 3! = 3 * 2 * 1 = 6 combinations expected
// Big O (n!), n = length of 3

function permutations(arr){
    let results = []
    function backtrackHelper(arr, currPerm){
        if (arr.length === currPerm.length){
            results.push(currPerm.slice())
            return
        }

        for (num of arr){
            if(!currPerm.includes(num)){
                currPerm.push(num)
                backtrackHelper(arr, currPerm)
                currPerm.pop() //pop

            }
        }
    }
    backtrackHelper(arr, [])
    //console.log('RESULTS ARE THIS____: ',results)
    return results

}

// permutations([1,2,3])

//VERSION 2 OF PERMUTATION ALGO SOLUTION: 

function permuter(arr){
    let results = []

    function permuterHelper(arr, perm=[]){
        for (let i=0; i<arr.length; i++){
            let curr = arr.splice(i,1)[0]
            perm.push(curr)
            if (arr.length == 0){
                results.push(perm.slice())
            }
            permuterHelper(arr.slice(), perm)
            arr.splice(i,0, curr)
            perm.pop();
        }
        console.log('PERMUTER RESULTS',results)
        return results
    }
    return permuterHelper(arr)
}

permuter([1,2,3])