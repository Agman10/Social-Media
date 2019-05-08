var express = require('express')
var app = express()
var http = require("http");
var escape = require("sqlstring")


const pug = require("pug");
const fs = require("file-system");
var path = require('path');

var server = http.createServer(app);

var port = 3000

//mysql
var MYSQL_CONF = JSON.parse(fs.readFileSync("MySQL.json", "utf8"));
var mysql = require('mysql');
var connection = mysql.createConnection(MYSQL_CONF);
connection.connect();
console.log("Connected to " + MYSQL_CONF.database + " database.");

//a
app.get('/', (req, res) => res.render('index'));
app.listen(port, () => console.log("Listening on port " + port));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
    if (req.url.indexOf("?") !== -1) {
        req.url = req.url.split("?")[0];
    }
    if (req.path.indexOf('.') === -1) {
        req.url += '.html';
        next();
    } else
        next();
});


fs.watch("views", () => {
    render();
})

function render() {
    var files = fs.readdirSync("views");

    for (file of files) {
        try {
            var fn = pug.compileFile("views/" + file);
            var html = fn();
        } catch (e) {
            console.log(e)
            console.warn("Error!!")
        }
        fs.writeFileSync("public/" + file.substr(0, file.indexOf(".")) + ".html", html);
    }}