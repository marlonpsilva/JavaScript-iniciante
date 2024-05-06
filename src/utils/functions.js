//functions
function limitLineLength(inputString) {
    // Divide a string em linhas usando o caractere de quebra
    const caracteresQuebra = '\n';
    const linhas = inputString.split(caracteresQuebra)
        .slice(0, -1)
        .map((linha, indice) => indice === 0 ? linha : linha.substring(1));
    return linhas;
}

function extrairMensagens(json) {
    try {
        const objeto = json;
        const mensagens = [];
        const extrairMensagensRecursivamente = (obj) => {
            for (const chave in obj) {
                if (typeof obj[chave] === 'object') {
                    extrairMensagensRecursivamente(obj[chave]);
                } else if (chave === 'message') {
                    mensagens.push(obj[chave] + '\n');
                }
            }
        };

        extrairMensagensRecursivamente(objeto);

        // Concatenando todas as mensagens em uma única string
        const todasAsMensagens = mensagens.join(' ');

        return todasAsMensagens;
    } catch (error) {
        console.error("Erro ao analisar o JSON:", error);
        return '';
    }
}

function extrairMensagensIncludesString(json, stringEspecifica) {
    try {
        const objeto = json;
        const mensagens = [];
        const extrairMensagensRecursivamente = (obj) => {
            for (const chave in obj) {
                if (typeof obj[chave] === 'object') {
                    extrairMensagensRecursivamente(obj[chave]);
                } else if (chave === 'message' && obj[chave].includes(stringEspecifica)) {
                    mensagens.push(obj[chave] + '\n');
                }
            }
        };

        extrairMensagensRecursivamente(objeto);

        return mensagens.join(' ');
    } catch (error) {
        console.error("Erro ao analisar o JSON:", error);
        return '';
    }
}

function writeToFile(fileName, lines) {
    const fs = require('fs');
    fs.writeFileSync(fileName, lines.join('\n'));
    console.log(`Resultado foi escrito em ${fileName}`);
}

module.exports = {
    limitLineLength,
    extrairMensagens,
    extrairMensagensIncludesString,
    writeToFile
};