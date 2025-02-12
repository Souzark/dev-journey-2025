const fs = require('fs');
const path = require('path');

// Configurações
const DIARIO = `## 📅 Diário de Bordo\n\n`;
const DIA = 2; // Atualize para o dia atual
const COMMIT_HASH = 'abc123'; // Substitua pelo hash real do commit
const CONTEUDO = `✅ **Dia ${DIA}:** Primeiro código em Node.js!\n🔗 [Commit](https://github.com/souzark/dev-journey-2025/commit/${COMMIT_HASH})\n\n`;

// Função para ler o README
function lerReadme(caminho) {
  return fs.existsSync(caminho) ? fs.readFileSync(caminho, 'utf8') : '';
}

// Função para atualizar o README
function atualizarReadme(caminho, conteudo) {
  let readmeContent = lerReadme(caminho);
  if (!readmeContent.includes(`**Dia ${DIA}:**`)) {
    if (!readmeContent.includes(DIARIO)) {
      readmeContent += DIARIO;
    }
    readmeContent = readmeContent.replace(DIARIO, DIARIO + conteudo);
    fs.writeFileSync(caminho, readmeContent);
    console.log(`✅ README atualizado com sucesso para o Dia ${DIA}!`);
  } else {
    console.log(`⚠️ O Dia ${DIA} já está registrado.`);
  }
}

// Executar atualização
const readmePath = path.join(__dirname, 'README.md');
atualizarReadme(readmePath, CONTEUDO);
