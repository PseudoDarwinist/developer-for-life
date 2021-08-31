'use strict'
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3001;

const sessions = fs.readFileSync((path.join(__dirname, 'sessions.json')), 'utf8');


app.get('/',(req, res) => {
    res.send('<h1>Hola Salesforce Devs from Express</h1>');
});

app.get('/api/sessions',(req, res) => {
    res.json(JSON.parse(sessions));

});
app.listen(port,() =>{
    console.log(`Express Server running on http://localhost:${port}`);

});