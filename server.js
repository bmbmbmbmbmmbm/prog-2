var express = require("express");
var app = express();

app.use(express.static("../prog-2"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3003, function(){
   console.log("Example is running on port 3003");
});
