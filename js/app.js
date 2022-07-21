var form = document.getElementById("formContacto");
form.addEventListener('submit', validar);

let cont=0;
function validar(event) {
   
    var valido = true;
    
  
    var txtNombres = document.getElementById("nombres");
   
   
    var selectServicio = document.getElementById("Servicios");
    var radiosTipo = document.getElementsByName("tipo");
    var radio1 = document.getElementById("g1");
   

    var txtemail = document.getElementById("correo");
  
 
    var letra = /^[a-z ,.'-]+$/i;
   var sololetra= /^[A-Z]+$/i;
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   
    limpiarMensajes();
  
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
    

    
    

    
    if (txtemail.value === "") {
        valido = false;
        mensaje("El campo Email es requerido", txtemail);
    } 
    else if (!correo.test(txtemail.value)) {
        valido = false;
        mensaje("El campo Email no es correcto", txtemail);
    }

    
    if (selectServicio.value === null ||  selectServicio.value === '0') {
        valido = false;
        mensaje("Se requiere seleccionar un servicio", selectServicio);
    }

   
    var sel = false;
    for (let i = 0; i < radiosTipo.length; i++) {
        if (radiosTipo[i].checked) {
            sel = true;
       
          break;
        }
    }
    if (!sel) {
        valido = false;
        mensaje("Se requiere seleccionar un tipo", radiosTipo[0]);
    }

   
   
  
  

  
   
  
   if(!valido){
        event.preventDefault();  
    }
    if(valido=== true){
        window.alert("Enviaremos su cotizacion al Correo")
       
        
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