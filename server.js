import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/hobbies", (req, res) => {
    res.render("hobbies.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});