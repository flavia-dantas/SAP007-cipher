const tamanhoDoAlfabeto = 26;
const letraAmaiscula = 65;
const letraZmaiscula = 90;
const letraAminuscula = 97;
const letraZminuscula = 122;

const cipher = {

  encode: function (offset, mensagem) {
    if (offset === null || offset === "" || mensagem === null || mensagem === "") { //throw lança uma exceção definida pelo usuário
      throw new TypeError("Verificar o offset ou a mensagem"); // TypeError é lançado quando um parâmetro de uma função não é do tipo desejado
    }
    let resultadoCodificar = "";
    for (let i = 0; i < mensagem.length; i++) {
      let codDaLetraASC = mensagem.charCodeAt(i);
      if (codDaLetraASC >= letraAmaiscula && codDaLetraASC <= letraZmaiscula) {
        let letraCodificada = ((codDaLetraASC - letraAmaiscula + offset) % tamanhoDoAlfabeto) + letraAmaiscula;
        resultadoCodificar += String.fromCharCode(letraCodificada);
      } else if (codDaLetraASC >= letraAminuscula && codDaLetraASC <= letraZminuscula) { 
        let letraCodificada = ((codDaLetraASC - letraAminuscula + offset) % tamanhoDoAlfabeto) + letraAminuscula;
        resultadoCodificar += String.fromCharCode(letraCodificada);

      } else {
        resultadoCodificar += String.fromCharCode(codDaLetraASC); 
      }
    }
    return resultadoCodificar;

  },

  decode: function (offset, mensagem) {
    if (offset === null || offset === "" || mensagem === null || mensagem === "") { 
      throw new TypeError("Verificar o offset ou a mensagem"); 
    }
    let resultadoDescodificar = "";
    for (let i = 0; i < mensagem.length; i++) {
      let codDaLetraASC = mensagem.charCodeAt(i);
      if (codDaLetraASC >= letraAmaiscula && codDaLetraASC <= letraZmaiscula) {
        let letraDescodificada = ((codDaLetraASC - letraZmaiscula - offset) % tamanhoDoAlfabeto) + letraZmaiscula;
        resultadoDescodificar += String.fromCharCode(letraDescodificada);
      } else if (codDaLetraASC >= letraAminuscula && codDaLetraASC <= letraZminuscula) {
        let letraDescodificada = ((codDaLetraASC - letraZminuscula - offset) % tamanhoDoAlfabeto) + letraZminuscula;
        resultadoDescodificar += String.fromCharCode(letraDescodificada);

      } else {
        resultadoDescodificar += String.fromCharCode(codDaLetraASC);
      }

    }
    return resultadoDescodificar;
  }

}
export default cipher;
