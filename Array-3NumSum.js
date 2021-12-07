//PROBLEM: write a func that take an array and a target and returns all triplets in the array that sum to the target

//EX INPUT: [12,3,1,2,-6,5,-8,6] , target = 0 
//EX OUTPUT: [-8,2,6], [-8,3,5],[-6,1,5]

function TripletNumSum(arr, target){
    arr.sort((a,b) => a - b)
    let final = []
    for (let i = 0; i < arr.length - 2; i++){
        let next = i+1
        let end = arr.length - 1
        let sum = target - arr[i]
        while (next < end){
            if ( sum === arr[next] + arr[end]){
                final.push([arr[i], arr[next], arr[end]])
                next++
                end--
            }
            else if (arr[next] + arr[end] < sum){
                next ++
            } else { //sum is less than target, need 
                end --
            }
            
        }
    }
    console.log('FINAL: ',final)
    return final
}

TripletNumSum([12,3,1,2,-6,5,-8,6],0)


// function TripletNumSum(arr, target){
//     let final = []

//     const add3Helper = (idx, sumList, targetSum) => {
//         let currNum = arr[idx]
//         if(idx === arr.length-3){
//             return final
//         } 
//         else {
//             if (sumList.length === 0){
//                 sumList.push(currNum)
//                 targetSum -= currNum
//             }
//             else {
//                 if (idx < arr.indexOf(targetSum-currNum)){
//                     sumList.push(currNum, targetSum-currNum)
//                     final.push(sumList)
//                     sumList.splice(0,1)
//                 }
//             }
//             add3Helper(idx++, sumList,targetSum)
//         }
//     }

//     add3Helper(0,[],target)
//     console.log('FINAL NEWWW: ', final)
// }