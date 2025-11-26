import * as http from "node:http";

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Welcome to vaishnavi node server!");
    }

    else if (req.url === '/about') {
        res.statusCode = 200;   // ✅ FIXED HERE
        res.setHeader('Content-Type', 'text/plain');
        res.end("Contact us at: vaishnavi@example.com");
    }
    
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 - Page Not Found");
    }
});

server.listen(port, hostname, () => {
    console.log(`New server is running at http://${hostname}:${port}`);
});
