const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.end("Test")
});

app.post('/test', (req, res) => {
    res.end("Test")
});

app.listen('3030', (e) => {
    console.log(e)
})