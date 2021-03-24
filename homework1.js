//1.Գրել ծրագիր, որը կստուգի , եթե req.url /sunny է, ապա console-ում տպի Yes.

const http = require('http');

const server = http.createServer(function(req,res){
    if(req.url == '/sunny'){
        console.log("Yes");
    }
    res.end();
}).listen(3000);