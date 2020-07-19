const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Ok');
})
app.get('/about', function(req, res){
    res.send('about ok');
})

app.listen(3000, function(req, res){
    console.log('connect');
})