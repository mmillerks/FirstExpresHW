const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:$[port`)
});


//GREETINGS
app.get('/greeting", (req, res) => {
    res.send("Hello, Stranger");
});

app.post('/:name', (req, res) => {
    res.send("What's up, ${name}");
});


