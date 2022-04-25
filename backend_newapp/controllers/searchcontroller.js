var spotifyWebApi = require('spotify-web-api-node');

spotifyEngine = new spotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}); 

exports.search = (req,resp)=>{
    var keyword = req.params.keyword;
    var access_token = req.body.access_token;
    spotifyEngine.setAccessToken(access_token);
    spotifyEngine.searchTracks(keyword)
    .then((data)=>{
        resp.status(201).json({
            details: data
        });
    }, (err)=>{
        console.log(err);
    });
}