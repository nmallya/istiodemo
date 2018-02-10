var fetch = require('node-fetch')

function getResponse(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        response.json().then(json => {
          resolve(JSON.stringify(json));
        });
      })
      .catch(error => {
        reject(error);
      });
  })
}



async function addAll(){
  let allServiceResponse = [];
  allServiceResponse.push(await getResponse('http://services.groupkt.com/country/get/iso2code/US'));
  allServiceResponse.push(await getResponse('http://services.groupkt.com/country/get/iso2code/IN'));
  console.log(JSON.parse(allServiceResponse[0]));
  console.log(JSON.parse(allServiceResponse[1]));
}


addAll();


// console.log(
//   `City: ${json.results[0].formatted_address} -`,
//   `Latitude: ${json.results[0].geometry.location.lat} -`,
//   `Longitude: ${json.results[0].geometry.location.lng}`
// );
