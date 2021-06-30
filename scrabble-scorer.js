// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!\n");
   let wordToScore = input.question('Enter a word to score: ');
   return wordToScore;
   //console.log(oldScrabbleScorer(wordToScore));
};

//let simpleScore;
//let vowelBonusScore;
//let scrabbleScore;


function simpleScore(word){
   let score = word.length;
   return score;
} ;


function vowelBonusScore(word){
  	word = word.toUpperCase();
    let score =0;
    for(let i=0; i<word.length; i++){
       if (word[i] == "A"|| word[i] == "E"|| word[i] == "I"|| word[i] == "O"|| word[i] == "U"){
         score += 3;
       }else {
         score += 1;
       }
    }
   return score; 
}

const scoringAlgorithms = [
  {Name: "Simple Score",		
  Description: "Each letter is worth 1 point",
  scoreFunction: simpleScore},
  {Name: "Bonus Vowels",		
  Description: "Vowels are 3 pts, consonants are 1 pt",
  scoreFunction: vowelBonusScore},
  {Name: "Scrabble",		
  Description: "The traditional scoring algorithm",
  scoreFunction: scrabbleScore}
];

function scorerPrompt(word) {
    let scoringAlgorithm = input.question('Which scoring algorithm  would you like to use?\n\n 0 - Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\n Enter 0, 1, or 2: ');

  //   while (scoringAlgorithm != 0 && scoringAlgorithm != 1 && scoringAlgorithm != 2){
  //    scoringAlgorithm = input.question('invalid input! please enter 0, 1, or 2:')
  //  }
    console.log("algorithm name: ", scoringAlgorithms[scoringAlgorithm].Name);
    console.log("Score for " + "'" + word + "'"+ ":" + scoringAlgorithms[scoringAlgorithm].scoreFunction(word));
 
}

function transform(oldPointStructure) {
  let newPoints={};
  let j=0;
 	for (const property in oldPointStructure){
      for (let i=0; i<oldPointStructure[property].length; i++){
         newPoints[oldPointStructure[property][i]]= property;
        }
    }
 return newPoints;
};


let newPointStructure = transform(oldPointStructure);
//newPointStructure[" "]= '0';
//console.log(newPointStructure)

function scrabbleScore(word){
   let score =0;
   word = word.toUpperCase();
   for(let i=0; i<word.length; i++){  
       score += Number(newPointStructure[word[i]]);
   }
   return score;
}


function runProgram() {
  
   scorerPrompt(initialPrompt());
   
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

