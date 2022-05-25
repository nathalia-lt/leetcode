/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let longestSentence = 0
    for(let sentence of sentences){
       let numWords = sentence.split(' ').length
       if(numWords > longestSentence){
           longestSentence = numWords
       }
    }
    return longestSentence
};

//in algorithms wherever you have to find a comparison, you need to make a place holder outside
//of the foor loop, to update it 


//input = array of strings
//output = the length of the longest sentence 

//wherever you put inside of the space in slit is what are you going to split
// go sentence by sentence -->for loop
//count the number of words on which sentence 
//interecting through the sentence and counting each word --> forEach, because I just want to count it
//return the one that has more words --> If statement