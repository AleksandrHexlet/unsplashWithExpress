const router = require('express').Router();
const { users } = require('../data/users');


router.get('/users/:id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((item) => item._id === req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
});

router.get('/users', (req, res) => { // при запросе на /users  вернули JSON-список всех пользователей
  res.send(users);
});

module.exports = router;
