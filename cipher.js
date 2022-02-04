const cipher = {

  encode: function (offset, mensagem) {
    if (offset == null || offset == "" || mensagem == null || mensagem == "") { //throw lança uma exceção definida pelo usuário
      throw new TypeError("Verificar o offset ou a mensagem"); // TypeError é lançado quando um parâmetro de uma função não é do tipo desejado
    }
    let resultadoCodificar = "";
    for (let i = 0; i < mensagem.length; i++) {
      let codDaLetraASC = mensagem.charCodeAt(i);
      if (codDaLetraASC >= 65 && codDaLetraASC <= 90) { // Letras Maiusculas
        let letraCodificada = ((codDaLetraASC - 65 + offset) % 26) + 65;
        resultadoCodificar += String.fromCharCode(letraCodificada);
      } else if (codDaLetraASC >= 97 && codDaLetraASC <= 122) { // Letras Minusculas
        let letraCodificada = ((codDaLetraASC - 97 + offset) % 26) + 97;
        resultadoCodificar += String.fromCharCode(letraCodificada);

      } else if (codDaLetraASC >= 32 && codDaLetraASC <= 47) { // caractéres
        resultadoCodificar += String.fromCharCode(codDaLetraASC);
      } else if (codDaLetraASC >= 58 && codDaLetraASC <= 64) { // caractéres
        resultadoCodificar += String.fromCharCode(codDaLetraASC);
      } else if(codDaLetraASC >= 123 && codDaLetraASC <=254){
        resultadoCodificar += String.fromCharCode(codDaLetraASC);
      }

    }
    return resultadoCodificar;

  },

  decode: function (offset, mensagem) {
    if (offset == null || offset == "" || mensagem == null || mensagem == "") { //throw lança uma exceção definida pelo usuário
      throw new TypeError("Verificar o offset ou a mensagem"); // TypeError é lançado quando um parâmetro de uma função não é do tipo desejado
    }
    let resultadoDescodificar = "";
    for (let i = 0; i < mensagem.length; i++) {
      let codDaLetraASC = mensagem.charCodeAt(i);
      if (codDaLetraASC >= 65 && codDaLetraASC <= 90) { // Letras Maiusculas
        let letraDescodificada = ((codDaLetraASC - 90 - offset) % 26) + 90;
        resultadoDescodificar += String.fromCharCode(letraDescodificada);
      } else if (codDaLetraASC >= 97 && codDaLetraASC <= 122) { // Letras Minusculas
        let letraDescodificada = ((codDaLetraASC - 122 - offset) % 26) + 122;
        resultadoDescodificar += String.fromCharCode(letraDescodificada);

      } else if (codDaLetraASC >= 32 && codDaLetraASC <= 47) { // caractéres
        resultadoDescodificar += String.fromCharCode(codDaLetraASC);
      } else if(codDaLetraASC >= 58 && codDaLetraASC <= 64) { // caractéres
        resultadoDescodificar += String.fromCharCode(codDaLetraASC);
      } else if(codDaLetraASC >= 123 && codDaLetraASC <=254){
        resultadoDescodificar += String.fromCharCode(codDaLetraASC);
      }

    }
    return resultadoDescodificar;
  }

}
export default cipher;

// cipher.encode(offset, string): offset é o número de posições que queremos mover para a
// direita no alfabeto e string é a mensagem (texto) que queremos cifrar.
// cipher.decode(offset, string): offset é o número de posições que queremos mover para a
// esquerda no alfabeto e string é a mensagem (texto) que queremos decifrar.
// codigoDaletraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra