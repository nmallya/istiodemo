var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pet/:id/medicalhistory', function(req, res, next) {
  res.json({vaccinationList: ['Bordetella, Leptospirosis, Rabies, Lyme Disease']});
});

module.exports = router;
