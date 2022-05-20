/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let maximum = 0
    accounts.forEach(account=>{
       let sum = account.reduce((total, num)=>total + num, 0)
        maximum =  Math.max (maximum, sum)   
    })
    return maximum
 //I am given an array of arrays of integers and I need to some an individual 
    //array of integers and return the largest sum
//I am going so set a place holder maximum value to compara each sum.
 
    
    //eu vou usar reduce porque quero saber o resultado final da soma, de cada array
    //e assim comparar com a varible maximum
    //usando Math.max eu vou pick o maximum amount between them
    //nao esquecer de colocar maximum varible again assim vai replace de initial
    //result 0

};


//I go through inside the arrays, and some up each array to find out each one 
//is the highest amount.

