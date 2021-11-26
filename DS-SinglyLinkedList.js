//SINGLY LINKED LIST: data structyure made up of nodes (w/ value and next value that points to next node)

class Node {
    constructor(val){
        this.val = val
        this.next = null
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
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else if (this.head === this.tail) {
            this.head.next = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        console.log(this)
        return this
    }

    pop(){
        let current = this.head 
        while (current.next){
            if (current.next === this.tail){
                current.next = null
                this.tail = current 
                this.length --
                
            } else {
                current = current.next
            }
        }
        console.log(this)
        return this
    }
    //shift is pretty mush just removing head (1st node in list)
    shift(){
        if (this.length === 0){
            return undefined
        } else {
            let prevHead = this.head
            this.head = prevHead.next
            this.length--
            if (this.length === 0){
                this.tail = null
            }
            // console.log(prevHead, this.length)
            return prevHead

        }

    }

    unshift(val){
        let newNode = new Node(val)
        if (this.length === 0 ){ 
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
            
        }
        this.length ++
        console.log(this)
        return this

    }
    //return the node at the given index/order (nodes do not inherently have an INDEX)
    get(index){
        if (index < 0 || index > this.length){
            return null
        } else {
            let node = this.head
            for (let i = 0; i <= index; i++){
                if (i === index){
                    console.log(node)
                    return node 
                }
                node = node.next 
            }
        } 
    }

    set(index, newVal){
        if (index < 0 || index > this.length){
            return null
        } else {
            if (index === this.length){
                this.push(newVal)
            } 
            else if (index ===0){
                return this.unshift(newVal)
            } else {
                let newNode = new Node(newVal)
                let prev = this.get(index-1)
                let temp = prev.next
                newNode.next = temp
                prev.next = newNode
            }
        }
        this.length++
        return true 
    }

    remove(index){
        if (index < 0 || index > this.length){
            return null
        } else {
        //let target = get(index)
            if (index === this.length){
                this.pop()
            } 
            else if (index === 0){
                this.shift()
            } else {
                let prev = this.get(index-1)
                prev.next = this.get(index+1)
                
            }
        }
    }
    //reverse the whole list
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

} // end of LINKED LIST CLASS
let list = new SinglyLinkedList()
list.push('HI!')
list.push('JAZ')
list.push('MIN')
list.push('FEIJOO')
list.push('LAST')
// list.pop()
// list.shift()
// list.unshift('BEFORE HI')
// list.get(2)
list.reverse()