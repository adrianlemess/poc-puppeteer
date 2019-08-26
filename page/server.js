const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));
app.get('/health', (req, res) => res.send({ status: 'up' }));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));

app.listen(8080, () => {
    console.log('App is Running');
});
