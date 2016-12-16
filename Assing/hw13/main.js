var http = require('http');

var server = http.createServer(function(req, res) {
	res.write('This is our first server in node.js ')
	res.end();
});

server.listen(1234);

console.log('server is running at http://localhost:1234');