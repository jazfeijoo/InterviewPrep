// class Node {
//     constructor(value){
//         this.value = value
//         // this.left = null
//         // this.right = null
//     }
// }

class MaxBinaryHeap {
    constructor () {
        this.heap = []
    }

    insert(value){
     //   let newNode = new Node(value)
        this.heap.push(value)
        this.bubbleUp();
        return this.heap
    }
    //helper function needed for insert: 
    bubbleUp(){
        let nodeIndex = this.heap.length-1
        const node = this.heap[nodeIndex]
        while (nodeIndex > 0) {
            let parentIndex = nodeIndex % 2 === 0 ? Math.round((nodeIndex -2)/2) : Math.round((nodeIndex -1)/2)
            let parent = this.heap[parentIndex]
            if (node <= parent) break;
            console.log(node, this.heap[nodeIndex],parent)
            this.heap[parentIndex] = this.heap[nodeIndex]
            this.heap[nodeIndex] = parent
            nodeIndex = parentIndex
            console.log('BUBBLE UP:', node,this.heap[nodeIndex],'parent:', parent, this.heap)
        }
    } 
//1. swap first valuew with last value (use pop)
//2. once you have new root, adjust by "sink down"/"bubble down" to the correct spot...
    remove(){
        if (2 <= this.heap.length){
            this.heap[0] = this.heap[this.heap.length -1]
            this.heap.pop();
            this.bubbleDown();
        }
        console.log('AFTER REMOVE',this.heap)
        return this.heap
    }
    //SINK DOWN HELPER FUNC: 
    bubbleDown(){
        let nodeIndex = 0
        let leftIndex = (2* nodeIndex) + 1
        let  rightIndex = (2* nodeIndex) + 2
        //node has atleast 1 child to switch with.. 
        while (leftIndex <= this.heap.length){    
            let node = this.heap[nodeIndex]
            let leftChild = this.heap[leftIndex]
            let rightChild = rightIndex <= this.heap.length ? this.heap[rightIndex] : null
            if (node < leftChild || node < rightChild){
                if (rightChild && leftChild < rightChild){
                    //swap to right
                    this.heap[rightIndex] = node 
                    this.heap[nodeIndex] = rightChild
                    nodeIndex = rightIndex
                    leftIndex = (2* nodeIndex) + 1
                    rightIndex = (2* nodeIndex) + 2
                } else {
                    // swap left
                    this.heap[leftIndex] = node 
                    this.heap[nodeIndex] = leftChild
                    nodeIndex = leftIndex
                    leftIndex = (2* nodeIndex) + 1
                    rightIndex = (2* nodeIndex) + 2
                }
            }
        }
    }

}//end of BINARY HEAP CLASS

let newMaxBinaryHeap = new MaxBinaryHeap

newMaxBinaryHeap.insert(99)
newMaxBinaryHeap.insert(88)
newMaxBinaryHeap.insert(60)
newMaxBinaryHeap.insert(34)
newMaxBinaryHeap.insert(10)
newMaxBinaryHeap.insert(55)
newMaxBinaryHeap.insert(200)
newMaxBinaryHeap.insert(7)
newMaxBinaryHeap.insert(44)
newMaxBinaryHeap.insert(59)
console.log('FINAL:',newMaxBinaryHeap.heap)
newMaxBinaryHeap.remove()