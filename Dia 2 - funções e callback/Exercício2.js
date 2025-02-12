const readline = require('readline');

// Cria a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Faz uma pergunta ao usuário
rl.question("Qual seu nome? ", (resposta) => {
  // Esse callback é executado após o usuário responder
  console.log(`Olá, ${resposta}!`);
  // Fecha a interface para encerrar o programa
  rl.close(); //fecha programa
});
