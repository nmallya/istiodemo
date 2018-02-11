var express = require('express');
var fetch = require('node-fetch')
var router = express.Router();
var async = require('async');



async function getPetInfo(petId) {
  let results = [];

  //TODO: use petId in the below URLs
  let petDetailsResponse = await fetch('http://petdetailsservice:9081/pet/123/details');
  let petDetails = await petDetailsResponse.json();

  let petMedicalHistoryResponse = await fetch('http://petmedicalhistoryservice:9082/pet/123/medicalhistory');
  let petMedicalDetails = await petMedicalHistoryResponse.json();

  results.push(petDetails);
  results.push(petMedicalDetails);

  try {
    let dogInfo = await fetch('http://api.thedogapi.co.uk:443/v2/dog.php');
    let dogInfoDetails = await dogInfo.json();
    results.push(dogInfoDetails);
  }
  catch (error){
    results.push(error);
  }
  return results;
}

router.get('/pet/:id', function(req, res, next) {
  getPetInfo(req.query.id).then( results => {
    res.json({petDetails: results[0], petMedicalHistory: results[1], dogAPIResponse: results[2]});
  });
});




module.exports = router;
