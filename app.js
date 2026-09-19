const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('DevOps Project 5 application is running');
});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});