//DOUBLY LINKED LIST:

class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0;

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
        console.log('LENGH AFTER PUSH:',this.length)
        return this
    }

    pop(){
        if (this.length === 0){
            return null
        } else {
            if (this.length === 1){
                this.head = null
                this.tail = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            this.length--
            console.log(this)
            return this
        }
    }
    //remove 1 from beginning of list (aka head)
    shift(){
        if (this.length <= 0){
            return null;
        } else {
            if (this.length === 1){
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            this.length --
            console.log('AFTER SHIFT:',this)
            return this
        }

    }
    unshift(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.head = newNode
            this.tail = newNode
        } 
        else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode 
            if (this.length === 1){
                this.tail = newNode.next
            }
        } 
        this.length++
        console.log('AFTER UNSHIFT', this)
        return this
    }

    get(index){
        if (index < 0 || index > this.length){
            return null
        } else if (index === 0){
            console.log(this.head)
            return this.head
        } else if (index === this.length -1){
            console.log(this.tail)
            return this.tail
        } else {
            //we iterate!
            let node = this.head
            for (let i=0; i< this.length ; i++){
                if (index === i){
                    console.log(node)
                    return node
                }
                node  = node.next
            }
        }
    }

    set(index, newVal){
        if (index < 0 || index > this.length){
            return null
        } else if (index === 0){
            this.head.val = newVal
            console.log(this.head)
        } else if (index === this.length -1){
            this.tail.val = newVal            
            console.log(this.tail)
        } else {
            //we iterate!
            let node = this.head
            for (let i=0; i< this.length ; i++){
                if (index === i){
                    node.val = newVal
                    console.log(node)
                    return node
                }
                node  = node.next
            }
        }
    }

    remove(index){
        if (index < 0 || index > this.length){
            return null
        } else {
            if (index === 0){
                return this.shift()
            }
            else if (index === this.length -1){
                return this.pop()
            } else {
                let node = this.head
                for(let i=0; i < this.length; i++)
                if (index === i){
                    let curr = this.get(index)
                    let prev = curr.prev
                    prev.next = curr.next 
                    curr.next.prev = prev
                }
                node = node.next
            }
            this.length--
            // console.log('REMOVED VAL:', this)
            return this 
        }
    }
    reverse(){
        if (this.length <= 1){
            return this
        } else {
            let curr = this.head
            let prev = null
            let next 
            this.head = this.tail
            this.tail = curr
            for (let i = 0; i< this.length-1; i++){
                next = curr.next
                curr.next = prev
                prev = curr 
            
            }
        }
        return this
    }
} // end of LINKED LIST CLASS

let list = new SinglyLinkedList()
list.push('HELLO!')
 list.push('JAZ')
list.push('MIN')
list.push('FEIJOO')
list.push('LAST')
// list.reverse()
// list.get(0)
// list.get(2)
// list.get(4)
// list.pop()
// list.shift() 
// list.unshift('NEW HELLO')
//list.set(0, 'NEW HELLO!!!')
// list.set(2, 'NEW MIN!!!')
// list.remove(1)