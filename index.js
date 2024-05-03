const StringManipulator = require('./src/utils/utils');
const ExtratorDeInformacao = require('./src/utils/ExtratorDeInformacao');

const requestPayloadRecive = 'requestPayloadRecive';

const json = require('./src/fileJSON/testJSON.json');

const messageJSON = new ExtratorDeInformacao(json);

// Todas as mensagens
const messages = messageJSON.extrairMensagens();
const manipulator = new StringManipulator(messages);

// Mensagens com payloadRecive

const requesPayloadMessage = messageJSON.extrairMensagensIncludesString('requestPayloadRecive');
const payloadManipulator = new StringManipulator(requesPayloadMessage);

// Chama a função limitLineLength
const result = manipulator.limitLineLength(75);
console.log(result.join('\n'));
console.log('************************************************************************************');

const payloadResult = payloadManipulator.limitLineLength(75);
console.log(payloadResult.join('\n'))
console.log('************************************************************************************');

// Chama a função writeToFile para escrever o resultado em um arquivo
manipulator.writeToFile('resultado.txt');
payloadManipulator.writeToFile('Payload-resultado.txt');

var list = []
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
executarRequest(3); // Por exemplo, 5 tentativas