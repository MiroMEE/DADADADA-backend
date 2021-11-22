const bodyParser = require("body-parser");
const { RSA_NO_PADDING } = require("constants");
const { name } = require("ejs");
const { response } = require("express");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use(expressLayouts);
app.set("layout","./layouts/main");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database("./info.db", sqlite3.OPEN_READWRITE, (err) => {
        if(err) return console.error(err.message);
            console.log("connection successful");
    });
    const sql = `SELECT * FROM info`;
    db.all(sql, (err,rows)=>{
        if(err) return console.error(err.message);
        return res.render("",{layout:"./layouts/main",text:rows});
    });
});
app.get('/create',(req,res) =>{
    return res.render("create",{layout: "./layouts/main"});
});
app.post('/submit',(req,res) =>{
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database("./info.db", sqlite3.OPEN_READWRITE, (err) => {
        if(err) return console.error(err.message);
            console.log("connection successful");
    });
    const first = req.body.dataInput;
    const sql = `INSERT INTO info(first)
    VALUES('${first}')`;
    db.run(sql),(err) =>{
    if(err) return console.error(err.message);
        console.log("A new row has been created");
    };
    db.close((err) =>{
        if(err) return console.error(err.message);
    });
    return res.redirect("/");
});
app.listen(port,() => console.info(`Listening on port ${port}`));