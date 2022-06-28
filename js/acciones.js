var formulario = document.getElementById("formulario"),
  nombre = formulario.nombre,
  correo = formulario.correo,
  sexo = formulario.sexo,
  terminos = formulario.terminos,
  error = document.getElementById("error");

function validarNombre(e) {
  if (nombre.value == "" || nombre.value == null) {
    //Agregar el error al html creando una etiqueta li
    error.style.display = "block";
    //agregando todos los errores en una misma lista
    error.innerHTML += "<li>Por favor completa el nombre</li>";
    //no se envia el formulario porque algo esta mal, cancdla lo que sigue
    e.preventDefault();
  } else {
    //sino hay error lo quita de la pantalla
    error.style.display = "none";
  }
}

function validarCorreo(e) {
  if (correo.value == "" || correo.value == null) {
    //Agregar el error al html creando una etiqueta li
    error.style.display = "block";
    //agregando todos los errores en una misma lista
    error.innerHTML += "<li>Por favor completa el correo</li>";
    //no se envia el formulario porque algo esta mal, cancdla lo que sigue
    e.preventDefault();
  } else {
    //sino hay error lo quita de la pantalla
    error.style.display = "none";
  }
}

function validarSexo(e) {
  if (sexo.value == "" || sexo.value == null) {
    //Agregar el error al html creando una etiqueta li
    error.style.display = "block";
    //agregando todos los errores en una misma lista
    error.innerHTML += "<li>Por favor selecciona un sexo</li>";
    //no se envia el formulario porque algo esta mal, cancdla lo que sigue
    e.preventDefault();
  } else {
    //sino hay error lo quita de la pantalla
    error.style.display = "none";
  }
}

function validarTerminos(e) {
  if (terminos.checked == false) {
    error.style.display = "block";
    error.innerHTML += "<li>Por favor acepta los terminos y condiciones</li>";
    e.preventDefault();
  } else {
    //sino hay error lo quita de la pantalla
    error.style.display = "none";
  }
}

function validarFormulario(e) {
  error.innerHTML = ""; //se resetea el error para que no me
  //aparescan todos los errores anteriores como si volvieramos
  //a cargar la pagina
  validarNombre(e);
  validarCorreo(e);
  validarSexo(e);
  validarTerminos(e);
}

/*el boton tiene un submit */
formulario.addEventListener("submit", validarFormulario);
