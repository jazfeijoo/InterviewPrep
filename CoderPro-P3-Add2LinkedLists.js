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
    let carry = 0
    let result = new Node(0) //initialize result aka linked.list.3 
    let currentNode = result //initialize current pointer for linked.list.3 in order to build it...
    while(num1 !== null || num2 !== null){ //while either of them is NOT null, keep going!
        let v1 = 0 //initialize value of list 1
        let v2 = 0 //initialize value of list 2
        if (num1 !== null) v1 = num1.value  //if list 1 not null, then v1 = list 1 value
        if (num2 !== null) v2 = num2.value //if list 2 not null, then v2 = list 1 value
        let sum = v1 + v2 + carry 
        carry = Math.floor(sum/10) //7/10 -> 0.7 -> 0 (to get carry only)
        sum = sum % 10 //ex: 7 % 10 -> 0.7 -> 7 (to get sum w/o carry)
        currentNode.next = new Node(sum)
        //set up for next loop/iteration:
        currentNode  = currentNode.next 
        if (num1 !== null) num1 = num1.next
        if (num2 !== null) num2 = num2.next

    }
  //  console.log('ARRAY OF SUMS WITH CARRY:',result.next )
    return result.next 
}

Add2Numbers(list1, list2)