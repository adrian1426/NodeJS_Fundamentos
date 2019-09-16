//creando servidor web

// const http = require('http');

const colors = require('colors');

// const handleServer = function(req,res){
//     res.writeHead(200,{'Content-type': 'text/html'});
//     res.write('<h1>Hola mundo desde nodejs</h1>');
//     res.end();
// };

// const server = http.createServer(handleServer);

// server.listen(3000,function(){
//     console.log('servidor en puerto 3000'.yellow);
// });

const express = require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send('<h1>Hola mundo con express</h1>');
});

app.listen(3000, ()=>{
    console.log('escuchando en puerto 3000'.red);
});