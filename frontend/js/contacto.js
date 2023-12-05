// Validación de Formulario
function validar(){
    let mensaje = document.getElementById("mensaje");
    let error = false;
    document.getElementById("validar_mensaje").innerHTML="&nbsp; ";

    if(mensaje.value ==""){
        document.getElementById("validar_mensaje").innerHTML="Indique el motivo de su consulta***";
        error=true;
        mensaje.focus();
        // Si el campo de "Mensaje" queda en blanco, indica que el usuario debe ingresar una consulta.
        // Agregué un DIV con ID "validar_mensaje" y que se muestre en rojo el mensaje de error.
    }

    if(error==false){
        document.getElementById("mensaje").value= "";
        document.getElementById("validar_mensaje").innerHTML= "&nbsp;";
        alert("El mensaje fué enviado con éxito!");
        //Si no hay error, nos muestra el alerta de mensaje enviado. Y limpia los campos.
    }
    return !error;
}