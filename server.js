const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is overview page');
    } else if (pathName === '/product') {
        res.end('This is a Product page');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }
});

    // res.end('Server is running!!!👌👌');
server.listen(8080, 'localhost', () => {
    console.log('server working fine')
});