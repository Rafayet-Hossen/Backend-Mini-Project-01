const express = require('express');
const app = express();

//this is perser for json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Server is running!");
});

app.listen(5100,()=>{
    console.log("Server is running on port 5100");
})