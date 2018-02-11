var fetch = require('node-fetch')

async function getPetInfo(petId) {
  let results = [];

  //TODO: use petId in the below URLs
  let petDetailsResponse = await fetch('http://localhost:9081/pet/123/details');
  let petDetails = await petDetailsResponse.json();

  let petMedicalHistoryResponse = await fetch('http://localhost:9082/pet/123/medicalhistory');
  let petMedicalDetails = await petMedicalHistoryResponse.json();
  results.push(petDetails);
  results.push(petMedicalDetails);

  try {
    let dogInfo = await fetch('https://api.thedogapi.co.uk/v2/dog.php');
    let dogInfoDetails = await dogInfo.json();
    results.push(dogInfoDetails);
  }
  catch (error){
    results.push(error);
  }
  return results;
}

getPetInfo(123).then( results => {
  console.log(results);
  // {petDetails: results[0], petMedicalHistory: results[1], petImageURL: results[2].data[0].url});
});
