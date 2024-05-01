class ExtratorDeInformacao {
  constructor(json) {
    this.json = json;
  }

  extrairMensagens() {
    try {
      //const objeto = JSON.parse(this.json);
      const objeto = this.json;
      const mensagens = [];

      // Função recursiva para percorrer o objeto e extrair mensagens
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

  extrairMensagensIncludesString(stringEspecifica) {
    try {
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

      extrairMensagensRecursivamente(this.json);

      return mensagens.join(' ');
    } catch (error) {
      console.error("Erro ao analisar o JSON:", error);
      return '';
    }
  }
}

module.exports = ExtratorDeInformacao;