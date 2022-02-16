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
app.get('/tip/:total/:tipPercentage', function (req, res) {
    res.send(req.params);
});
//Should I be modifying the req.params like req.params.tipPercentage???
//I think I need to do this to get the value of the tip? 


//MAGIC 8 BALL
const sayings = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic', function (req, res, next) {
    res.send("Will I be a millionaire?")
    next()
}, (req, res) => {
    res.send(sayings[req.params.indexOfSayings]);
});
// I know this needs to be in here somewhere --  '/magic/Will%20I%20Be%20A%20Millionaire'
// So know the h1 tags need to be inside curly brackets, but I'm just not sure where it goes above
// Somehow I need to link it to the res.send on line40??




