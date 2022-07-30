const express = require('express');
const app = express();


app.use(express.json()); // bodyParser nativo

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));
app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ "message": `Hello, ${name}` });

})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) {
    return res.status(200).json({ "message": `Hello, ${name}` });
  }
  
  return res.status(401).json({ "message": "Unanthorized" });
})

const port = 3001;
app.listen(port, () => console.log(`Listening at port ${port}`));