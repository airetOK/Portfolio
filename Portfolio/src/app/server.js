const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('/dist/portfolio'));
app.get('/*', function(req,res) {
res.sendFile(path.join('/dist/portfolio/index.html'));});
app.listen(process.env.PORT || 4200);