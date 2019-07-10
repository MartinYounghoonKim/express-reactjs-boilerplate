var express = require('express');
var router = express.Router();
const User = require("../database/models/index").User;
const Todos = require("../database/models/index").Todos;

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const users = await User.findAll();
    const todos = await Todos.findAll();
    await Todos.create({
      text: "aaa",
      isDone: "true"
    });
    res.json({
      todos,
      users
    });
  } catch (e) {
    console.log("error =>", e);
  }
  res.send({ "test": "1" });
});
router.get('/test', function(req, res, next) {
  res.status(500).json({ message: "테스트" });
});

module.exports = router;
