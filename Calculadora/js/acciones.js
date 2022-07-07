//crea una lista de nodos con los elementos que tiene el data
//SelectorAll para varios elementos
//selector solo para un elemento
//obtener todos los botones con numero todo por el data
var botonNumero = document.querySelectorAll("[data-numero]");
//obtiene todos los botones con un operador todo por el data
var botonOperador = document.querySelectorAll("[data-operador]");
var botonIgual = document.querySelector("[data-igual]");
var botonBorrarTodo = document.querySelector("[data-borrar-todo]");
var botonBorrar = document.querySelector("[data-borrar]");
var textoValorSuperior = document.querySelector("[data-valor-superior]");
var textoValorInferior = document.querySelector("[data-valor-inferior]");

//las clases van con mayuscula
class Calculadora {
  constructor(textoValorInferior, textoValorSuperior) {
    this.textoValorInferior = textoValorInferior;
    this.textoValorSuperior = textoValorSuperior;
    this.valorInferior = "";
    this.valorSuperior = "";
    this.operador = undefined;
  }

  agregarNumero(numero) {
    //no se sobrepngan los nmeros sino que aparescan todos los que se han presionado
    this.valorInferior = this.valorInferior + numero;
  }

  imprimirDisplay() {
    //para poder ver valor inferior y superior
    this.textoValorInferior.innerHTML = this.valorInferior;
    this.textoValorSuperior.innerHTML = this.valorSuperior;
  }

  borrar() {
    //el metodo slice regresa una posicion anterior
    this.valorInferior = this.valorInferior.slice(0, -1);
  }

  elegirOperacion(operador) {
    console.log(operador + this.valorInferior + this.valorSuperior);
    if (this.valorInferior == "") return;
    if (this.valorInferior != "") {
      this.realizarCalculo();
    }
    this.operador = operador;
    this.valorSuperior = this.valorInferior;
    this.valorInferior = "";
  }

  realizarCalculo() {
    let resultado;
    let conversionValorSuperior = parseFloat(this.valorSuperior);
    let conversionValorInferior = parseFloat(this.valorInferior);

    switch (this.operador) {
      case "+":
        resultado = conversionValorSuperior + conversionValorInferior;
        break;
      case "-":
        resultado = conversionValorSuperior - conversionValorInferior;
        break;
      case "*":
        resultado = conversionValorSuperior * conversionValorInferior;
        break;
      case "/":
        resultado = conversionValorSuperior / conversionValorInferior;
        break;
      default:
        return;
    }

    this.valorInferior = resultado;
    this.operador = undefined;
    this.valorSuperior = "";
    console.log("resultado  " + resultado);
  }
}

const calculadora = new Calculadora(textoValorInferior, textoValorSuperior);
//muchos botones
botonNumero.forEach((boton) => {
  boton.addEventListener("click", () => {
    calculadora.agregarNumero(boton.innerHTML);
    calculadora.imprimirDisplay();
  });
});

botonBorrar.addEventListener("click", () => {
  calculadora.borrar();
  calculadora.imprimirDisplay();
});

botonOperador.forEach((boton) => {
  boton.addEventListener("click", () => {
    calculadora.elegirOperacion(boton.innerText);
    calculadora.imprimirDisplay;
  });
});
