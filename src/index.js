import cipher from './cipher.js';



const bntEncode = document.getElementById("btnEncode").addEventListener("click",cripitografar)

function cripitografar(evento){
    evento.preventDefault();
    let txtEncode = document.getElementById("msgCodificada").value;
    let offsetEncode = document.getElementById("offsetEncode").value;
    
    console.log(txtEncode);
    console.log(offsetEncode);
}


console.log(cipher);
