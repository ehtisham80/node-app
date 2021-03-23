var http = require('http')
var url = require('url')

http.createServer(function (req, res) {
    var route = req.url
    if (route == '/') {
        res.end('This is information from backend to home page ')
    }
    if (route === '/getusernames') {
        var usernames = ['john', 'david', 'ricky']
        res.end(JSON.stringify(usernames))
    }

    console.log('My Node js server started successfully in port 5000')
}).listen(5000)