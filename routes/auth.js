var express  = require('express'),
    router   = express.Router(),
    passport = require('passport');

//Do shit.
router.route('/linkedin')
  .get(passport.authenticate('linkedin', { state: 'SOME STATE' }),
  (req, res) => {
    // Don't really need todo shit here.
  });

router.route('/linkedin/callback')
  .get(passport.authenticate('linkedin', {
    successRedirect: '/profile',
    failureRedirect: '/'
  }));

module.exports = router;
