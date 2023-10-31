const http = require('http');
const url = require('url');
const fs = require('fs')




const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);



const server = http.createServer((req, res) => {
    // console.log(req.url);
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is overview page');
    } else if (pathName === '/product') {
        res.end('This is a Product page');
    } else if (pathName === '/api') {

        // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
        //     const prodData = JSON.parse(data);
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
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