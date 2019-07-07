var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({"test": 1});
});
router.get('/test', function(req, res, next) {
  res.status(500).json({ message: "테스트" });
});

module.exports = router;
