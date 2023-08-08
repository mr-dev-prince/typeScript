import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter something: ", (userInput) => {
  console.log("You entered:", userInput);
  rl.close();
});


//the readline module is to create an interface for reading from the standard input and writing to the standard output.

//The 'rl.question' function prompts the user for input, and the provided callback function handles the user's input.