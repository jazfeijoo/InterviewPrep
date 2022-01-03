// You've created a mealplan for the next few days. You can only visit 1-2 shops each day. Each day the shop restarts quant amount to original amount...
// Given the following information, please find the min cost you'll need to spend on each meal...
// Params: 
// cntProduct = total num of products you'll be using for EACH meal 
// quant = rectangular matrix of ints where quant[i][j] represents the amount of product j in store i
// coats = rectangular matrix of ints where cost[i][j] represents the cost of product j in store i 
// meals = rectangular matrix of of ints where meals[i][j] is the amount of product[j] needed for meal[i]

//EXAMPLE: cntProd = 2 , quant = [[1,3], [2,1], [1,3]] , cost = [[2,4], [5,2], [4,1]] , meals = = [[1,1], [2,2], [3,4]] 
// solution(2, quant, cost, meals) => OUTPUT: [3,8,9]

function minCostMeals(cntProd, quant, cost, meals){

    let final = []
    for (let i=0; i < meals.length; i++){
        let meal = meals[i]
        let itemMealCost = []
        for (let i=0; i<meal.length; i++){
            let item = meal[i]
            

        }

    }
    console.log(final)
    return final 

}

// minCostMeals(2, [[1,3], [2,1], [1,3]], [[2,4], [5,2], [4,1]],[[1,1], [2,2], [3,4]])

function allCombinations (items) {
     
      let results = [];
      for (let slots = items.length; slots > 0; slots--) {
        for (let loop = 0; loop < items.length - slots + 1; loop++) {
          let key = results.length;
          results[key] = [];
          for (let i = loop; i < loop + slots; i++) {
            results[key].push(items[i]);
          }
        }
      }
      return results;
}
let storesCombo = [[1,3], [2,1], [1,3]]
let fruits = ["Apple", "Banana", "Coconut"]
let combo = allCombinations(fruits)
console.table(combo);
    