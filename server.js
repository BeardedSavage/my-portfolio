import express from "express";
import bodyParser from "body-parser";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQrdqnKbwecpXyuz0Kl0VMY9-PvbrhgTM",
  authDomain: "anchored-in-christ-7c990.firebaseapp.com",
  projectId: "anchored-in-christ-7c990",
  storageBucket: "anchored-in-christ-7c990.firebasestorage.app",
  messagingSenderId: "1073902445710",
  appId: "1:1073902445710:web:df6d1c4ed184d18bc215df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const route = express();

const port = process.env.PORT || 3000;

route.use(express.static("public"));
route.use(bodyParser.urlencoded({extended: true}));

route.get("/", (req, res) => {
    res.render("index.ejs");
});

route.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

route.get("/hobbies", (req, res) => {
    res.render("hobbies.ejs");
});

route.listen(port, () => {
    console.log(`Server running on port ${port}`);
});