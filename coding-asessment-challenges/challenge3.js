console.log("Challenge 3");


function sortWords(str){
    // get input string

    const numbersStrings = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const words = str.split(" ");

    const newIndexArr = words.map((word, index) => {
        const [newIndexes] = [...word].filter(letter => numbersStrings.includes(letter))
  
        return newIndexes;
    })


    const wordsSorted = words.map((word, index) => {
        targetIndex = Number(newIndexArr[index]-1);
        return words[targetIndex];      
    });

    console.log(wordsSorted);

    const rejoinedWords = wordsSorted.join(" ")
    console.log(rejoinedWords);

    

    // join to string
}





sortWords("is2 Thi1s T4est 3a");


