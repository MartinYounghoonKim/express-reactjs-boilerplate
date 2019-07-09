var express = require('express');
var router = express.Router();
const User = require("../src/models/index").User;

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const users = await User.findAll();
    console.log(users);
    // await User.create({
    //   firstName: "aaa",
    //   lastName: "bbb",
    //   email: "ccc",
    // });
  } catch (e) {
    console.log("error =>", e);
  }
  res.send({ "test": "1" });
});
router.get('/test', function(req, res, next) {
  res.status(500).json({ message: "테스트" });
});

module.exports = router;
