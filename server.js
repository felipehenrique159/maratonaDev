const express = require("express")
const server = express()

server.get("/", function (req, res) {
    return res.send("Ok cheguei ate aqui")
})

server.listen(3000, function () {
    console.log("Iniciei o servidor!")
});