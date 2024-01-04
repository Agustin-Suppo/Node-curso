const http = require('http');

const server = http.createServer((req, res) =>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('El gordo se la come');

});

server.listen(3000,'localhost',()=>{
    console.log('servidor en ejecucion en http')
});