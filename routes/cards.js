const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const wayCards = path.join(__dirname, '../data/cards.js');
const { cards } = require('../data/cards');

router.get('/cards', (req, res) => {
  fs.readFile(wayCards, { encoding: 'utf8' }, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Cards is not found');
      return;
    }
    res.status(200).send(cards);
  });
});
module.exports = router;
