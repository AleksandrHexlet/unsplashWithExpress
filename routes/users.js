const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const users = require('../data/users.json');

const wayUsers = path.join(__dirname, '../data/users.json');

router.get('/users/:id', (req, res) => {
  fs.readFile(wayUsers, { encoding: 'utf8' }, () => {
    // eslint-disable-next-line no-underscore-dangle
    const user = users.find((item) => item._id === req.params.id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
  });
});

router.get('/users', (req, res) => {
  fs.readFile(wayUsers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).send('Users is not found');
      return;
    }
    res.status(200).send(JSON.parse(data));
  });
});

module.exports = router;
