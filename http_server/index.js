const http = require('http');
const fs = require('fs').promises;

async function readFileContent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        return content;
    }
    catch (err) {
        return "<h1>Error loading page!</h1>";
    }
}

http.createServer(async (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const content = await readFileContent('home.html');
        res.end(content);
    }
    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const content = await readFileContent('about.html');
        res.end(content);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        const content = await readFileContent('not-found.html');
        res.end(content);
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});