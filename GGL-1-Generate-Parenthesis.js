// Problem: Given an integer N representing the number of pairs of parentheses, 
// the task is to generate all combinations of well-formed(balanced) parentheses.

function allParenthesis(n){ //d=depth/layers
    let final = []
    let open = n
    let close = n
    let str=''
    function allParHelper(n, open, close, final, str){
        if (open === 0 && close === 0){
            final.push(str)
            console.log(final)
            return final
        } else {
            if (open === n && close === n){
                allParHelper(n,open--,close,final,'(')
            } else {
                //OPEN OR CLOSE are not at beginning & not at end...
                if (0 < open && close <= open){
                    allParHelper(n, open--, close, final, str.concat('('))
                } else {
                    allParHelper(n, open, close--,str.concat(')'))
                }
            }
        }
    }
    allParHelper(n, open, close, final, str)


}


//     for (let i=1; i<=n;i++){
//         const par = '()'
//         if(str.length === (n*2)){
//             final.push(str)
//         } else {
//             if (open === n && close === n){
//                 str = '('
//                 open--
//                 allParenthesis(n, final, str, open, close)
//             }
//             else {
//                 //len= 1-5
//                 if( 1 <= open){
//                     str = str.concat('(')
//                     open --
//                     allParenthesis(n, final, str, open, close)
//                 }
//                 if ( 1 <= close){
//                     str = str.concat(')')
//                     close --
//                     allParenthesis(n, final, str, open, close)
//                 }
//             }
//         }
//     }
//     console.log('FINAL: ', final)
//     return final
// }

// function outerParenth(n){
//     let string = ''
//     for (let i=0; i<n; i++){
//         string = string.concat('()')
//     }
//     return string
// }
// outerParenth(3)
//allParenthesis(1,0, 1,[]) //OUTPUT: ()
allParenthesis(3) // OUTPUT: ((())) and (()()) and (())() and ()(()) and ()()()

let string1 = '()'
