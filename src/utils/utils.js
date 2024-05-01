class StringManipulator {
    constructor(inputString) {
        this.inputString = inputString;
    }

    limitLineLength() {
        // Divide a string em linhas usando o caractere de quebra
        const caracteresQuebra = '\n';
        const linhas = this.inputString.split(caracteresQuebra)
            .slice(0, -1)
            .map((linha, indice) => indice === 0 ? linha : linha.substring(1));
        return linhas;
    }

    writeToFile(fileName) {
        const lines = this.limitLineLength();
        const fs = require('fs');
        fs.writeFileSync(fileName, lines.join('\n'));
        console.log(`Resultado foi escrito em ${fileName}`);
    }
}

module.exports = StringManipulator;