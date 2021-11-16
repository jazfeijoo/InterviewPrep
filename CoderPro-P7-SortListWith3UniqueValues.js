// PROBLEM 7: Sort a list (array of n numbers) that only has 3 unique values 

//INPUT TO USE FOR TESTING:
let listTest = [3,3,2,1,3,2,1]
let listTest2 = [3,3,2,1,3,2,1,2,3,1,1]
// SOLUTION METHOD: HASH MAP 
function sortListHash3(list){
    let counts = {}
    for (num of list){
        counts[num] ? counts[num] ++ : counts[num] = 1
    }
    let sortedList = []
    for (num in counts){
        for(let i=0; i < counts[num]; i++){
            sortedList.push(num)
        }
    }
    // console.log('COUNT MAP: ',counts)
    // console.log('SORTED LIST: ',sortedList)
    return sortedList
}
// sortListHash3(listTest)

//SOLUTION METHOD: USING POINTERS (1 at start, 1 at end)
// This solution assumes that we know the 3 values & their order already:
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
    console.log('FINAL LIST',list)
    return list 
}
sortListPointers(listTest2)