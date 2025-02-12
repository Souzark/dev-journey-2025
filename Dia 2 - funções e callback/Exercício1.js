// Importa o módulo readline para permitir interação com o terminal
const readline = require('readline');

// Cria uma interface de leitura e escrita no terminal
const rl = readline.createInterface({
  input: process.stdin,  // Entrada: o teclado
  output: process.stdout // Saída: o terminal
});

// Imprime uma mensagem para confirmar que a interface foi criada
console.log("Interface criada com sucesso!");

// Fecha a interface após a mensagem (para encerrar o programa)
rl.close();
