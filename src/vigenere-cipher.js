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
  reverse = true;
  constructor(reverse) {
    this.reverse = reverse;
  }
  
  
  encrypt() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');  
  let messCode = '';
  let keyCode = []; 
  let message = arguments[0];
  let key = arguments[1];
  if (message == undefined || key == undefined) throw new Error('Incorrect arguments!');
  for (let i = 0;i < key.length; i++){
    keyCode.push(alphabet.indexOf(key[i].toUpperCase()));    
  }
  let keyLength = keyCode.length;
  let keyCount = 0;
  
  for (let i = 0;i < message.length; i++){    
    let a = alphabet.indexOf(message[i].toUpperCase());
    let k = (keyCount < keyLength) ? keyCode[keyCount] :  keyCode[keyCount % keyLength] ;
    let sum = (a + k) < alphabet.length ? a+k :  (a + k) % alphabet.length;    
    messCode = messCode + ((a === -1 ) ? message[i] : alphabet[sum]);
    if(a !== -1) keyCount++;
  }
  return (!this.reverse) ? messCode : messCode.split("").reverse().join("") ;
  }
  decrypt() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');  
    let messCode = '';
    let keyCode = []; 
    let message = arguments[0];
    let key = arguments[1];
    if (message == undefined || key == undefined) throw new Error('Incorrect arguments!');
     for (let i = 0;i < key.length; i++){
      keyCode.push(alphabet.indexOf(key[i].toUpperCase()));    
    }
    let keyLength = keyCode.length;
    let keyCount = 0;
  
    for (let i = 0;i < message.length; i++){    
      let a = alphabet.indexOf(message[i].toUpperCase());
      let k = (keyCount < keyLength) ? keyCode[keyCount] :  keyCode[keyCount % keyLength] ;
      let sum = (a - k) < 0 ? alphabet.length + (a-k) :  a - k;    
      messCode = messCode + ((a === -1 ) ? message[i] : alphabet[sum]);
      if(a !== -1) keyCount++;
    }
    return (!this.reverse) ? messCode : messCode.split("").reverse().join("") ;
  }
  
}

module.exports = {
  VigenereCipheringMachine
};
