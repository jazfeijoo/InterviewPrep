// Given an array of intervals intervals where intervals[i] = [starti, endi], 
// return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
// EX 1: Input: intervals = [[1,2],[2,3],[3,4],[1,3]] Output: 1
// EX 2: Input: intervals = [[1,2],[1,2],[1,2]] Output: 2
// EX 3: Input: intervals = [[1,2],[2,3]] Output: 0

function nonOverlapIntervals(arr){
    let count = 0
    let final = arr.sort((a,b) => {
        return a[0] -b[0] 
    })
    let endPrev = final[0][1]

    for (let i=1; i< final.length; i++){
        let startCurr = final[i][0]
        let endCurr = final[i][1]
        if(startCurr < endPrev){
            count += 1
            end = Math.min(endCurr, endPrev)
        } else {
            end = endCurr
        }
    }
    console.log('COUNT FINAL', count)
    return count 
}

nonOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])
nonOverlapIntervals([[1,2],[1,2],[1,2]])