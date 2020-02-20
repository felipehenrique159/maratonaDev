const express = require("express")
const server = express()

server.use(express.static('public'))

//config template engine with nunjucks

const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})


//list donors
const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },

    {
        name: "Felipe Henrique",
        blood: "A+"
    },

    {
        name: "Izabelle Costa",
        blood: "AB+"
    },

    {
        name: "Diego Fernandes",
        blood: "AB+"
    },

]

server.get("/", function (req, res) {
    return res.render("index.html",{donors}) //render index.html
})




//route port server
server.listen(3000, function () {
    console.log("Iniciei o servidor!")
});