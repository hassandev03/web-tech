import fs from 'fs'
import { writeFile } from 'fs/promises';
import http from 'http'
import zlib from 'zlib'

function readFileContent(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf-8');
    }
    catch (err) {
        console.log(err);
        return 'Error reading file.';
    }
}

http.createServer(async function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        const data = readFileContent('index.html')
        res.end(data)
    }

    else if (req.url === '/read') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        const data = readFileContent('sample-read.txt')
        res.end(data)
    }

    else if (req.url === '/write') {
        try {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            writeFile('sample-write.txt', 'This the data that has been written!', 'utf-8')
            res.end('<h1>Written Successfully!</h1>')
        }
        catch (err) {
            console.log(err)
        }
    }

    else if (req.url === '/append') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.appendFile('sample-append.txt', 'This is the data that has been appended!\n', 'utf-8', function (err) {
            if (err) {
                console.log(err)
            }
        })
        res.end('<h1>Appended Successfully!</h1>')
    }

    else if (req.url === '/copy') {
        try {
            const readStream = fs.createReadStream('D:\\Softwares\\scrcpy-win64-v3.3.4.zip')
            const writeStream = fs.createWriteStream('C:\\Users\\Hassan\\Documents\\Advanced-Web-Lab\\routing_and_streaming\\copied.zip')
            readStream.pipe(writeStream)

            writeStream.on('finish', function () {
                res.write('File Copying Completed.')
                res.end();
            })
        }
        catch (err) {
            console.error('Error reading file:', err)
            res.writeHead(500, { 'Content-Type': 'text/html' })
            res.write('<h1>Internal Server Error</h1>')
        }
    }
    else if (req.url === '/chain-pipes') {
        try {
            const readStream = fs.createReadStream('D:\\FYP\\script.txt')
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            readStream.pipe(res);
            readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('C:\\Users\\Hassan\\Documents\\Advanced-Web-Lab\\routing_and_streaming\\script_copy.txt.gz'))
        }
        catch (err) {
            console.error('Error chaining pipes:', err)
            res.writeHead(500, { 'Content-Type': 'text/html' })
            res.write('<h1>Error Chaining Pipes</h1>')
        }
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Error 404! Not found.</h1>')
        res.end()
    }
}).listen(3000, function () {
    console.log('Server is running at http://localhost:3000/');
});