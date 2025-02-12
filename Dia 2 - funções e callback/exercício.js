Exercício 2:
Vamos criar um código em que temos uma função 
que simula um processo de autenticação de usuário. Ela vai receber dois parâmetros:

nome: nome do usuário.
callback: uma função que será chamada para verificar se o nome do
 usuário corresponde a um nome pré-definido (digamos, "João").
A função de autenticação vai imprimir "Usuário autenticado!" se
 o nome corresponder, ou "Usuário não encontrado!" caso contrário.

Desafio:
Crie uma função chamada autenticar que receba dois parâmetros: nome e callback.
A função callback deve ser responsável por verificar se o nome corresponde a "João".
Se o nome for "João", a função de callback deve imprimir "Usuário autenticado!",
 caso contrário, "Usuário não encontrado!".


 function autenticar(nome, callback) {
  callback(nome); // Chama a função de callback com o nome recebido
};

function verificarNome(nome) {
  if (nome === "João") {
    console.log("Usuário autenticado!");
  } else {
    console.log("Usuário não encontrado!");
  }
};