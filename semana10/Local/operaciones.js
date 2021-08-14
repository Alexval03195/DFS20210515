const readline=require('readline-sync');//intancia reradline
const Operaciones={}
var num1;
var num2;
var resultado;
function suma(num1,num2){
    num1=readline.question('ingresa un numero ');
    num2=readline.question('ingresa un numero ');
    resultado=parseFloat(num1)+parseFloat(num2);
    console.log('el resultado es  '+resultado);
}








function res(num1,num2){
    num1=readline.question('ingresa un numero ');
    num2=readline.question('ingresa un numero ');
    resultado=parseFloat(num1)-parseFloat(num2);
    console.log('el resultado es  '+resultado);
}




function multi(num1,num2){
    num1=readline.question('ingresa un numero ');
    num2=readline.question('ingresa un numero ');
    resultado=parseFloat(num1)*parseFloat(num2);
    console.log('el resultado es  '+resultado);
}




function division(num1,num2){
    num1=parseFloat(readline.question('ingresa un numero '));
    num2=parseFloat(readline.question('ingresa un numero '));
    if(num2==0){
        console.log('no se puede dividir entre 0');  
    }
    else{
        resultado=(num1)/(num2);
        console.log('el resultado es  '+resultado);
    }
    

}



module.exports=Operaciones;

Operaciones.suma=suma;
Operaciones.res=res;
Operaciones.multi=multi;
Operaciones.division=division;
