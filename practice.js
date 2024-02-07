// const input = require("readline-sync");

// function initialPrompt() {
//     console.log("Let's play some scrabble!\n");
//     word = input.question("Enter a word to score: ");
//     // console.log(oldScrabbleScorer(word))
//     return word;
//  };

//  const vowelScorerStructure = {
//     1: [ 'L', 'N', 'R', 'S', 'T','D', 'G','B', 'C', 'M', 'P','F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z'],
//     3: ['A', 'E', 'I', 'O', 'U',]
//  };
 
//  function vowelBonusScorer(word){
//  word = word.toUpperCase();
     
//   let wordPoints = 0;
 
//      for (let i = 0; i < word.length; i++) {
  
//        for (const pointValue in vowelScorerStructure) {
  
//           if (vowelScorerStructure[pointValue].includes(word[i])) {
//           wordPoints = wordPoints + Number(pointValue);
//           }
  
//        }
//      }
//      return wordPoints;
//   }
//   console.log (vowelBonusScorer("lllll"))

// let simpleScorer = function (word) {
//    return word.length;
// };
// console.log(simpleScorer("aaksh"))

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
 };
 
//  const newPointStructure = {};
 
 function transform(oldPointStructure) {
   for (const score in oldPointStructure) {
     for (const letter of oldPointStructure[score]) {
       newPointStructure[letter.toLowerCase()] = Number(score);
     }
   }
   return newPointStructure;
 }
  const newPointStructure = {};
 console.log(transform(oldPointStructure))

// const scoringAlgorithms = [
//    {
//       name:'Simple Scorer',
//       description: 'Each letter is worth 1 point.',
//       scoreFunction: 'simpleScorer'
   
//    },
//    {
//       name:"Vowel Scorer",
//       description: "Vowels are 3 pts, consonants are 1 pt.",
//       scoreFunction: 'vowelBonusScorer'
      
//    },
//    {
//       name: 'Scrabble Scorer',
//       description: 'The traditional scoring algorithm.',
//       scorerFunction: "scrabbleScorer"
//    }
//    ];

//    console.log(scoringAlgorithms[1].name)

function scorer (word){
   word = word.toLowerCase()
   let  wordPoint = 0;
   for (let i =0; i < word.length; i++){
         wordPoint += Number(newPointStructure[word[i]]);
}
return wordPoint;
};
console.log(scorer("aakash"))