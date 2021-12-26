// FIND NON-DUPLICATE NUM IN AN ARRAY THAT HAS ALL REPEATING/DUPLICATE NUMS EXCEPT FOR 1 INTEGER...
// Solution 1: Hash Map
// Solution 2: XOR() method
let arr1 = [4, 3, 2, 4, 7, 3, 2, 2]

function findNonDup(arr){
    let map = {}
    for(let i=0; i< arr.length-1;i++){
        map[arr[i]] ? map[arr[i]] += 1 : map[arr[i]] = 1 
    }
    //console.log(map)
    for (num in map){
        if (map[num] === 1) {
            // console.log('FINAL: ',num)
            return num
        }
    }
}

 findNonDup(arr1)
