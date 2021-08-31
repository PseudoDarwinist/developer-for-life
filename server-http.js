'use strict'
const http = require('http');
const port = process.env.PORT || 3000;
const sessions = require('./sessions.json');


const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200,{contentType: 'text/html'});
        res.write('<h1>Hola Salesforce developers</h1>');
        res.write('<p1>Hola Mundo</p1>');
    } else if(req.url === '/api/sessions'){
        res.writeHead(200, { contentType: "application/json" });
        res.write(JSON.stringify(sessions));

    } else {
        res.writeHead(404, { contentType: "text/plain" });
        res.write(`404: Not found ${req.url}`);
    }
    res.end();
});

server.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);

});
