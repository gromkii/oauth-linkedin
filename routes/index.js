var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('index', { title: 'Express'});
});

router.route('/test')
  .get( (req, res) => {
    if (req.session.passport.user) {
      var user = req.session.passport.user;
      res.json(user);
    } else {
      res.send("Testing.");
    }
  });

router.route('/profile')
  .get( (req, res) => {
    eval(locus);
    res.render('profile', { user: req.session.passport.user });
  });

module.exports = router;
