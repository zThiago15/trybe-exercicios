const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());


const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.length <= 5) {
    return res.status(400).json({ "message": "invalid data" });
  }

  next();
}

const validateInitials = (req, res, next) => {
  const { initials } = req.body;

  if (!initials || initials.length > 3 || initials !== initials.toUpperCase()) {
    return res.status(400).json({ "message": "invalid data" });
  }

  next();
}

const validateCountry = (req, res, next) => {
  const { country } = req.body;

  if (!country || country.length <= 3) {
    return res.status(400).json({ "message": "invalid data" });
  }

  next();
}

const createFile = (name, initials, country, league) => {
  fs.appendFileSync('teams.json', JSON.stringify({ name, initials, country, league }));

}

app.post('/teams', validateName, validateInitials, validateCountry, (req, res) => {
  const { name, initials, country, league } = req.body;

  createFile(name, initials, country, league);


  return res.status(200).json({ name, initials, country, league })
})

app.get('/teams', (req, res, next) => {
  const dataTeam = fs.readFileSync('teams.json', 'utf-8');

  if (!dataTeam) {
    return res.status(200).json({ "teams": [] });
  }

  return res.status(200).json([JSON.parse(dataTeam)]);

});

app.listen(3001, () => console.log('Listening at port 3001'));