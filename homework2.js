//Server-ում ունենք sunny.txt ֆայլ: Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ file դաշտը և այն հավասար է "sunny", որպես response ստանա sunny.txt պարունակությունը այլապես 404 status-ով ստանա "File Not Found". (Օգտագործել Get մեթոդը):

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function(req,res){
    const query = url.parse(req.url,true).query;
    if(query.file && query.file == "sunny"){
        fs.createReadStream('sunny.txt',{
            highWaterMark: 10
        }).pipe(res);
    }
    else{
        res.writeHead(404,);
        res.end("File Not Found");
    }
});

server.listen(3000,(req,res)=>{
    console.log("localhost:3000");
})