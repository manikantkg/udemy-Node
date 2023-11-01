const http = require('http');
const url = require('url');
const fs = require('fs')




const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const temProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);



const server = http.createServer((req, res) => {
    const pathName = req.url;

    //Overview Page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        res.end(tempOverview);

        //Product Page
    } else if (pathName === '/product') {
        res.end('This is a Product page');

        //API page
    } else if (pathName === '/api') {

        // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
        //     const prodData = JSON.parse(data);
        res.writeHead(200, { 'Content-type': 'application/json' });
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