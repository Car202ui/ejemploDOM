const valor= document.querySelector('h1');
valor.innerHTML="bienvenido CENTRO DE FE ESPERANZA"
const dato= document.querySelector('#dato1');
const dato2=document.querySelector('#dato2');
const calcul= document.querySelector('#cal');
const form=document.querySelector('#form');
form.addEventListener('submit',sumar);

function sumar(event){
    event.preventDefault();
    let valores= Number(dato.value) + Number(dato2.value)
    Swal.fire(
        ' el calculo',
        valores
      )
      console.log(valores);  
}
function cambio(){
    Swal.fire({
        title: 'desea cambiar el valor de input?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}
