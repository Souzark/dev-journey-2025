const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Qual sua cor favorita? ", (resposta) => {
  console.log(`Sua cor favorita é, ${resposta}!`);
 rl.close(); 
