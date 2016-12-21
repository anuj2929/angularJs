var connect =require("connect"),
serveStatic=require('serve-static');

var app=connect();
app.use(serveStatic("./sports"));
app.listen(5000);