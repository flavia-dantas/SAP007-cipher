import cipher from './cipher.js';



const btnEncode = document.getElementById("btnEncode")
const btnDecode = document.getElementById("btnDecode")
const textoEncode = document.getElementById("msgCodificada")
const textoDecode = document.getElementById("msgDescodificada") 


function maiusculaEncode(){
    let converteTxtEncode = document.getElementById("msgCodificada").value;
    document.getElementById("msgCodificada").value = converteTxtEncode.toUpperCase(); 
}
    textoEncode.addEventListener("change",maiusculaEncode) // change = mudança

function cripitografar(event){
    event.preventDefault();
    let msgCodificada = document.getElementById("msgCodificada").value.toUpperCase();
    let offsetEncode = parseInt(document.getElementById("offsetEncode").value);
    const cripto = cipher.encode(offsetEncode, msgCodificada);
    document.getElementById("resultadoEncode").value = cripto;

} 
    btnEncode.addEventListener("click",cripitografar)

    
function maiusculaDecode(){
    let converteTxtDecode = document.getElementById("msgDescodificada").value;
    document.getElementById("msgDescodificada").value = converteTxtDecode.toUpperCase(); 
}
    textoDecode.addEventListener("change",maiusculaDecode) // change = mudança

function descriptografar(event){
    event.preventDefault();
    let msgDescodificada = document.getElementById("msgDescodificada").value.toUpperCase();
    let offsetDecode = document.getElementById("offsetDecode").value;
    const descripto = cipher.decode(offsetDecode,msgDescodificada);
    document.getElementById("resultadoDecode").value = descripto;
    
}
    btnDecode.addEventListener("click",descriptografar);