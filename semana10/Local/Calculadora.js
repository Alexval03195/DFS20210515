const nombre =require('./Nombre');
const readline=require('readline-sync');
const operaciones =require('./operaciones');
nombre.pedirNombre();



var contador=1;
while(contador<3){
console.log(' Esto es una calculadora que operacion deseas hacer');
console.log('a) suma');
console.log('b) resta');
console.log('c) multiplicacion');
console.log('d) division');
console.log('s) salir');
op=readline.question('Que operacion va ahacer ');
if(op=='a'){
    operaciones.suma();
    contador=1;
}
if(op=='b'){
    operaciones.res();
    contador=1;
}
if(op=='c'){
    operaciones.multi();
    contador=1;
}
if(op=='d'){
    operaciones.division();
    contador=1;
}
if(op=='s'){
    console.log('ha selecionado salir');
    contador=40;
}


}