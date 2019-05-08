const con = new Connectia("http://127.0.0.1:3000")

function login(){
    

    var cred = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    //
    con.emit("login", cred)
    console.log(cred)
}