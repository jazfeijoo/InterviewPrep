// There is a queue of people with the following data values: h = height, k = number of people in front of person
// EX INPUT: [[7,0],[4,4],[7,1],[5,0][6,1],[5,2]]
// EX OUPUT: [[5,0],[7,0],[5,2],[6,1],[4,4 ],[7,1]]

function reconstructByHeightView(list){
    let final = []
    list.sort((a,b) =>  {
        if (a[0] === b[0]){
            return a[1] - b[1]
        } 
        else {
            return b[0] - a[0]
        }
    })
    for (let person of list){
        // splice(start, deleteCount, item1) -> change array by remove or replace
        //below code: person[1]=@ this index, 0=delete none, person= insert this person!
        final.splice(person[1],0,person)
    }
   
    console.log('FINAL OUTPUT:', final, 'LIST IS:', list)
    return final
}

let list1 = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
reconstructByHeightView(list1)