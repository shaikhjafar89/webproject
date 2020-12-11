const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

//public static path
const staticpath = path.join(__dirname,"../public");
const viewpath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',viewpath);
hbs.registerPartials(partialpath);


app.use(express.static(staticpath));


// Routing
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errmsg:"OOPS! PAGE NOT FOUND"
    });
});

app.listen(port,()=>{
    console.log(`listning to the port ${port}`)
});