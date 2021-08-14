const http=require('http');
const fecha=require('./Fecha');
const hostname='127.0.0.1';
const puerto=3000;
//creamos servidor en base en protocolo
const server=http.createServer( 
    (req,res)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        res.write('La fecha actual es '+fecha.regresarFecha());
        res.end('Termino');
    }
);
// enciendiendo el servidor y lo pongo a estudiar

server.listen(puerto,hostname,()=>{
    console.log(`El servidor esta corriendo en http://${hostname}:${puerto}/`);
});
