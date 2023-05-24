let chatbot=[
   
    {nombre:" sony buen dia colombia",saludo:"buenos dias cual seria tu consulta hoy?",opciones:function(){}},
    {nombre:" luna buenas noches colombia",saludo:"buenas noches cual seria tu consulta esta noche?",opciones:function(){}}
]
// metodos para recorrer
let nuevochat=chatbot.filter(function(chatbot){
   return chatbot.nombre="sony buen dia colombia";
});

let mapo=chatbot.map(function(chatbot){
    return chatbot.nombre
})


let buscar=chatbot.find(function(chatbot){
 return chatbot.nombre==='luna buenas noches colombia'
})
chatbots.forEach(function( chatbot){
    console.log(chatbot.nombre);
});

let  opciones=chatbot.some(function(chatbot){
    return chatbot.saludo="buenos dias cual seria tu consulta hoy?";
})

opciones
let saludo1 = {
  nombre: "chatdia",
  dia: "buenos dias",
  mensaje: "que puedo hacer por ti?",
  mensaje2: "estas  en linea?",
  opciones: function () {
    let op1 = 1,
      op2 = 2,
      op3 = 3;
    switch (op1) {
      case 1:
        console.log("bancos");
        break;
      case 2:
        console.log("supermercados");
        break;
      case 3:
        console.log("centros comerciales");
        break;
        default:
            console.log("no comprendo");
            break;
    }
   
  },
   usuarios:function(){
    console.log(`${this.nombre} ${this.dia} ${this.mensaje}`);
  }
};
saludo1.usuarios();
saludo1.opciones(1);

//funcion constructora
function chatbots(saludos,opciones){
    this.saludos=saludos;
    this.opciones=opciones;
}
let chatbotmañana= new chatbots()