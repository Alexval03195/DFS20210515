var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { nombre: 'Alejandro',fecha:new Date() });
});


router.get('/Calculadora', function(req, res, next) {
  res.render('Calculadora');
});


router.post('/Calculadora', function(req, res, next) {
  let num1=req.body.num1;
  
  let num2=req.body.num2;
  let op=req.body.op;
  

  console.log("Numero 1: ",num1);
  console.log("Numero 2: ",num2);
  num1=parseFloat(num1);
  num2=parseFloat(num2);
  if(op=="suma"){
    resultado=num1+num2;
  }

  if(op=="resta"){
    resultado=num1-num2;
  }
  if(op=="multiplicacion"){
    resultado=num1*num2;
  }

  if(op=="division"){
    if(num2==0){
      resultado="Sintaxis error";
    }else{
      resultado=num1/num2;    
    }
    
  }
  
  res.render('Calculadora',{resultado:resultado});
});

module.exports = router;
