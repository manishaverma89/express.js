const express = require("express");
const app = express();

// when we type localhost:3000, the get request is being sent to the  route of our web site, which is represented by a forward slash (“ / ”).  So this is basically our home page 

app.get("/" , function(req,res){                                            
res.send("Hello World!");
});

app.get("/contact" , function(req,res){
res.send("contact me at: manisha.verma23@gmail.com");
});

app.get("/about" , function(req,res){
res.send("Hi I Am Manisha verma, A Web Developer");
});

app.get("/hobbies" , function(req,res){
res.send("<ul> <li>Cofee</li><li>Travelling</li><li>Coding</li></ul>")
});

app.listen(3000,function(){
console.log("server started at port 3000");
});

