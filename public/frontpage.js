con.emit("get_posts", null, "get")
con.on("posts", posts =>{
    

    posts.sort((a, b) =>{
        return b.date - a.date;

    })
    
    for(var post of posts){
        document.body.innerHTML += `<div class="posts"><span class="username">posted by: ${post.username} on ${new Date(Number(post.date)).toDateString()}</span><span class="title">${post.title}</span><span class="text">${post.text}</span></div>`
    }
//<div class="posts"><span class="username">Agman</span><span class="title">this is a post</span><span class="text">heehaidfhasodi</span><span class="date">1394123</span></div>
})

