const express = require('express');
const path = require('path');

const app = express();

const port = process.env.NODE_ENV || 5000;

const expressPath = path.join(__dirname, '../public');
app.use(express.static(expressPath));

app.listen(port, () => {
    console.log(`Server's Running on post ${port}`);
})