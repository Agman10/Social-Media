const md5 = require("md5");
const pug = require("pug");
const fs = require("file-system");
var path = require('path');
const cookie = require("cookie-parser")

const connectia = require("connectia");
const con = new connectia(__dirname + "/public", 3000, false);




//var express = require('express')
//var app = express()
//var http = require("http");
var escape = require("sqlstring").escape

con.app.set("view engine", "pug")
con.app.use(cookie());

function parseToken(token){
    return{
        username: token.substr(0, token.lastIndexOf("_")),
        password: token.substr(token.lastIndexOf("_") + 1)
    }
}

function login(req, _callback){
    if(req.cookies.token){
        var token = parseToken(req.cookies.token);
        var username = token.username
        var password = token.password
        getUser(username, user =>{
            if(user){
                if(user.password===password){
                   /*  res.render("index.pug", {
                        username: user.username
                    }) */
                    _callback(user)
                    return;
                }
            }
            _callback(false)
        })
    } else {
        _callback(false)
    }
}

//redirecta när du inte är inloggad
con.app.get("/", (req, res) =>{
    login(req, user => {
        if(user){
            res.render("index.pug", {
                username: user.username
            })
        } else {
            res.render("login.pug")
        }
    })
})

//skicka tillbaka om man inte är inloggad
con.app.get("/post.html", (req, res) =>{
    login(req, user => {
        if(user){
            res.render("post.pug", {
                username: user.username
            })
        } else {
            res.render("login.pug")
        }
    })
})

con.app.get("/login.html", (req, res) =>{
    res.render("login.pug")
})

con.app.get("/post.html", (req, res) =>{
    res.render("post.pug")
})

//mysql
var MYSQL_CONF = JSON.parse(fs.readFileSync("MySQL.json", "utf8"));
var mysql = require('mysql');
var connection = mysql.createConnection(MYSQL_CONF);
connection.connect();
console.log("Connected to " + MYSQL_CONF.database + " database.");


/* function getUser, user =>{
    if(user){
    }else{
        connection.query(`INSERT INTO User (username, password) VALUES (${escape(message.username)}, ${escape(md5(message.password))})`, (error,response)=>{
            if(!error){
                emit("err", "your account has been created")
            }
        })
    }
} */

//hemsida kod
//skapa användare
con.on("login", (message, emit) => {
    getUser(message.username, user =>{
        if(user){
            if(md5(message.password)===user.password){
                emit("token", user.username + "_" + user.password)
            }else {
                emit("err", "wrong password")
            }
        }else{
            connection.query(`INSERT INTO User (username, password) VALUES (${escape(message.username)}, ${escape(md5(message.password))})`, (error,response)=>{
                if(!error){
                    emit("err", "your account has been created")
               }
            })
        }})
});
    

    /* //kolla om användaren finns
    loginUser(message.username, message.password, user =>{
        //if(user, password){
        //}else{
            connection.query(`SELECT * FROM User WHERE username = ${escape(username)} AND ${escape(password)}`, (error, response)=>{
                if(!error){
                    emit("err", "logging in")
                }
            })
        //}
    })
 */

function getUser(username, _callback){
    connection.query(`SELECT * FROM User WHERE upper(username) = upper(${escape(username)})`, (error, response)=>{
        if(error){
            console.log(error)
            
        }else{
            _callback(response[0])
            
        }
    })
}

con.on("post", (post, emit)=>{
    console.log(post)
    console.log(username)
    console.log(req.cookies.token)
    var token = parseToken(post.token)
    getUser(token.username, user =>{
        console.log(user)
        if(user.password == token.password){
            connection.query(`INSERT INTO post (title, post, username) VALUES (${escape(post.title)}, ${escape(post.post)}, ${escape(user.username)})`, (error, response)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log("hej")
                }
            })
        }
    })
            
       

})