const fs = require('fs');  
const path = require('path');  

// Configurações  
const DIARIO = `## 📅 Diário de Bordo\n\n`; // Cabeçalho  
const DIA = 2; // Mude este número a cada dia!  
const CONTEUDO = `✅ **Dia ${DIA}:** 
Funções e callbacks!\n🔗 [Commit](https://github.com/Souzark/dev-journey-2025/commit/)\n\n`;  

// Caminho do README  
const readmePath = path.join(__dirname, 'README.md');  

// Verifica se o README existe  
if (!fs.existsSync(readmePath)) {  
  fs.writeFileSync(readmePath, DIARIO); // Cria o README se não existir  
}  

// Atualiza o README  
let readmeContent = fs.readFileSync(readmePath, 'utf8');  
if (!readmeContent.includes(DIARIO)) {  
  readmeContent += DIARIO;  
}  
readmeContent = readmeContent.replace(DIARIO, DIARIO + CONTEUDO);  
fs.writeFileSync(readmePath, readmeContent);  

console.log('README atualizado com sucesso! 🌟');  