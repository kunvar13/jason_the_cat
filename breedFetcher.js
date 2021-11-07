const request = require('request');
const fs = require('fs');

const fetchBreedDescription = function(breedNameUrl, callback) {
  request(breedNameUrl, callback);
};
module.exports = {fetchBreedDescription};