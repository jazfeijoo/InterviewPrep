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
console.log(HashTable1.search('Nicole'))