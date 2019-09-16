// Dependencies
const http = require('http')
const url = require('url')

// Server responds to all requests with a string
const server = http.createServer((req, res) => {
    // Get the url and parse it
    const parsedUrl = url.parse(req.url, true)

    // Get the path
    const path = parsedUrl.pathname
    const trimmedpath = path.replace(/^\/+|\/+$/g, '')

    // Get the HTTP method
    const method = req.method.toUpperCase()

    // Get the query string
    const queryStringObject = parsedUrl.query

    // Get the headers
    const headers = req.headers

    // Send the response
    res.end('Hello World')

    // Log the request path
    // console.log('Untrimmed: ', path)
    console.log('Path received: ', trimmedpath)
    console.log('Method: ', method)
    console.log('Query: ', queryStringObject)
    console.log('Headers: ', headers)

})

// Server listens on port 8100
server.listen(8100, () => console.log('Server is running on port 8100'))
