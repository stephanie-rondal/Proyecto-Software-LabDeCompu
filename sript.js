
// FUNCION DE VALIDACION SEGÚN LOS DATOS INGRESADOS
function validar(){
    let usuario=document.getElementById("usuario").value; 
    let clave=document.getElementById("clave").value;

    if (usuario=="usuario" && clave=="1234"){
        alert("logueado");
        window.location.href="/home.html";

    }else{
        alert("Intente de nuevo")
    }

}

// FUNCION DE SELECCIÓN DE OPERACIÓN SEGÚN CLICK EN LOS BOTONES
let operacionSeleccionada = ""; // Crea una variable vacía temporalmente por que aún no se ingresó algo
function seleccionarOperacion(op) {
    operacionSeleccionada = op; // Asigna a la variable la operación del botón seleccionado
}

// FUNCIÓN DE OPERACIONES ARITMÉTICAS SEGÚN SELECCIÓN
function operar() {
    let numero1 = parseInt(document.getElementById("numero1").value); // Toma el valor ingresado en el input mediante su id y lo asigna a una variable de tipo entero
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resultado;

    if (operacionSeleccionada == "suma") {
    resultado = numero1 + numero2;
    } else if (operacionSeleccionada == "resta") {
        resultado = numero1 - numero2;
    } else if (operacionSeleccionada == "producto") {
        resultado = numero1 * numero2;
    } else if (operacionSeleccionada == "cociente") {
        resultado =  numero1 / numero2;
    } else {
        resultado = "Operación no seleccionada";
    }

    document.getElementById("resultado").value = resultado; // Toma el input mediante su id y le asigna un valor 
}

// FUNCIÓN DE SELECCIÓN DE INPUT
let campoActivo = "";  // Crea una variable vacía temporalmente. Para saber en qué input se está escrbiendo
function seleccionarCampo(id) { 
    campoActivo = id; // Le asigna a la variable el valor del de los input mediante sus id 
}

// FUNCIÓN DE MOSTRAR NUMEROS SELECCIONADOS EN CADA INPUT
function agregarNumero(numero) {
    if (campoActivo) { 
    document.getElementById(campoActivo).value += numero; // Toma el valor del boton presionado y lo muestra en el input  
    }
}

// FUNCIÓN DE VACIAR LOS INPUTS
function limpiar() {
    document.getElementById("numero1").value = ""; // Toma al input con id numero1 y le da un valor vacío
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
}