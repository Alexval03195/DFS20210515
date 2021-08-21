var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { nombre: 'Alejandro',fecha:new Date() });
});

module.exports = router;
