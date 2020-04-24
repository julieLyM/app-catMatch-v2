require('dotenv').config();
const express = require('express');
const path = require('path');
const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

middlewares(app);
routes(app);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listen ${PORT}`));
