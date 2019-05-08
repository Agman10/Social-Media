const pug = require("pug");
const fs = require("file-system");
var path = require('path');

const connectia = require("connectia");
const con = new connectia(__dirname + "/public", 3000);





//var express = require('express')
//var app = express()
//var http = require("http");
var escape = require("sqlstring").escape



//var server = http.createServer(app);

var port = 3000

//mysql
var MYSQL_CONF = JSON.parse(fs.readFileSync("MySQL.json", "utf8"));
var mysql = require('mysql');
var connection = mysql.createConnection(MYSQL_CONF);
connection.connect();
console.log("Connected to " + MYSQL_CONF.database + " database.");


//hemsida kod
con.on("login", (message, emit) => {
    console.log(message)
    
})



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