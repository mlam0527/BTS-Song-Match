const router = require('express').Router();
const User = require('../db/models/user')

router.put('/', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then((user) => {
      if (!user) {
        res.status(401).send('User not found')
      } else if (!user.hasMatchingPassword(req.body.password)) {
        res.status(401).send('Incorrect password')
      } else {
        req.login(user, (err) => {
          if (err) next(err);
          else req.json(user);
        });
      }
    })
    .catch(next);
});

module.exports = router;