const request = require('request');
const fs = require('fs');
const arg = process.argv.splice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {
  if (body) {
    //console.log(typeof body);
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    console.log(data[0]["description"]);
    return;
  } else if (error) {
    console.log(error);
  }
});