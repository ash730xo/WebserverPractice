"use strict"
// initalize port
const http = require('http');
const port = 3030


//HTML
let html = `
    <html>
        <head>
            <title> Node.js Practice </title>
        </head>
        <body>
            <h1>Web Server!</h1>
        </body>
    </html>
`

//creates server
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    //sets headers- we are using html text
    res.setHeader('Content-Type', 'text/html')
    res.writeHead
    //HTML display
    res.end(html)
})
/*
const server = http.createServer(routHtml)
function route(req, res) {
    let routHtml = ''
    switch(req.url){
    case '/':
            routHtml = '<h1>Home Page</h1>'
            break;
    case '/about':
            routHtml = '<h1>About me!</h1>'
            break;

    default:
            routHtml = '<h1>idk</h1>'
            break;
}
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200)
    res.end(routHtml)

    }
    */


//starts the server when its being ran
server.listen(port, () => {
    console.log(`Server running at ${port}`)
}) 
    

