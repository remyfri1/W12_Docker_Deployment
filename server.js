'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
res.send('Hello FS2024 DevOps Course done by remy / to make it intersting we have made a couple of changes to this file');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);