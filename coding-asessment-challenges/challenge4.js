'use strict'

console.log("Challenge 4");

const alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",  "t", "u", "v", "w", "x", "y", "z"
];

const exampleArr1 = ['a','b','c','d','f'];

const exampleArr2 = ['O','Q','R','S'];


function findMissingLetter(arrOfLetters) {
    const alphabetCopy = arrOfLetters[0] === arrOfLetters[0].toUpperCase() ? alphabet.map(letter => letter.toUpperCase()) : alphabet;
    
    console.log('alphabetCopy: ', alphabetCopy);

    const firstMatchingLetterIndex = alphabetCopy.indexOf(arrOfLetters[0]); 
    const lastMatchingLetterIndex= alphabetCopy.indexOf(arrOfLetters[arrOfLetters.length -1]) +1 ;
    
    const alphabetMatchingSlice = alphabetCopy.slice(firstMatchingLetterIndex, lastMatchingLetterIndex);


    console.log(alphabetMatchingSlice);
    
    const alphabetSliceSet = new Set(alphabetMatchingSlice);
    const exampleSet = new Set(arrOfLetters);
     
    console.log("Alphabet Set:", alphabetSliceSet);
    console.log("Example Set:", exampleSet);    
    
    const [missingLetter] = alphabetSliceSet.difference(exampleSet);

    console.log(typeof(missingLetter));
    console.log(missingLetter);
    return missingLetter;
    }

    


findMissingLetter(exampleArr1);

console.log("run 2");
console.log("---------------------------------------------------");

findMissingLetter(exampleArr2);
