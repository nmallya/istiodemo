var express = require('express');
var fetch = require('node-fetch')
var router = express.Router();
var async = require('async');


/* GET home page. */
// TODO: error handling needs to be done when the fetch fails
router.get('/pet/:id', function(req, res, next) {
  async.parallel([
    function(callback) {
      fetch('http://petdetailsservice:9081/pet/123/details')
          .then(res => res.text())
          .then(body => callback(null, body));
        ;
    },
    function(callback) {
      fetch('http://petmedicalhistoryservice:9082/pet/123/medicalhistory')
          .then(res => res.text())
          .then(body => callback(null, body));
        ;
    }
], function(err, results) {
    res.json({petDetails: JSON.parse(results[0]), petMedicalHistory: JSON.parse(results[1])});
});
});



module.exports = router;
