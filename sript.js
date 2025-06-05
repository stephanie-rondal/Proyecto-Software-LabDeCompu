
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

// FUNCION DE SELECCIÓN DE OPERACIÓN SEGÚN LOS BOTONES
let operacionSeleccionada = "";
function seleccionarOperacion(op) {
    operacionSeleccionada = op;
}

// FUNCIÓN DE OPERACIONES ARITMÉTICAS SEGÚN SELECCIÓN
function operar() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resultado;

    if (operacionSeleccionada == "suma") {
    resultado = numero1 + numero2;
    } else if (operacionSeleccionada == "resta") {
        resultado = numero1 - numero2;
    } else if (operacionSeleccionada == "producto") {
        resultado = numero1 * numero2;
    } else if (operacionSeleccionada == "cociente") {
        resultado =  numero1 / numero;
    } else {
        resultado = "Operación no seleccionada";
    }

    document.getElementById("resultado").value = resultado;
}
