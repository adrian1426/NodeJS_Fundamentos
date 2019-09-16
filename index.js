const os = require('os');
const fs = require('fs');

console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());

fs.writeFile('./texto.txt','contenido txt',function(error){
    if(error){
        console.log(error);
    }
    else
    {
        console.log('archivo creado');
    }
});

console.log('última linea de codigo');