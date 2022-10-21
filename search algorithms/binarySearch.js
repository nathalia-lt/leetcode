

//Write a function called binarySearch which accepts a sorted array and a value
//and returns the index at which the value exists. Otherwise, return -1.

//Examples:
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1

function binarySearch(arr, val){
    //I need to set the pointers
    //start at the very beggining. and end in the very end of course heheh
    let start = 0
    let end = arr.length - 1
    //Math.floor em caso a array nao seja par. eu vou arredondar. nesse caso escolhi arrdondar para baixo
    let middle = Math.floor(start + end) / 2
    //Now we are going to get to the logic
    //we are going to loop
    while(arr[middle] !== val && start <= end){
        // then we are going to switch our end point para um dos lados
        if (val < arr[middle]){
            end = middle -1
        }else{
            start = middle + 1
        }
        //agora o middle index vai mudar, porque estamos 'contando uma nova array' novamente
        middle = Math.floor(start + end) / 2
    }
    if (arr[middle] === elem){
        return middle 
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5],3))