const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('/', 'Portfolio/dist/portfolio'));
app.get('/*', function(req,res) {
res.sendFile(__dirname + '/index.html');
});
app.listen(process.env.PORT || 4200);