var texto = document.getElementById('texto');

const env = document.getElementById("enviar");

const can = document.getElementById('mostrar');

const lim = document.getElementById('limpiar');

var textoConcatenado = document.getElementById('concatenacion') ;


var todoElTexto = '';
var contenidoDelTexto = '';
var ancho;


env.addEventListener('click', enviar);
can.addEventListener('click', mostrar);
lim.addEventListener('click', limpiar);

function enviar(){
    contenidoDelTexto = texto.value;
    todoElTexto += contenidoDelTexto + " - ";
    document.getElementById("texto").value = "";
}

function mostrar(){
    contenidoDelTexto = texto.value;
    
    textoConcatenado.style.opacity.transition = "2s";
    textoConcatenado.style.opacity = "1";

    pruebaAncho = todoElTexto.length;/*  + "ch"; */


        ancho = todoElTexto.length + "ch";
        textoConcatenado.style.width = ancho;

     textoConcatenado.innerText = todoElTexto;
}



function limpiar(){
    
    contenidoDelTexto = '';
    todoElTexto = '';
    textoConcatenado.innerText = '';
    textoConcatenado.style.opacity = "0";
}



