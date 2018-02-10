var express = require('express');
var fetch = require('node-fetch')
var router = express.Router();
var async = require('async');


/* GET home page. */
// // TODO: error handling needs to be done when the fetch fails
// router.get('/pet/:id', function(req, res, next) {
//   async.parallel([
//     function(callback) {
//       fetch('http://petdetailsservice:9081/pet/123/details')
//           .then(res => res.text())
//           .then(body => callback(null, body));
//         ;
//     },
//     function(callback) {
//       fetch('http://petmedicalhistoryservice:9082/pet/123/medicalhistory')
//           .then(res => res.text())
//           .then(body => callback(null, body));
//         ;
//     }
// ], function(err, results) {
//     res.json({petDetails: JSON.parse(results[0]), petMedicalHistory: JSON.parse(results[1])});
// });
// });


// function getResponse(url) {
//   console.log('Connecting to url ' + url);
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => {
//         response.json().then(json => {
//           resolve(JSON.stringify(json));
//         });
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }


async function getPetInfo(petId) {
  let results = [];

  //TODO: use petId in the below URLs
  let petDetailsResponse = await fetch('http://petdetailsservice:9081/pet/123/details');
  let petDetails = await petDetailsResponse.json();

  let petMedicalHistoryResponse = await fetch('http://petmedicalhistoryservice:9082/pet/123/medicalhistory');
  let petMedicalDetails = await petMedicalHistoryResponse.json();

  results.push(petDetails);
  results.push(petMedicalDetails);
  return results;
}

router.get('/pet/:id', function(req, res, next) {
  getPetInfo(req.query.id).then( results => {
    res.json({petDetails: results[0], petMedicalHistory: results[1]});
  });
});




module.exports = router;
