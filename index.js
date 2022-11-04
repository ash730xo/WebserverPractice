"use strict"
// initalize port
const http = require('http')
//File reader
const fs = require('fs')
const { get } = require('https')
// holder for the HTML file
//let routHtml = ``
// initalize port
const port = 3030

/*
First way of displaying one page web server in node
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
*/




// Switch Case for the routs
function route(req, res) {
    let routHtml = ''
    //code to run file- (200) or any error like 404 if needed 
    let httpCode 

    //Switch case for each route directory -- Homepage & about 
    switch(req.url){
        // HOME PAGE 
        case '/':
                //routHtml = req.get('http://localhost:3030/') 
                //Reads the file and displays whats on the file 
            if(req.method === 'GET'){
                routHtml = fs.readFileSync('./views/home.html', {encoding: 'utf-8', flag:'r'})
                httpCode=200
            } else {
                console.log(req.method + " URL " + req.get)
                routHtml = fs.readFileSync('./views/not-found.html', {encoding: 'utf-8', flag:'r'})
                httpCode=200
            }
                break;

            //ABOUT PAGE 
        case '/about':
            //Reads the file and displays whats on the file 
            if(req.method === 'GET'){
                routHtml = fs.readFileSync('./views/about.html', {encoding: 'utf-8', flag:'r'})
                httpCode=200
            } else {
                console.log(req.method + " URL " + req.get)
                routHtml = fs.readFileSync('./views/not-found.html', {encoding: 'utf-8', flag:'r'})
                httpCode=200
            }
            /*
                //Reads the file and displays whats on the file 
                routHtml = fs.readFileSync('./views/about.html', {encoding: 'utf-8', flag:'r'})
                httpCode=200
            */

                break;
        default:
                //Reads the file and displays whats on the file 
                routHtml = fs.readFileSync('./views/not-found.html', {encoding: 'utf-8', flag:'r'})
                httpCode=200
                break;
    
    }

    res.setHeader("Content-Type", "text/html")
    //Sets the code
    res.writeHead(httpCode)
    //sets the 
    res.end(routHtml)
}

//creates the server 
const server = http.createServer(route)

//starts the server when its being ran
server.listen(port, () => {
    console.log(`Server running at ${port}`)
}) 
    



/*
Resources: 
- https://www.restapitutorial.com/lessons/httpmethods.html (HTTP Methods)
*/

