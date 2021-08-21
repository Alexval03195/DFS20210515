

const express= requiere('express');
const webpack=requiere('webpack');
const webpack_middleware=require('webpack-middleware');
const webpackConfig=require('../webpack.config');

var app= express();
app.set('port',(process.env.PORT || 3000));
app.use('/static',express.static(__dirname +'/dist'));
app.use(webpack_middleware(webpackConfig));



app.get('/',function(req,res,next){
    res.send('Hola,3ct');


    app.listen(app.get('port'),()=>{
        console.log('Servidor listo');
    })

});