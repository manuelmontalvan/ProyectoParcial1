var form = document.getElementById("formContacto");
form.addEventListener('submit', validar);

let cont=0;
function validar(event) {
   
    var valido = true;
    
     var txtcedula = document.getElementById("cedula");
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var txtTelefono = document.getElementById("telefono");
    var selectEstado = document.getElementById("estadoC");
    var radiosGenero = document.getElementsByName("genero");
    var radio1 = document.getElementById("g1");
    var chkSuscrip = document.getElementById("suscripcion1");
    var txtfecha = document.getElementById("fecha");
    var txtemail = document.getElementById("correo");
    var checkboxsSuscripcion = document.getElementsByClassName("sus");
 
    var letra = /^[a-z ,.'-]+$/i;
   var sololetra= /^[A-Z]+$/i;
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   
    limpiarMensajes();
    if (txtcedula.value === "") {
        valido = false;
        mensaje("El campo Cedula es requerido", txtcedula);
    }  if(sololetra.test(txtcedula.value)){
        valido = false;
        mensaje("El campo Cedula debe contener solo numero", txtcedula);
   
    }

    if (txtNombres.value === "") {
        valido = false;
        mensaje("El campo Nombre es requerido", txtNombres);
    } else if (!letra.test(txtNombres.value)) { 
        valido = false;
        mensaje("El campo Nombre solo debe contener letras", txtNombres);
    } else if (txtNombres.value.length > 20) {
        valido = false;
        mensaje("El campo Nombre maximo 20 caracteres", txtNombres);
    }
    if (txtApellidos.value === "") {
        valido = false;
        mensaje("El campo apellido es requerido", txtNombres);
    } else if (!letra.test(txtApellidos.value)) { 
        valido = false;
        mensaje("El campo Apellido solo debe contener letras", txtNombres);
    } else if (txtApellidos.value.length > 20) {
        valido = false;
        mensaje("El campo Apellido maximo 20 caracteres", txtNombres);
    }

    
    if (txtTelefono.value === "") {
        valido = false;
        mensaje("El campo Telefono es requerido", txtTelefono);
    } if(sololetra.test(txtTelefono.value)){
        valido = false;
        mensaje("El campo Cedula debe contener solo numero", txtTelefono);
   
    }

    
    if (txtemail.value === "") {
        valido = false;
        mensaje("El campo Email es requerido", txtemail);
    } 
    else if (!correo.test(txtemail.value)) {
        valido = false;
        mensaje("El campo Email no es correcto", txtemail);
    }

    
    if (selectEstado.value === null || selectEstado.value === '0') {
        valido = false;
        mensaje("Se requiere seleccionar estado civil", selectEstado);
    }

   
    var sel = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            sel = true;
       
          break;
        }
    }
    if (!sel) {
        valido = false;
        mensaje("Se requiere seleccionar un genero", radiosGenero[0]);
    }

   
    sel = false; 
    cont=0; 
    for (let i = 0; i < checkboxsSuscripcion.length; i++) {
        if (checkboxsSuscripcion[i].checked) {
            cont++;
            sel = true;
           
          
        }
    }
    if (!sel) {
        valido = false;
        mensaje("Debe seleccionar una suscripcion", checkboxsSuscripcion[0]);
    }
    if (cont<2) {
        valido = false;
        mensaje("Debe seleccionar al menos dos suscripciones", checkboxsSuscripcion[0]);
    }

  
    var dato=  txtfecha.value;
    var fechaN = new Date(dato);
    var anioN=fechaN.getFullYear();
    
    var fechaActual = new Date();
    var anioA =fechaActual.getFullYear();    
    if(dato===""){
        valido="";
        mensaje("Campo de fecha vacio",txtfecha);
 
    }
    if(fechaN > fechaActual){
        valido = false;
        mensaje("Fecha no puede ser superior a la actual",txtfecha);
   }else if(anioN < 1930){
        valido = false;
        mensaje("Anio de nacimiento no puede ser menor a 1930",txtfecha);
   }else if((anioA - anioN) <18){
       valido = false;
        mensaje("debe ser mayor de 18 años",txtfecha);
   }
  
   if(!valido){
        event.preventDefault();  
    }
    if(valido=== true){
        window.alert("Gracias por tu opinion")
    }


}




function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
   
    var nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
   nodoMensaje.setAttribute("class", "mensajeError");

   var nodoPadre = elemento.parentNode;
   nodoPadre.appendChild(nodoMensaje);

}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();
    }

}