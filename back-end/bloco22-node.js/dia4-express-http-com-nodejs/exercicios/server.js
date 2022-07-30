const express = require('express');

const app = express();

app.use(express.json()); // bodyParser nativo

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }))

const port = 3001
app.listen(port, () => console.log(`Listening at port ${port}`))