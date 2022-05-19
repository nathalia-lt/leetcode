/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let reverseInput = input.split('').reverse().join('')
    if(input == reverseInput){
        return true}
      else  {
          return false}
      console.log(input)
    console.log(reverseInput)
  };
  
  // s.replace serve para eu repor/modificar alguma coisa no meu code,
  //o que esta entre parenteses em vermelho e tipo um codigo universal para 'deletar' tudo que
  // nao e alfabetico, e depois da virgula tu coloca o que voce quer colocar instead/substituir.
  
  //you can not reverse strings, just arrays. Para isso eu preciso tornar a strings into an array
  //split does it. turns string into arrays.
  //depois eu tenho que juntar os elementos da array
  

  // 1 == '1' -> returns true
// 1 === '1' -> returns false
// == converts both sides of the comparison to be the same type
// === requires both sides of the comparison to be the same type in order to be true


  