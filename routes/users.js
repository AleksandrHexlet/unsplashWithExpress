const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { users } = require('../data/users');

const wayUsers = path.join(__dirname, '../data/users.js');


router.get('/users/:id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((item) => item._id === req.params.id);
  fs.readFile(wayUsers, { encoding: 'utf8' }, () => {
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
  });
});

router.get('/users', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  fs.readFile(wayUsers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Cards is not found');
      return;
    }
    res.status(200).send(users);
  });
});

module.exports = router;
