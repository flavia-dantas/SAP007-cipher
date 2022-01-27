import cipher from './cipher.js';



const btnEncode = document.getElementById("btnEncode").addEventListener("click",cripitografar)
const btnDecode = document.getElementById("btnDecode").addEventListener("click",descriptografar)
const textoEncode = document.getElementById("msgCodificada").addEventListener("change",maiusculaEncode) // change = mudança
// const btnLimparEncode = document.getElementById("btnLimparEncode").addEventListener("click",limparEncode)
// const btnLimparDecode = document.getElementById("btnLimparDecode").addEventListener("click",limparDecode)

function maiusculaEncode(){
    let converteTxtEncode = document.getElementById("msgCodificada").value;
    document.getElementById("msgCodificada").value = converteTxtEncode.toUpperCase();
    
}
function cripitografar(event){
    event.preventDefault();
    let msgCodificada = document.getElementById("msgCodificada").value;
    // document.getElementById("msgCodificada").value = msgCodificada.toUpperCase();
    let offsetEncode = parseInt(document.getElementById("offsetEncode").value);
    const cripto = cipher.encode(offsetEncode, msgCodificada);
    document.getElementById("resultadoEncode").value = cripto;

    console.log(msgCodificada);
    console.log(offsetEncode);
    console.log(cripto);
} 


    

function descriptografar(evento){
    evento.preventDefault();
    let txtDecode = document.getElementById("msgDescodificada").value;
    let offsetDecode = document.getElementById("offsetDecode").value;

    console.log(txtDecode);
    console.log(offsetDecode);
}

// function limparEncode(){
//     document.getElementById("msgCodificada").value ="";
//     document.getElementById("offsetEncode").value = "";
//     document.getElementById("resultadoEncode").value ="";

// }

// function limparDecode(){
//     let txtLimparDecode = document.getElementById("msgDescodificada").value;

//     console.log(txtLimparDecode);
// }

console.log(cipher);
