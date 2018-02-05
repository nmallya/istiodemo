var fetch = require('node-fetch')
fetch('http://localhost:9080/pet/123')
    .then(res => res.text())
    .then(body => console.log(body));
