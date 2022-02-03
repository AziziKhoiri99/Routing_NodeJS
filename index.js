var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.readFile('./index.html', function (err, data) {
            res.end(data);
        });
    } else if (req.url == '/about') {
        fs.readFile('./about.html', function (err, data) {
            res.end(data);
        });
    } else if (req.url == '/profil') {
        fs.readFile('./profile.html', function (err, data) {
            res.end(data);
        });
    } else {
        res.end('404 Not Found')
    }
}).listen(8080, '0.0.0.0');
console.log('Server telah berjalan.');