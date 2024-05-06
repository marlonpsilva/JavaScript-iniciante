const utils = require('./utils/functions');

const requestPayloadRecive = 'requestPayloadRecive';

const json = require('./fileJSON/testJSON.json');

/*var list = []
setTimeout(function () {
    list = ['Maçã', 'Banana', 'Laranja', 'Morango', 'Uva', 'Abacaxi', 'Melancia'];
}, 2000)

async function executarRequest(maxTentativas) {
    let response;
    let tentativas = 0;
    while (tentativas < maxTentativas) {

        if (list.length > 0) {
            // Se a lista não estiver vazia, saia do loop
            break;
        }
        // Aguarde um tempo antes de fazer a próxima tentativa
        await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo (1000 ms)
        console.log('Tentativas: ' + tentativas)
        tentativas++;
    }

    if (tentativas === maxTentativas) {
        console.log(`Número máximo de tentativas (${maxTentativas}) atingido. Lista ainda está vazia.`);
    } else {
        console.log('Lista não vazia recebida:');
        console.log(list)
    }
}

// Chame a função para iniciar o processo, passando o número máximo de tentativas desejado
console.log('************************************************************************************');
executarRequest(3); // Por exemplo, 5 tentativas */

const messagesByFunctions = utils.extrairMensagens(json);
const messagesByFunctions2 = utils.extrairMensagensIncludesString(json, requestPayloadRecive)
const textByFunctions = utils.limitLineLength(messagesByFunctions);
const textByFunctions2 = utils.limitLineLength(messagesByFunctions2);
//console.log(messagesByFunctions);
console.log('************************************************************************************');
console.log(textByFunctions.join('\n'));
utils.writeToFile('textByFunctions.txt', textByFunctions);
console.log('************************************************************************************');
console.log(textByFunctions2.join('\n'));
utils.writeToFile('textByFunctions2.txt', textByFunctions2);
