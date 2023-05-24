//declarativas
function saludar() {
  return 3;
}

//expresion
var saludo = function () {
  return 3;
};

var sumar = function (a, b) {
  return a + b;
};

sumar(30, 45);

function estudiante(nombre) {
  console.log(`hola ${nombre}`);
}
estudiante("carlos iglesias");

function solution(valor) {
  console.log(valor);
}
solution(1);

function solution(valor) {
  console.log(valor);
}
solution(true);

function solution(valor) {
  console.log(valor);
}
solution("dieguillo");

function vota(edad) {
  if (edad == 18) {
    console.log("apto");
  } else if (edad > 18) {
    console.log("votar de nuevo");
  } else {
    console.log("no apto para votar");
  }
  return edad;
}
let valida =vota(30);

function activo(condicion) {
  condicion ? "activo" : "no activo";
  return condicion;
   
}
activo(true);

//arrays
//metodo para gregar push() al final
//metodo para eliminar pop()
//metdo para eliminar el inicio shift()
//metodo para agregar inicio unshift()
//metdo para recorrer indexof()

function chatbot(){
  let saludos=["hola","como estas","buen dia ","buenas noches","como te puedo ayudar","que puedo hacer por ti"]
  for(let i =0; i<saludos.length; i++){
        if(saludos[i]=="hola"){
          console.log(saludos[i]+" "+"usuario");
        }else if(saludos[i]=="como estas"){
          console.log(saludos[i]);
        }else if(saludos[i]=="que puedo hacer por ti"){
          console.log(saludos[i]);
        }
  }
}
chatbot();



