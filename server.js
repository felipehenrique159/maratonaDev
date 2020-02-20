const express = require("express")
const server = express()

server.use(express.static('public'))

//config template engine with nunjucks

const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})


//body on form
server.use(express.urlencoded({ extended: true }))


//config database conection
const Pool = require("pg").Pool
const db = new Pool({
    user: "postgres",
    password: "cidade123",
    host: "localhost",
    port: 5432,
    database: "doe"
})




server.get("/", function (req, res) {
    db.query('select * from donors', function (err, result) {
        if (err) {
            return res.send(err)
        }
        else {
            const donors = result.rows
            return res.render("index.html", { donors }) //render index.html
        }
    })


})

server.post("/", function (req, res) {
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatorios")
    }

    else {

        const query = `insert into donors("name","email","blood") values ($1,$2,$3)`;


        const values = [name, email, blood]

        db.query(query, values, function (err) {
            if (err) {
                return res.send(err)
            }

            else {
                return res.redirect("/")
            }
        })



    }

    // push values inside database


})


//route port server
server.listen(3000, function () {
    console.log("Iniciei o servidor!")
});