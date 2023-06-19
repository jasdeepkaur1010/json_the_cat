const request = require("request");
const breedName = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
  if(error) {
    console.log("An error occured!", error);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("Sorry, the requested breed not found in our list of breeds!");
    } else {
      console.log(data[0].description);
      // console.log(typeof data);
    }
  }
});
