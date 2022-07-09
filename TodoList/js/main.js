//agregar funciona autoinvocada
//(function () {})();
var listas = document.getElementById("lista"),
  tareaInput = document.getElementById("tareaInput"),
  btnNuevaTarea = document.getElementById("btn-agregar");

//Funciones
var agregarTarea = function () {
  var tarea = tareaInput.value;
  var nuevaTarea = document.createElement("li");
  var enlace = document.createElement("a");
  var contenido = document.createTextNode(tarea);

  if (tarea === "") {
    tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
    tareaInput.className = "error";
    return false;
  }

  //agregando el contenido al enlace, colocamos el texto dentro del link a
  enlace.appendChild(contenido);
  //agregamos el href a la etiqueta a
  enlace.setAttribute("href", "#");
  //Agregamos "a" dentro de li
  nuevaTarea.appendChild(enlace);
  //agregamos la tarea a la lista
  lista.appendChild(nuevaTarea);
  tareaInput.value = " "; //limpiando input

  for (var i = 0; i < listas.children.length; i++) {
    //para que los elementos se borren todos tiene el evento asignaado
    listas.children[i].addEventListener("click", function () {
      this.parentNode.removeChild(this);
      console.log("eliminado 1");
    });
  }
};

var comprobarInput = function () {
  tareaInput.className = "";
  tareaInput.setAttribute("placeholder", "Agrega tu tarea");
};

var eliminarTarea = function () {
  this.parentNode.removeChild(this);
  console.log("eliminado");
};

//Eventos agregar tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

//Comprobar input, después de tratar de enviar el input vacio
tareaInput.addEventListener("click", comprobarInput);

//En el ciclo agregamos el evento por cada una de las tareas disponibles
//con el children accedes al elemento dentr de la lista es decir UL
for (var i = 0; i < listas.children.length; i++) {
  listas.children[i].addEventListener("click", eliminarTarea);
}
