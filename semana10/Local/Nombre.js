const readline=require('readline-sync');//intancia reradline
function pedirNombre(){// crea funcion peedir nombre
    let nombre=readline.question('Cual es tu nombre ');// use la funcion question del objeto readline
    console.log('Bienvenido ',nombre);//retunr
}
//pedirNombre();//llamar funcion pedir

exports.pedirNombre=pedirNombre;