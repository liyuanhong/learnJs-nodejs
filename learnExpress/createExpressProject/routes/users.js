var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/registeRouter',function(req,res){
  res.render("registeRouter",{"title":"registRouter"});
});

module.exports = router;
