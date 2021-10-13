//PROBLEM 3: Add 2 numbers (provided as linked lists) as a linked list 

//Ex: 342 + 465 = 807 
//Input: 2 -> 4 ->3 , 5 -> 6 -> 4, 
//Output: 7 -> 0 -> 8

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

const list1 = new Node(2)
list1.next = new Node(4)
list1.next.next = new Node(3)

const list2 = new Node(5)
list2.next = new Node(6)
list2.next.next = new Node(4)

function Add2Numbers(num1, num2){
    const array = []
    let carry = 0
    let result = new Node(0)
    let currentNode = result
    while(num1 !== null || num2 !== null){
        let v1 = 0
        let v2 = 0
        if (num1 !== null) v1 = num1.value
        if (num2 !== null) v2 = num2.value
        let sum = v1 + v2 + carry
        carry = Math.floor(sum/10)
        sum = sum % 10
        currentNode.next = new Node(sum)
        //set up for next loop/iteration:
        currentNode  = currentNode.next 
        if (num1 !== null) num1 = num1.next
        if (num2 !== null) num2 = num2.next

    }
    console.log('ARRAY OF SUMS WITH CARRY:',result.next )
    return result.next 
}

Add2Numbers(list1, list2)