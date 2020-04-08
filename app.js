const express = require('express');
const path = require('path');
const routerCards = require('./routes/cards');
const routerUsers = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use(routerCards);
app.use(routerUsers);
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello World.Port in ${PORT}`);
  // eslint-disable-next-line no-console
  console.log(`Thank's for you job :):).Server started in ${PORT}`);
});
