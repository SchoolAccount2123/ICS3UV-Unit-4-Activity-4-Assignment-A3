// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2025-12-15


//---
//function for word existing 
//---

function wordExists(sentence: string, word: string): boolean {
  return sentence.toLocaleLowerCase().includes(word.toLocaleLowerCase());
}


//---
//Main Program
//---

function wordSearchProgram(): void {
  const sentence: string = prompt("Please enter a sentence.")!;
  const searchWord: string = prompt(
    "Please enter a word to search for in your sentence."
  )!;

  const found: boolean = wordExists(sentence, searchWord);

  if (found) {
    console.log(
      `Hooray, the word ${searchWord} was found in the sentence: ${sentence}`
    );
  } else {
    console.log(
      `Sorry, the word ${searchWord} was not found in the sentence: ${sentence}`
    );
  }
}

// Run the program
wordSearchProgram();