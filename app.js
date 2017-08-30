const express = require('express');
const bodyParse = require('body-parser');
const path = require('path')

var app = express();

app.use(bodyParse.json());
app.use('/public', express.static('public'))

app.get('/game',function(req,res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen('8080', function(){
	console.log('Connected to http://localhost:8080');
});