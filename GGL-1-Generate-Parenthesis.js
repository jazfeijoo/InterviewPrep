// Problem: Given an integer N representing the number of pairs of parentheses, 
// the task is to generate all combinations of well-formed(balanced) parentheses.


function allParenthesis(n){ //d=depth/layers
    let final = []
    allParHelper(n, 0, 0, "",final)
    console.log('FINAL SOLVED BY J: ', final)
    return final 
}

function allParHelper(n, open, close, str, final){
    if (close === n){
        final.push(str)
        return
    } else {
            if(open > close ){ //add '(' IF VALID for each n///
                str = str.concat(')')
                allParHelper(n, open, close + 1, str,final)
               // str.slice(0,-1)
            }
            if(open < n){ //add ')' IF VALID for each n
                str = str.concat('(')
                allParHelper(n, open + 1, close, str,final)
               // str.slice(0,-1)
            }
    }
}

allParenthesis(2) // OUTPUT: ((())) and (()()) and (())() and ()(()) and ()()()


// var generateParenthesis = function(n) {
//     let result = [];

//     _generateParenthesis("", n, 0, 0, result);
//     console.log('NEW FINAL: ',result)
//     return result;
// };

// var _generateParenthesis = function(current, n, left, right, result){
//     if( right === n ) {
//         result.push(current);
//         return;
//     } else {
//         if( left < n ) {
//            _generateParenthesis(current + '(', n, left + 1, right, result);
//         }

//         if( left > right) {
//             _generateParenthesis(current + ')', n, left, right + 1, result);
//         }
//     }
// }

// generateParenthesis(3)