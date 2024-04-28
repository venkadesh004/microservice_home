const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true})); 

app.use(cors({origin: "*"}));

app.get("/home/:username", (req, res) => {
    const username = req.params.username;
    // console.log(data["data"][username]);
    res.render("app", data["data"][username]);
});

app.listen(5000, () => {
    console.log("Server is running in PORT 5000");
}) 
