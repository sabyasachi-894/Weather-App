const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;
// static page serve

static_path = path.join(__dirname, "../public");
viewsPath = path.join(__dirname, "../templates/views");
partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);



app.use(express.static(static_path));


//routing
app.get("/", (req,res) => {
    res.render("index.hbs");
})

app.get("/about", (req,res) => {
    res.render("about.hbs");
})

app.get("/weather", (req,res) => {
    res.render("weather");
})

app.get("*", (req,res) => {
    res.render("404error", {
        errorMsg: "Oops wrong credentials in address bar :("
    });
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
