const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(__dirname + './public/index.html');
    res.render('home');
});

router.get('/portfolio', (req, res) => {
  res.json({"test": "Testing rendering"});
});

module.exports = router;
