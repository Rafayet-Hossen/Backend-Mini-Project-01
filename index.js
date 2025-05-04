const express = require('express');
const app = express();
const path = require('path');

//this is perser for json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render("index");
});

app.get('/profile/:username', (req, res) => {
    req.params.username = req.params.username.toUpperCase();
    res.send(`<h1>Welcome ${req.params.username}</h1>`);
});

app.get("/author/:username/:age", (req, res) => {
  req.params.age = req.params.age;
  req.params.username = req.params.username;
  res.send(`<h1>Welcome ${req.params.username} ${req.params.age}</h1>`);
});

app.listen(5100,()=>{
    console.log("Server is running on port 5100");
})