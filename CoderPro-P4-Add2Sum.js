// PROBLEM 4: given an array and a target value as parameters, which 2 unique numbers in the array will produce the target value
// EX: [2,7,11,15], target = 18 => result should be: [7,11]

function add2sum(arr,val){
    let map = {}
    for (elem of arr){
        map[elem] ? map[elem] ++ : map[elem] =1 
    }
    for (let i=0; i < arr.length; i++){
        let find = val - arr[i]
        if(map[find]){
            console.log('RESULT:',[arr[i], find])
            return [arr[i], find]
        }
    }
    return 0
}

add2sum([2,7,11,15], 18)