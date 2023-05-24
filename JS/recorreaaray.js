//CICLOS
let contador=0;
let materias=["matematicas","español","sociales","quimica","ciencias politicas"];
function ciclo1(materia){
  console.log(`Bienvenido a ${materia}`);
}

for (let index = 0; index < materias.length; index++) {
    ciclo1(materias[index])
}
console.log("###############################################");
for( let materia of materias ){
  ciclo1(materia)
}
console.log("###############################################");
while(materias.length>contador){
  let materia=materias.shift();
  ciclo1(materia)
}

