con.emit("get_posts", null, "get")
con.on("posts", posts =>{
    console.log(posts)

})