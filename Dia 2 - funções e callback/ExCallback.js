const fs = require('fs'); // Importa o módulo 'fs' para manipulação de arquivos

// Função assíncrona para ler um arquivo
fs.readFile('exemplo.txt', 'utf8', (err, data) => { // 'readFile' lê o arquivo 'exemplo.txt' com codificação 'utf8'
  
  if (err) { // Verifica se ocorreu um erro durante a leitura
    console.log('Erro ao ler o arquivo:', err); // Exibe o erro, caso haja
    return; // Sai da função em caso de erro
  }
  
  console.log('Conteúdo do arquivo:', data); // Se não houver erro, exibe o conteúdo do arquivo
});
