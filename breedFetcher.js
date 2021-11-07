const request = require('request');
const fs = require('fs');

const fetchBreedDescription = function(breedName, callback) {
  const breedNameUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(breedNameUrl, callback);
};
module.exports = {fetchBreedDescription};