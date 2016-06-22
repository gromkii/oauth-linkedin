var express  = require('express'),
    router   = express.Router(),
    passport = require('passport');

//Do shit.
router.route('/linkedin')
  .get(passport.authenticate('linkedin', { state: somestate }),
  (req, res) => {
    // Don't really need todo shit here.
  });

module.exports = router;
