const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Pega hash do último commit COM tratamento de erro
function getCommitHash() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return "????????"; // Fallback se não houver commit
  }
}

// Configurações
const DIARIO_HEADER = `## 📅 Diário de Bordo\n\n`;
const DIA = 2;
const commitHash = getCommitHash();
const CONTEUDO = `✅ **Dia ${DIA}:** Primeiro código em Node.js!\n🔗 [Commit](https://github.com/Souzark/dev-journey-2025/commit/${commitHash})\n\n`;

// Caminho do README
const readmePath = path.join(__dirname, 'README.md');

// Verifica/Cria README
if (!fs.existsSync(readmePath)) {
  fs.writeFileSync(readmePath, DIARIO_HEADER);
}

// Atualiza conteúdo
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Garante que só tem 1 cabeçalho
if (!readmeContent.includes(DIARIO_HEADER)) {
  readmeContent = DIARIO_HEADER + readmeContent;
}

// Adiciona novo conteúdo APÓS o cabeçalho
readmeContent = readmeContent.replace(
  DIARIO_HEADER, 
  DIARIO_HEADER + CONTEUDO
);

fs.writeFileSync(readmePath, readmeContent);
console.log('README atualizado com sucesso! 🌟');