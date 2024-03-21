let botonEncriptar = document.querySelector(".button-encrypt");
let botonDesencriptar = document.querySelector(".button-decrypt");
let botonLimpiar = document.querySelector(".button-clean");
let botonCopiar = document.querySelector(".button-copy");
let campo_texto = document.querySelector(".text-area")
let resultado = document.querySelector(".text-exit");
let dibujoTexto = document.querySelector(".image-paragraph");

let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

/*Botones*/

botonLimpiar.onclick = limpiarArea;
botonEncriptar.onclick = btnencriptar;
botonDesencriptar.onclick = btnDesencriptar;
botonCopiar.onclick = btncopiar;

/*Copiar*/

function limpiarArea() {
    document.getElementsByClassName("text-area")[0].value = "";
    document.getElementsByClassName("text-exit")[0].value = "";
    dibujoTexto.style.visibility = "inherit";
}

/*Encriptar*/

function btnencriptar(){
    const texto = encriptar(campo_texto.value);
    resultado.value = texto;
    dibujoTexto.style.visibility = "hidden";
}

function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada
}

/*Desencriptar*/

function btnDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    resultado.value = texto;
    dibujoTexto.style.visibility = "hidden";
}

function desencriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseEncriptada
}

/*Copiar*/

function btncopiar(){
    let textoCopiado = document.querySelector(".text-exit");
    textoCopiado.select();
    document.execCommand("copy");
    alert("¡Texto Copiado!")
}