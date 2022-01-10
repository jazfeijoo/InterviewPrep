const hash = (key, size) => {
    let hashedKey = 0
    for (let i=0; i < key.length; i++){
        hashedKey = key.charCodeAt(i)
    }
    return hashedKey % size 
}

class HashTable {
    constructor(){
        this.size = 20
        this.buckets = Array(this.size)

        for (let i=0; i < this.buckets.length; i++){
            this.buckets[i] = new Map()
        }
    }

    insert(key,value){
        //hash the key:
        let idx = hash(key,this.size)
        //set is a method on the maps data structure
        this.buckets[idx].set(key, value)
    }
    remove(key){
        let idx = hash(key,this.size)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)
        return deleted
    }

    search(key){
        let idx = hash(key, this.size)
        return this.buckets[idx].get(key)
    }
}

const HashTable1 = new HashTable

HashTable1.insert('Jazmin', 'Feijoo')
HashTable1.insert('Nicole', 'Feijoo')
HashTable1.insert('Norma', 'Viteri')

// console.log(HashTable1)
// console.log(HashTable1.search('Nicole'))

//EXAMPLE OF ANOTHER HASHING FUNCTION: 

function hashThis(key){
    let hash = 0 
    for(let i=0; i< key.length; i++){
        let char = key.charCodeAt(i) //numerical character code for each letter... 
        hash = (hash << 5) - hash + char // 5 shosen as random num... 
        hash |= 0 //if hash is too long of a num (near infinity), then just return zero
    }
    return hash
}

console.log(hashThis('test'))
console.log(hashThis('tesT')) // hashThis function is case sensitive!!
console.log(hashThis('estt'))
console.log(hashThis('test'))

//LEFT SHIFT OPERATOR: (shifting bits...)
// console.log(5 << 1) // 5 + 5 = 10
// console.log(5 << 2) // 10 + 10 = 20
// console.log(5 << 3) // 20 + 20 = 40
// console.log(5 << 4) // 40 + 40 = 80
// console.log(5 << 5) // 80 + 80 = 160

// console.log(6 << 1) // 6 + 6 = 12
// console.log(6 << 2) // 12 + 12 = 24
// console.log(6 << 3) // 24 + 24 = 48
// console.log(6 << 4) // 48 + 48 = 96