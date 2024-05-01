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
console.log(payloadResult.join('\n'));
console.log('************************************************************************************');

// Chama a função writeToFile para escrever o resultado em um arquivo
manipulator.writeToFile('resultado.txt');
payloadManipulator.writeToFile('Payload-resultado.txt');