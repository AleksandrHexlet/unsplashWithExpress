const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const wayCards = path.join(__dirname, '../data/cards.json');

router.get('/cards', (req, res) => {
  fs.readFile(wayCards, { encoding: 'utf8' }, (err, cards) => {
    if (err) {
      res.status(500).send('Cards is not found');
      return;
    }
    res.status(200).send(JSON.parse(cards));
  });
});
module.exports = router;
