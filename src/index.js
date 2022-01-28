import cipher from './cipher.js';



const btnEncode = document.getElementById("btnEncode")
const btnDecode = document.getElementById("btnDecode")
const textoEncode = document.getElementById("msgCodificada")
const textoDecode = document.getElementById("msgDescodificada") 
// const btnLimparEncode = document.getElementById("btnLimparEncode").addEventListener("click",limparEncode)
// const btnLimparDecode = document.getElementById("btnLimparDecode").addEventListener("click",limparDecode)

function maiusculaEncode(){
    let converteTxtEncode = document.getElementById("msgCodificada").value;
    document.getElementById("msgCodificada").value = converteTxtEncode.toUpperCase(); 
}
    textoEncode.addEventListener("change",maiusculaEncode) // change = mudança

function cripitografar(event){
    event.preventDefault();
    let msgCodificada = document.getElementById("msgCodificada").value;
    let offsetEncode = parseInt(document.getElementById("offsetEncode").value);
    const cripto = cipher.encode(offsetEncode, msgCodificada);
    document.getElementById("resultadoEncode").value = cripto;

    // console.log(msgCodificada);
    // console.log(offsetEncode);
    // console.log(cripto);
} 
    btnEncode.addEventListener("click",cripitografar)

    
function maiusculaDecode(){
    let converteTxtDecode = document.getElementById("msgDescodificada").value;
    document.getElementById("msgDescodificada").value = converteTxtDecode.toUpperCase(); 
}
    textoDecode.addEventListener("change",maiusculaDecode) // change = mudança

function descriptografar(evento){
    evento.preventDefault();
    let msgDescodificada = document.getElementById("msgDescodificada").value;
    let offsetDecode = document.getElementById("offsetDecode").value;
    const descripto = cipher.decode(offsetDecode,msgDescodificada);
    document.getElementById("resultadoDecode").value = descripto;
    
    // console.log(msgDescodificada);
    // console.log(offsetDecode);
    // console.log(descripto);
}
    btnDecode.addEventListener("click",descriptografar)
// function limparEncode(){
//     document.getElementById("msgCodificada").value ="";
//     document.getElementById("offsetEncode").value = "";
//     document.getElementById("resultadoEncode").value ="";

// }

// function limparDecode(){
//     let txtLimparDecode = document.getElementById("msgDescodificada").value;

//     console.log(txtLimparDecode);
// }

//console.log(cipher);
