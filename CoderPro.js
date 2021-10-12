//PROBLEM 1: FUNCTION TO VALIDATE IF INPUT IS A BINARY TREE OR NOT!
//1. DEFINE CLASS TO CREATE BINARY TREES (whether valid or not...)
class Node {
    constructor(value, left=null, right=null){
        this.value = value
        this.left = left
        this.right = right
    }

    isValidBST(){
        //recursive helper function:
        function isValidBSThelper(node, min, max){
             //base case:
            if (node === null){
                return true;
            }
             //recursive case:
            if ((min !== null && node.value <= min) || (max !==null && max <= node.value)){
                return false
            }
            const left = isValidBSThelper(node.left, min, node.value)
            const right = isValidBSThelper(node.right, node.value, max)
            return (left && right)
        }
        //CALL THE FUNCTION:
        const final = isValidBSThelper(this, null, null)
       console.log('VALIDATION',final)
        return final
    }
} 

//2. DEFINE EXAMPLES TO TEST FUNCTION:
//Tree 1 = valid tree
const tree1 = new Node(5)
tree1.left = new Node(4)
tree1.right = new Node(7)
//Tree 2 = Invalid tree
const tree2 = new Node(5)
tree2.left = new Node(10)
tree2.right = new Node(7)
tree2.right.left = new Node(2)
//3. FINALLY, DEFINE FUNCTION TO VALIDATE TREE: INSIDE NODE CLASS... 
//4. VERIFY/TEST:

tree1.isValidBST();
tree2.isValidBST();



