var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('page2', { 
  	title: 'Page 2',
  	mainScript: 'page2'
  });
});

module.exports = router;
