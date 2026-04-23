import fs from 'fs';
import http from 'http';
import zlib from 'zlib';

http.createServer(function (req, res) {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello, World!</h1>');
    }
    else if (req.url === '/data' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        fs.readFile('D://FYP//script.txt', 'utf-8', function (err, data) {
            if (err) {
                console.log(err);
                res.end('Error reading file.');
            } else {
                res.end(data);
            }
        });
    }
    else if (req.url === '/copy' ) {
        try {
            const readStream = fs.createReadStream('D:\\Softwares\\Adobe_Photoshop_2020.zip');
            const writeStream = fs.createWriteStream('C:\\Users\\Hassan\\Documents\\copied.zip');
            readStream.pipe(writeStream);
        } catch (error) {
            console.error('Error copying file:', error);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internal Server Error</h1>');
        }
    }
    else if (req.url === '/zip-copy' ) {
        try {
            const readStream = fs.createReadStream('D:\\FYP\\script.txt');
            readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('C:\\Users\\Hassan\\Documents\\fyp.txt.zip'));
        } catch (error) {
            console.error('Error copying file:', error);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internal Server Error</h1>');
        }
    }
}).listen(3000, function () {
    console.log('Server is listening on port 3000');
});