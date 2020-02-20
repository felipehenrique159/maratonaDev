const express = require("express")
const server = express()

server.use(express.static('public'))

//config a template engine com o nunjucks

const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

server.get("/", function (req, res) {
    return res.render("index.html") //rederiza o index
})


//definir a porta do servidor
server.listen(3000, function () {
    console.log("Iniciei o servidor!")
});