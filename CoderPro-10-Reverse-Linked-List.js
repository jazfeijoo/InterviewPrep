class Node {
    constructor(val){
        this.val = this.val
        this.next = null
    }

}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0 
    }

    push(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail 
            this.tail = newNode
        } 
        this.length++
        // console.log('LENGH AFTER PUSH:',this.length)
        return this
    }

    reverse(){
        let node = this.head
        let prev = null
        let next 
        this.head = this.tail
        this.tail = node 

        for(let i=0; i<this.length-1; i++){
            next = node.next 
            node.next = prev 
            prev = node 
        }
        console.log(this)
        return this
    }
}

let list = new SinglyLinkedList()
list.push('HI!')
list.push('JAZ')
list.push('MIN')
list.push('FEIJOO')
list.push('LAST')
console.log('LIST:',list)

