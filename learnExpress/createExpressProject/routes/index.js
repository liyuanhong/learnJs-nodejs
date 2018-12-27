var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'createExpressProject' });
});

router.get('/hello',function(req,res){
  res.send("hello world !");
});


module.exports = router;
