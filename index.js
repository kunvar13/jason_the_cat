const { fetchBreedDescription } = require('./breedFetcher');
const arg = process.argv.splice(2);
const breedNmae = 'siberian';
//const breedNameUrl = `https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`;


fetchBreedDescription(breedNmae, (error,response, desc) => {
  if (error) {
    return null;
  } else {
    const data = JSON.parse(desc);
    //console.log(data);
    //console.log(typeof data);
    return ((data[0]["description"]).trim());
  }
});
//module.exports = { breedNameUrl };
/*fetchBreedDescription(breedNameUrl,() => {
  console.log('test');
});*/