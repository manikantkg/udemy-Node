const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Server is running!!!👌👌');
});

server.listen(8080, 'localhost', () => {
    console.log('server working fine')
});