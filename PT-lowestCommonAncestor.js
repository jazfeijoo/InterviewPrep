// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
// EX 1: 
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
//EX 2:
// Input: root = [1,2], p = 1, q = 2
// Output: 1
// function findLowestAncestor(root, p, q){
//     let level = 0
//     let node = root[0]




// }

// findLowestAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 1) // 3
// findLowestAncestor([3,5,1,6,2,0,8,null,null,7,4], 6, 4) // 5


//PRACTICING BIT STRING TO NUM CONVERSION & VICE VERSA
// console.log('1: ',(1).toString(2), typeof (1).toString(2))
// console.log('2: ',(2).toString(2))
// console.log('3: ',(3).toString(2))
// console.log('4: ',(4).toString(2))
// console.log('5: ',(5).toString(2))
// console.log('11: ',(11).toString(2))
// console.log('12: ',(12).toString(2))

// console.log('P 1: ', parseInt(1,2), typeof parseInt(1,2))
// console.log('P 10: ', parseInt(10,2))
// console.log('P 11: ', parseInt(11,2))
// console.log('P 100: ', parseInt(100,2))

//RECURSION PRACTICE:

// function countToTen(num){
//     while (num <=10){
//         console.log('counting: ',num)
//         num++
//     }
// }
// countToTen(1)

// function recursionCountToTen(num){
//     if ( 10 < num){
//         return
//     } else {
//         console.log('recurse count', num)
//         recursionCountToTen(num+1)
//     }
// }

// recursionCountToTen(1)