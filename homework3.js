//3.Server-ում ունենք users.json ֆայլ, որը զանգված է կազմված "fisrt_name", "last_name", "email", "age" դաշտեր պարունակող օբյեկտներից ։ Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ filter դաշտը , վերադարձնել users.json-ից զանգված միայն այն օբյեկներից ,
// որոնց "fisrt_name" կամ "last_name" պարունակում է filter-ի արժեքը։

const http = require('http');
const url = require('url');
const users = require('./users.json');
const { Readable } = require('stream');

const server = http.createServer((req,res)=>{
    const query = url.parse(req.url,true).query;
    const readStream = new Readable({
        read(size){
            this.push(JSON.stringify(
                users.filter(user=>{
                    return user.first_name == query.filter || user.last_name == query.filter;
                })
            ));
            this.push(null);
        }
    })
    if(query.filter){
        readStream.pipe(res);
    }
    else {
        res.end();
    }
});

server.listen(3000,(req,res)=>{
   console.log("localhost:3000");
});
