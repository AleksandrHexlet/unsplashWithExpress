const router = require('express').Router();
const { cards } = require('../data/cards');

router.get('/cards', (req, res) => { // при запросе на /users  вернули JSON-список всех пользователей
  res.status(200).send(cards);
});

module.exports = router;
