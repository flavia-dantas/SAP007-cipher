import cipher from './cipher.js';



const btnEncode = document.getElementById("btnEncode").addEventListener("click",cripitografar)
const btnDecode = document.getElementById("btnDecode").addEventListener("click",descriptografar)

function cripitografar(evento){
    evento.preventDefault();
    let txtEncode = document.getElementById("msgCodificada").value;
    let offsetEncode = document.getElementById("offsetEncode").value;
    
    console.log(txtEncode);
    console.log(offsetEncode);
}

function descriptografar(evento){
    evento.preventDefault();
    let txtDecode = document.getElementById("msgDescodificada").value;
    let offsetDecode = document.getElementById("offsetDecode").value;

    console.log(txtDecode);
    console.log(offsetDecode);
}
console.log(cipher);
