var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From BFLP IT 19 _ Asep Mahmudin" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World Ace 123123" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
