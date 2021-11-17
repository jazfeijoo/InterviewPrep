// Problem: Given an integer N representing the number of pairs of parentheses, 
// the task is to generate all combinations of well-formed(balanced) parentheses.

function allParenthesis(n, []){
    let final = []
    for (let i=0; i<n;i++){
        let outer = outerParenth(i)
        console.log(outer)
    }

}

function outerParenth(n){
    let string = ''
    for (let i=0; i<n; i++){
        string.concat('()')
    }
    return string
}

//allParenthesis(1,0, 1,[]) //OUTPUT: ()
allParenthesis(3,[]) // OUTPUT: ((())) and (()()) and (())() and ()(()) and ()()()