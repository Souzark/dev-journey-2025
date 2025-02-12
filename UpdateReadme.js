const fs = require('fs');  
const path = require('path');  

const { execSync } = require('child_process');  
// Pega o hash do último commit  
const commitHash = execSync('git rev-parse --short HEAD').toString().trim();  

// Configurações  
const DIARIO = `## 📅 Diário de Bordo\n\n`; // Cabeçalho  
const DIA = 2; // Mude este número a cada dia!  
const CONTEUDO = `✅ **Dia ${DIA}:** Primeiro código em Node.js!\n🔗 [Commit](https://github.com/Souzark/dev-journey-2025/commit/${commitHash})\n\n`;  

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