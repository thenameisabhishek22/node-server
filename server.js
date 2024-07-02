const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server</title>
        </head>
        <body>
            <h1>Heyyyyyy, Abhishek!</h1>
            <p>Welcome to my server</p>
        </body>
        </html>
    `;
    res.end(htmlContent);

});

server.listen(5000);