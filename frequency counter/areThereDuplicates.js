
//Frequency Counter / Multiple Pointers - areThereDuplicates
//useful, when you have multiple pieces of data, multiple inputs and you need to compare them. 
//If they consist of similar values, if they are anagrams, if the values contem inside of another value.



// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. 
//  You can solve this using the frequency counter pattern OR the multiple pointers pattern.


//Examples:
//areThereDuplicates(1, 2, 3) // false
//areThereDuplicates(1, 2, 2) // true 
//areThereDuplicates('a', 'b', 'c', 'a') // true 

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(){
    let collection = {}
    for (let val in arguments){
        //aqui eu contar quantas vezes o valor do meu index se repete, ai acrescento 1
        collection[arguments[val]] = (collection[arguments[val]] || 0 ) +1
        console.log(collection)
    }
    for (let key in collection){
        console.log(key)
        //e aqui se minha key tiver mais de 1, significa que se repete entao retorno falso. 
        //se nao for maior de 1 retorno true, pois significa que nao se repete
        if (collection[key] > 1)
            return true
        }
            return false
    }


console.log(areThereDuplicates(1,2,2))