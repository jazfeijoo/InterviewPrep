//BINARY SEARCH TREES: 

class current {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }

    insert(value){
        let newcurrent = new current(value)
        if (!this.root){
            this.root = newcurrent
        } else {
            let parent = this.root
            while (parent){
                if (newcurrent.value < parent.value){
                    if (parent.left === null){
                        parent.left = newcurrent;
                        break
                    }
                    parent = parent.left 
                }
                if (newcurrent.value > parent.value){
                    if (parent.right === null){
                        parent.right = newcurrent
                        break
                    }
                    parent = parent.right
                }
            }
        }
       // console.log('TREE:',this)
        return this
    }

    find(value){
        let curr = this.root
        while (curr){
            if (curr.value === value){
                console.log('FOUND:', curr)
                return curr
            }
            else {
                curr = value < curr.value? curr.left : curr.right  
            }
        }
        return null
    }

    breadthFirstSearch(){
        let queue = [this.root]
        let visited = []

        while (queue.length){
            visited.push(queue[0].value)
            let currcurrent = queue[0]
            if (currcurrent.left){
                queue.push(currcurrent.left)
            }
            if (currcurrent.right){
                queue.push(currcurrent.right)
            }
            queue.shift()
        }
        console.log('BFS:',visited)
        return visited
    }

    depthFirstSearch_PREORDER(){
        let visited = []
        function traverse(node){
            visited.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        console.log('DFS pre-order', visited)
        return visited
    }

    depthFirstSearch_POSTORDER(){
        let visited = []
        function traverse(node){
            if (node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            visited.push(node.value)
        }           
        traverse(this.root)
        console.log('DFS post-order:',visited)
        return visited

    }

    depthFirstSearch_INORDER(){
        let visited = []
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            visited.push(node.value)
            if (node.right){
                traverse(node.right)

            }
        }  
        traverse(this.root)
        console.log('DFS in-order is THIS:',visited)
        return visited
    }



} //end of BST class

let tree = new BinarySearchTree()

tree.insert(27)
tree.insert(12)
tree.insert(90)
tree.insert(50)
tree.insert(11)
tree.insert(73)
tree.insert(26)
tree.insert(8)
tree.insert(111)
// tree.find(90)
// tree.find(91)

// TREE TRAVERSAL:
// tree.breadthFirstSearch()
//  tree.depthFirstSearch_PREORDER()
// tree.depthFirstSearch_POSTORDER()
// tree.depthFirstSearch_INORDER()

tree.confirmIsTree();

