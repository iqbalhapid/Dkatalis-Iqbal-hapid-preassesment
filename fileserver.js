//Problem statement
//Write an HTTP server that serves the same text file for each request it receives. 
//Your server should listen on the port provided by the first argument to your program. 
//You will be provided with the location of the file to serve as the second command-line argument. 
//You must use the fs.createReadStream() method to stream the file contents to the response.
'use strict';

const http = require('http')//load required modules
const fs  = require('fs')//load required modules

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

const server = http.createServer(function (req, res) {
  if (req.url == '/') {
    var filename = __dirname+req.url;
    var readStream = fs.createReadStream(filename);
    readStream.on('open', function () {
    readStream.pipe(res);
    });
    readStream.on('error', function(err) {
    res.end(err);
    })
        }
        res.end('Invalid Request!');
    })

server.listen(process.argv[1]) //complete this line, the port number is a commnadline argument

