// Bappnet Server
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = 3009;
const host = '127.0.0.1';

 


app.use(cors());
app.use(bodyParser.json());

app.use('/', apiRoutes);
//app.post('/api', apiRoutes);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../monday-main/build')));

app.get('*', function (_req, res) {
    res.status(404);
    res.send('NOT ALLOWED');
});

app.post('*', function (_req, res) {
    res.status(404);
    res.send('NOT ALLOWED');
});

app.listen(PORT, () => {
    console.log(`Run at: http://${host}:${PORT}`);
    });