function validar() {
	var resultado = true;
	var txtNombres = document.getElementById("nombres");
	var txtemail = document.getElementById("email");
	var txtTelefono = document.getElementById("telefono");
	var txtAsunto  = document.getElementById("asunto");
    var radiosGenero = document.getElementsByName("genero");
    var radio1 = document.getElementById("g1");
    var chkSuscrip = document.getElementById("suscripcion1");
    var checkboxsSuscripcion = document.getElementsByClassName("sus");
    var selectEstado = document.getElementById("estadoC");
	
	var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
	
	limpiarMensajes();
	
	//validacion para nombres
    if (txtNombres.value === '') {
        resultado = false;
        mensaje("Nombre es requerido", txtNombres);
    } else if (!letra.test(txtNombres.value)) {
        resultado = false;
        mensaje("Nombre solo debe contener letras", txtNombres);
    } else if (txtNombres.value.length > 20) {
        resultado = false;
        mensaje("Nombre maximo 20 caracteres", txtNombres);
    }
	
	//validacion email
    if (txtemail.value === "") {
        resultado = false;
        mensaje("Email es requerido", txtemail);
    } else if (!correo.test(txtemail.value)) {
        resultado = false;
        mensaje("Email no es correcto por favor verificar que este bien digitado", txtemail);
    }
	
	//validacion telefono
    if (txtTelefono.value === "") {
        resultado = false;
        mensaje("Telefono es requerido", txtTelefono);
    } else if (!telefonoreg.test(txtTelefono.value)) {
        resultado = false;
        mensaje("Telefono debe ser de 10 digitos", txtTelefono);
    }
	
	//validacion para asunto
    if (txtAsunto.value === '') {
        resultado = false;
        mensaje("Asunto es requerido", txtAsunto);
    } else if (!letra.test(txtAsunto.value)) {
        resultado = false;
        mensaje("Asunto solo debe contener letras", txtAsunto);
    } else if (txtAsunto.value.length > 100) {
        resultado = false;
        mensaje("Asunto maximo 20 caracteres", txtAsunto);
    }
	
	return resultado;
}

if (selectEstado.value === null || selectEstado.value === '0') {
    resultado = false;
    mensaje("Se requiere seleccionar una de las dos opciones ", selectEstado);
}

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.innerHTML = cadenaMensaje;
    nodoMensaje.style.color = "red";
    nodoMensaje.display = "block";
    nodoMensaje.setAttribute("class", "mensaje");

    nodoPadre.appendChild(nodoMensaje);

}

var sel = false;
for (let i = 0; i < radiosGenero.length; i++) {
    if (radiosGenero[i].checked) {
        sel = true;
   
      break;
    }
}
if (!sel) {
    resultado = false;
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
    resultado = false;
    mensaje("Debe seleccionar una suscripcion", checkboxsSuscripcion[0]);
}
if (cont<2) {
    resultado = false;
    mensaje("Debe seleccionar al menos dos suscripciones", checkboxsSuscripcion[0]);
}


function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensaje");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }

}