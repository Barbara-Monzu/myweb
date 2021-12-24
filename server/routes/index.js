const router = require("express").Router();

const SpotifyWebApi = require('spotify-web-api-node');


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));


router.get("/songs", (req, res, next) => {
spotifyApi.searchTracks('artist:Jeidi Mel')
.then((data =>  {
  console.log('Albums information', data.body);
  res.json(data.body);
  }));

});


module.exports = router;
