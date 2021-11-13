// PROBLEM : The n-queens puzzles is the probelm of placing n queens on an n x n chessboard such that no 2 queens attack each other
// Given an integer n, return all distinct solutions to the n-queens puzzle. 
// Each solution contains a distinct board configuration of the n-queens' placement: 
// Where Q and . indicate a queen and an empty space respectively 

function solveNqueens(n){
    const createBoard = (n) => {
        const matrix = new Array(n) //create columns
        for (let i=0; i<n; i++){ //create rows
            matrix[i] = new Array(n).fill('.')
        }
        return matrix 
    }
    const placeQueen = (r,c) => {
        board[r][c] = 1
    }
    let finalCount = 0
    let board = createBoard(n)
    for (let r=0; r < n; r++){
        let used = []
        for (let c=0; c<n; c++){
            if(used.length === 0){
                placeQueen(r,c)
                used.push(c)
            } else {
                //only push if curr col @ row is not in used AND  
            }
        }
        if (used.length === n){
            finalCount++
        }
    }
}    

solveNqueens(4) //EXPECTED OUTPUT: 2