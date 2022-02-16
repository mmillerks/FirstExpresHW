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
//Pretty sure I don't have this right. Might need to be req.params.name??
//sbould it be /users/:name???


//TIP CALCULATOR
app.get('/tip/:total/:tipPercentage', function (req,res) {
    res.send(req.params);
});
//Should I be modifying the req.params like req.params.tipPercentage???
//I think I need to do this to get the value of the tip? 


//

