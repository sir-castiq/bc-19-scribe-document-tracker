var express = require('express');
var router = express.Router();

/* GET documents listing. */
router.get('/', function(req, res, next) {
  res.send('documents page');
});

module.exports = router;
