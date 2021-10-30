//TWITTER CHALLENGE 1 
// A log file is provided as a string array where each entry is in the form "user_id timestamp action".
// Each of the values is separated by a space.
// Both user_id and timestamp consist only of digits, are at most 9 digits long and start with a non-zero digit.
// timestamp represents the time in seconds since the application was last launched
// action will be either "sign-in" or "sign-out"
// Given a log with entries in no particular order, return an array of strings that denote user_id's of users who signed out in maxSpan seconds or less after signing in.

// Complete the function processLogs in the editor below.

// The function has the following parameter(s):   string logs[n]：each logs[i] denotes the ith entry in the logs
//   int maxSpan：the maximum difference in seconds between when a user logs in and logs out for the user to be included in the result
// Returns:
//   string[]：a string array of user id's, sorted ascending by numeric val

function processLogs(logs, maxSpan){
    let map = {}
    let final = []
    logs.forEach(log => {
        let logArr = log.split(' ')
        let userId = logArr[0]
        let timestamp = Number(logArr[1])
        let action = logArr[2]
        if (!map[userId]) {
            map[userId] = {'sign-in': null, 'sign-out': null, 'delta': 0}
        }  
        map[userId][action] === null ? map[userId][action] = timestamp : map[userId][action] += timestamp 
        action === 'sign-out' ? map[userId]['delta'] += timestamp : map[userId]['delta'] -= timestamp

    });
    console.log('MAP FINAl:', map)
    for (id in map){
        let delta = map[id]['delta']
        if (map[id]['sign-out']){
            if (delta <= maxSpan){
                final.push(String(id))
            }
        }
    }
    //console.log(final)
    return final 
}
let log1 = ["30 99 sign-in", "30 105 sign-out", "12 100 sign-in", "20 80 sign-in", "12 120 sign-out", "20 101 sign-out", "21 110 sign-in"]
let maxSpan1 = 20
processLogs(log1, maxSpan1) // EXPECTED OUTPUT: ["12", "30"]