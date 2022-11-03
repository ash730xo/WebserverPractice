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
/*
//creates server
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    //sets headers- we are using html text
    res.setHeader('Content-Type', 'text/html')
    res.writeHead
    //HTML display
    res.end(html)
})
*/



function route(req, res) {
    let routHtml = ''
    let httpCode 

    switch(req.url){
        case '/':
                routHtml = '<h1>Welcome to the Home Page!</h1><br><h2><a href="http://localhost:3030/about">About Page</a></h2>'
                httpCode=200
                break;
        case '/about':
                routHtml = '<h1>Welcome to the About Page!</h1><h2><a href = "http://localhost:3030/">HomePage</a></h2>'
                httpCode=200

                break;
        default:
                routHtml = '<h1>pageee not found</h1>'
                //res.render(404, { url: req.url })
                //res.status(404)
                httpCode=404
                //routHtml.status(404)
                break;
    }


    res.setHeader("Content-Type", "text/html")
    res.writeHead(httpCode)
    res.end(routHtml)

}

const server = http.createServer(route)

//starts the server when its being ran
server.listen(port, () => {
    console.log(`Server running at ${port}`)
}) 
    

