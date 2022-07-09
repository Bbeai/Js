const tasks = []; //lista de taraeas
let time = 0; //tiempo
let timer = null;
let timerBreak = null; //descanzo de 5 min
let current = null; //tiempo actual

const bAdd = document.querySelector("#bAdd"); //boton
const itTask = document.querySelector("#itTask"); //tarea
const form = document.querySelector("#form"); //formulario

//funcion anonima
/*form.addEventListener("submit", funcion(){

})*/

form.addEventListener("submit", (e) => {
  e.preventDefault(); //cuando enviemos el formulario no se envide de verdad
  if (itTask.value != "") {
    createTask(itTask.value);
    itTask.value = "";
  }
});

(createTask) => {
  const newTask = {
    id: 0,
    title: createTask,
    completed: false,
  };
};
