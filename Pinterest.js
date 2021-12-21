function solution(a, b) {
    let diff = a[1] - a[0]
    let finalA = a.filter((num, idx) => {
        if (idx === 0 || (num - a[idx-1]) === diff){
            return 1
        } else {
            if (num % diff === 0){
                return 1
            }
        }
    })
    //console.log('FINAL A: ',finalA)
    if (finalA.length !== a.length){
        return -1
    } else {
        let cleanB = b.filter((num) => {
            if (!finalA.includes(num)){
                return num
            }
        })
        let finalB = []
        for(let i=0; i< cleanB.length; i++){
            let curr = cleanB[i]
            if (finalA.includes(curr-diff) || finalA.includes(curr+diff)){
                finalB.push(curr)
            } else {
                if (curr === diff + finalB[finalB.length-1]){
                    finalB.push(curr)
                }
            }
        }
        return finalA.length + finalB.length
    }
}

// console.log('TEST 1 iss: ',solution([7, 13],[1, 10, 16]))

// console.log('TEST 2 is: ', solution([0, 4, 8, 16],[0, 2, 6, 12, 14, 20]))

//RETURN THE CENTURY THAT THE YEAR BELONGS IN...
// function solution(year) {
//     let remainder = year % 100
//     if (remainder !== 0){
//         let num = (year / 100 )
//         let remNum = num % 1
//         return num -remNum + 1
//     }
//     return year / 100
    
// }
// console.log(solution(1905))