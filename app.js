var http = require("http");

http.createServer(function (request, response) {
    response.end("<h1>Servidor rodando</h1>");
}).listen(3000);