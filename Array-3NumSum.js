//PROBLEM: write a func that take an array and a target and returns all triplets in the array that sum to the target

//EX INPUT: [12,3,1,2,-6,5,-8,6] , target = 0 
//EX OUTPUT: [-8,2,6], [-8,3,5],[-6,1,5]

function TripletNumSum(arr, target){
    let final = []
    arr.sort((a,b) => a - b)
    let lowIdx = 0
    let highIdx = arr.length -1
    let currIdx = 0

    for (let i=0; i<arr.length; i++){
        let sumList = [arr[i]]
        let sumTarg = target - arr[i]
        
    }

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