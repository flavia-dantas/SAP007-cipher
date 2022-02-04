import cipher from './cipher.js';

const btnEncode = document.getElementById("btnEncode")
const btnDecode = document.getElementById("btnDecode")

function cripitografar(event){
    event.preventDefault();
    let msgCodificada = document.getElementById("msgCodificada").value;
    let offsetEncode = parseInt(document.getElementById("offsetEncode").value);
    const cripto = cipher.encode(offsetEncode, msgCodificada);
    document.getElementById("resultadoEncode").value = cripto;

} 
    btnEncode.addEventListener("click",cripitografar);

function descriptografar(event){
    event.preventDefault();
    let msgDescodificada = document.getElementById("msgDescodificada").value;
    let offsetDecode = parseInt(document.getElementById("offsetDecode").value);
    const descripto = cipher.decode(offsetDecode,msgDescodificada);
    document.getElementById("resultadoDecode").value = descripto;
    
}
    btnDecode.addEventListener("click",descriptografar);