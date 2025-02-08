// variables para seleccionar los input de html 
var dia = document.getElementById("day");
var mes = document.getElementById("mes");
var annio = document.getElementById("annio");


// aqui seleccionamos las etiqueta small para el mensaje de los errores 
var error1 = document.getElementById("e1");
var error2 = document.getElementById("e2");
var error3 = document.getElementById("e3");

// variables para los label 
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");

var resultado = document.getElementsByTagName("p");
var error = document.querySelectorAll("span small");
var boton = document.querySelector("#btn");

// Arreglos donde tenemos los meses del año 
const NumeroMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const fechaHoy = new Date();  // Se obtiene la fecha actual 
let dia_actual = fechaHoy.getDate();
let mes_actual = fechaHoy.getMonth() + 1;
let annio_actual = fechaHoy.getFullYear();

boton.addEventListener("click", function () {

    var mostrarDia = document.querySelector(".mostrar-dias");
    var mostrarMes = document.querySelector(".mostrar-meses");
    var mostrarAños = document.querySelector(".mostrar-años");

    // Se calcula el año actual y el año que ingresamos el input , tambien los dias y meses
    let resultado_annio = annio_actual - annio.value;
    let resultado_mes = mes_actual - mes.value;
    let resultado_dia = dia_actual - dia.value;

    if (resultado_dia < 0) {
        resultado_mes--;
        resultado_dia = resultado_dia + NumeroMes[parseInt(mes.value) - 1];
    }
    if (resultado_mes < 0) {
        resultado_annio--;
        resultado_mes = resultado_mes + 12;
    }

    mostrarDia.textContent = resultado_dia;
    mostrarMes.textContent = resultado_mes;
    mostrarAños.textContent = resultado_annio;

    validar(); // llamamos la funcion validar

    //  limpiar los input 
    //  dia.value = "";
    //  mes.value = "";
    //  annio.value = ""
});

function validar() {

    const diaValor = dia.value;
    const mesValor = mes.value;
    const annioValor = annio.value;

    //validor de dias 
    if (diaValor === "") {
        error1.innerHTML = "Campo Obligatorio";
        dia.style.border = "2px solid red";
        label1.style.color = "red";
        limpiarresultado();

    } else if (diaValor == 29 && mesValor == 2 && !anniobisiesto(annioValor) || diaValor < 1 || diaValor > 31) {
        error1.innerHTML = "Dia Incorrecto";
        dia.style.border = "2px solid red";
        dia.style.backgroundColor = "hsl(0, 100%, 67%)" 
        dia.style.color = "hsl(0, 0%, 94%)";
        label1.style.color = "hsl(0, 100%, 67%)";
        limpiarresultado();
        
    } else {
        error1.innerHTML = "";
        dia.style.border = "1px solid hsl(0, 0%, 86%)";
        label1.style.color = "hsl(0, 1%, 44%)";
        dia.style.backgroundColor = "hsl(0, 1%, 44%)";
        dia.style.color = "hsl(0, 0%, 94%)";
    }


    // validor de los meses 
    if (mesValor === "") {
        error2.innerHTML = "Campo Obligatorio";
        mes.style.border = "2px solid red";
        label2.style.color = "red";
        limpiarresultado();
    }
    else if (mesValor > 12 || mesValor < 1) {
        error2.innerHTML = "Mes Incorrecto";
        mes.style.border = "2px solid red";
        mes.style.backgroundColor = "hsl(0, 100%, 67%)" 
        mes.style.color = "hsl(0, 0%, 94%)";
        label2.style.color = "hsl(0, 100%, 67%)";

        limpiarresultado();
    }
    else {
        error2.innerHTML = "";
        mes.style.border = "2px solid hsl(0, 0%, 86%)";
        label2.style.color = "hsl(0, 1%, 44%)";
        mes.style.backgroundColor = "hsl(0, 1%, 44%)";
        mes.style.color = "hsl(0, 0%, 94%)";
    }

    //validor de año 

    if (annioValor === "") {
        error3.innerHTML = "Campo Obligatorio";
        annio.style.border = "1px solid red";
        label3.style.color = "red";
        limpiarresultado();
    }
    else if (annioValor > annio_actual || new Date(annioValor, mesValor - 1, diaValor) > fechaHoy) {
        error3.innerHTML = "Fecha Futura";
        annio.style.border = "2px solid red";
        annio.style.backgroundColor = "hsl(0, 100%, 67%)" ;
        annio.style.color  = "hsl(0, 0%, 100%);";
        annio.style.color = "hsl(0, 0%, 94%)";
        label3.style.color = "hsl(0, 100%, 67%)";

        limpiarresultado();
    }
    else if (annioValor < 1900) {
        error3.innerHTML = "Fecha Antigua";
        annio.style.border = "2px solid red";
        annio.style.color = "hsl(0, 0%, 94%)";
        annio.style.backgroundColor = "hsl(0, 100%, 67%)"

        label3.style.color = "hsl(0, 100%, 67%)";

        limpiarresultado();
    }
    else {
        error3.innerHTML = "";
        annio.style.border = "2px solid hsl(0, 0%, 86%)";
        label3.style.color = "hsl(0, 1%, 44%)";
        annio.style.backgroundColor = "hsl(0, 1%, 44%)";
        annio.style.color = "hsl(0, 0%, 94%)";
    }
}

function anniobisiesto(annio) {
    return (annio % 4 == 0 && annio % 100 != 0) || annio % 400 == 0;
}

function limpiarresultado() {
    for (let i = 0; i < resultado.length; i++) {
        resultado[i].innerHTML = "- -";
    }
}
