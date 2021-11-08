// A schedule has just been released for an upcoming tech conference. 
// The schedule provides the start and end times of each of the presentations. 
// Once a presentation has begun, no one can enter or leave the room. 
// It takes no time to go from one presentation to another. 
// Determine the maximum number of presentations that can be attended by one person.

// Complete the function maxPresentations in the editor below.
// Assume arrays are already sorted

// maxPresentations has the following parameter(s)：
//   scheduleStart[n]：the start times of presentation i
//   scheduleEnd[n]：the end times of presentation i

// Returns：
//   int：the maximum number of presentations that can be attended by one person
function maxPresentations(startSched, endSched){
    let final = 0
    //for EACH START
    for (let i=0; i<startSched.length; i++){
        let start = startSched[i]
        let end = endSched[i]
        let set = []
        for (let j=0; j < startSched.length-1; j++){
            
            
        }
    }
    return final
}

let start1 = [1, 1, 2, 3]
let end1 = [2, 3, 3, 4]
maxPresentations(start1, end1) //expected output : 3