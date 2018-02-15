var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pet/:id/details', function(req, res, next) {
  res.json({petName: 'Maximus', petAge: 5, petOwner: 'Nithin Mallya', petBreed: 'German Shepherd Dog'});
});

module.exports = router;
