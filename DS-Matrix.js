// DATA STRUCTURE: MATRIX --> 2-Dimenstional Arrays 

// 1. Flipping an Image
// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.
// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
// For example, inverting [0,1,1] results in [1,0,0].
//Input: image = [[1,1,0],[1,0,1],[0,0,0]] , Output: [[1,0,0],[0,1,0],[1,1,1]]
// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]], Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

function flipImage(arr){
    let final = []
    arr.forEach((sub) => {
        let invert = []
        sub.forEach((num) => {
            num === 0 ? invert.push(1) : invert.push(0)
        })
       // console.log('INV: ',invert)
        final.push(invert.reverse())
    })
    console.log('FIN: ',final)
}

// flipImage([[1,1,0],[1,0,1],[0,0,0]]) //EXPECTED: [[1,0,0],[0,1,0],[1,1,1]]
// flipImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]) //EXPECTED: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// 2. Number of Laser Beams in a Bank
// Anti-theft security devices are activated inside a bank. 
// You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. 
// bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.
// There is one laser beam between any two security devices if both conditions are met:
// The two devices are located on two different rows: r1 and r2, where r1 < r2.
// For each row i where r1 < i < r2, there are no security devices in the ith row.
// Laser beams are independent, i.e., one beam does not interfere nor join with another.
// Return the total number of laser beams in the bank.
// Input: bank = ["011001","000000","010100","001000"] Output: 8
// Input: bank = ["000","111","000"] Output: 0

function findLaserBeams(bank){
    let mapLasers = {}
    let final = 0
    for(let i=0; i<bank.length; i++){
        let row = bank[i].split('')
        let rowLasers = 0
        row.forEach((num) => { 
            if(num == 1){
                rowLasers ++ 
            }
        })
        if (rowLasers){
            mapLasers[i] = rowLasers
        }
    }

    let laserCount = Object.values(mapLasers)
    if (1 < laserCount.length){
        let i = 0 
        while (i < laserCount.length-1){
            let beams = laserCount[i] * laserCount[i+1]
            final += beams
            i++
        }
    } 
    console.log('FINAL: ', final)
    return final 
}

findLaserBeams(["011001","000000","010100","001000"]) //EXPECTED: 8 
findLaserBeams(["000","111","000"]) //EXPECTED: 0 