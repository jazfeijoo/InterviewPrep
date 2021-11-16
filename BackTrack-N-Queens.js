// PROBLEM : The n-queens puzzles is the probelm of placing n queens on an n x n chessboard such that no 2 queens attack each other
// Given an integer n, return all distinct solutions to the n-queens puzzle. 
// Each solution contains a distinct board configuration of the n-queens' placement: 
// Where Q and . indicate a queen and an empty space respectively 

 const createBoard = (n) => {
    const matrix = new Array(n) //create columns
    for (let i=0; i<n; i++){ //create rows
        matrix[i] = new Array(n).fill('.')
    }
    return matrix 
}

function solveNqueens(n){
    //DRIVER FUNCTION: FOR EACH COL POSITION IN FIRST ROW, EXPLORE POSSIBLE SOLUTIONS
    let final = solveNqueensHelper(n, 0, [], [])
    console.log('FINAL FINAL: ',final.length)
}    

function solveNqueensHelper(n, indexRow, board=[], result=[]){
    //base case: 
    if (board[indexRow] === board[n-1]){
        result.push(board.slice())
        return
    } else {
        for (let c = 0; c < n; c++){ //where c = column index
            if (c === n-1){
                return
            } else {
                if (validateBoard(board, indexRow, c)){
                    let colPassed = new Array(n).fill('.')
                    colPassed[c] = 'Q'
                    board.push(colPassed)
                    solveNqueensHelper(n, indexRow+1, board, result)
                }
                board.pop()
            }
        }
    }
}

solveNqueensHelper(4,0,[], [])

function validateBoard(board, rowIndex, colIndex){
    //check all horizontals (rows)
        for (let c = 0; c < board.length; c++){
            if (board[rowIndex][c] === 'Q') return false;
    
        }
        //check diagonals down (r++ -> go to lower rows, c-- -> prev columns)
        for (let r = rowIndex+1, c = colIndex-1; r < board.length && 0 <=c;  r++, c--){
            if (board[r][c] === 'Q') return false
        }
        //check diagonals up
        for (let r = rowIndex-1, c = colIndex-1; 0 <=r && 0 <=c;  r--, c--){
            if (board[r][c] === 'Q') return false
        }
    
    return true
}

//CHECK VALIDATE FUNCTION:
// let sampleBoard = createBoard(5);
// sampleBoard[0][0] = 'Q'
// console.log('BOARD CHECK VALIDATION:',sampleBoard)
// console.log('should be F:',validateBoard(sampleBoard, 0, 1))
// console.log('should be F:',validateBoard(sampleBoard, 1, 1))
// console.log('should be T:',validateBoard(sampleBoard, 2, 1))

//CHECK FINAL SOLVE FUNCTION:
// solveNqueens(4) //EXPECTED OUTPUT: 2
// solveNqueens(8) // EXPECTED OUTPUT: 