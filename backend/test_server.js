const http = require('http');

console.log("Starting test server...");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

const port = 5001;
server.listen(port, () => {
    console.log(`Test server running at http://localhost:${port}/`);
});
