const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our homepage")
    }
    if (req.url === "/about") {
        res.end("Welcome to our about page")
    }
    res.end(`Oops we didnt find the page`)
})

server.listen(5000)