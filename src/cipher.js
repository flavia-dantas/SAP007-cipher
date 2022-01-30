// cipher.encode(offset, string): offset é o número de posições que queremos mover para a 
// direita no alfabeto e string é a mensagem (texto) que queremos cifrar.
// cipher.decode(offset, string): offset é o número de posições que queremos mover para a 
// esquerda no alfabeto e string é a mensagem (texto) que queremos decifrar.

//(codigoDaletraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra

const tamDoAlfabeto = 26
const codigoASC = 65


const cipher = {

  encode: function (offset, mensagem){
   
    let resultadoCodificar = "";
    for (let i = 0; i < mensagem.length; i++){
    let letrasCifrada = mensagem.charCodeAt(i);
    let codificando = ((letrasCifrada - codigoASC + offset) % tamDoAlfabeto) + codigoASC;
    resultadoCodificar += String.fromCharCode(codificando);
    
   }
    return resultadoCodificar;
   
  },
  
  decode: function (offset, mensagem){
    let resultadoDescodificar ="";
    for (let i = 0; i < mensagem.length; i++){
    let letrasDecifrada = mensagem.charCodeAt(i);
    let decodificando = ((letrasDecifrada + codigoASC - offset) % tamDoAlfabeto) + codigoASC;
    resultadoDescodificar += String.fromCharCode(decodificando);
    }
    return resultadoDescodificar; 
  } 

};
export default cipher;