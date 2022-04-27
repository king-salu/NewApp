var tokentool = require('../tools/tokentools');
var spotifyWebApi = require('spotify-web-api-node');

spotifyEngine = new spotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}); 

exports.user_details = (req,resp) =>{
    var access_token = tokentool.cur_token(req,resp);
    spotifyEngine.setAccessToken(access_token);

    spotifyEngine.getMe()
    .then(data=>{
        //console.log(data);
        resp.status(201).json({
            details: data
        })
    },
    (err)=>{
        console.log(err);
        resp.status(400).json({
            status: "failed",
            message: err
        });
    })
}