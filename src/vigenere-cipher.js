const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Invalid input');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedText = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (char >= 'A' && char <= 'Z') {
        encryptedText += String.fromCharCode((char.charCodeAt(0) + key.charCodeAt(j % key.length) - 130) % 26 + 65);
        j++;
      } else {
        encryptedText += char;
      }
    }

    return this.isDirect ? encryptedText : encryptedText.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Invalid input');

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedText = '';
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      if (char >= 'A' && char <= 'Z') {
        decryptedText += String.fromCharCode((char.charCodeAt(0) - key.charCodeAt(j % key.length) + 26) % 26 + 65);
        j++;
      } else {
        decryptedText += char;
      }
    }

    return this.isDirect ? decryptedText : decryptedText.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
