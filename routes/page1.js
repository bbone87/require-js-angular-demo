var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('page1', { 
  	title: 'Page 1',
  	mainScript: 'page1'
  });
});

module.exports = router;
