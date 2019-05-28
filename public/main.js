const con = new Connectia()


function login(){
    

    var cred = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    //
    con.emit("login", cred)
    console.log(cred)
}
con.on("token", token =>{
    console.log(token)
    document.cookie = "token=" + token;
    location.href = "/"
})

con.on("err", err =>{
    alert(err)


})


function post(){
    var token
    var arr = document.cookie.split(";")
    for(var cookie of arr){
        if(cookie.trim().indexOf("token=") == 0){
            token = (cookie.trim().substr(6))
        }
    }
    var post = {
        title: document.getElementById("title").value,
        text: document.getElementById("text").value,
        token: token
    }
    con.emit("post", post)
    
    console.log(post)
}