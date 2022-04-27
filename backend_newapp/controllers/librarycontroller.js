var request = require('request');
var tokentool = require('../tools/tokentools');
var datatool = require('../tools/datatools');
var spotifyWebApi = require('spotify-web-api-node');



spotifyEngine = new spotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}); 

exports.new_release = (req,resp)=>{
    //console.log(req.params);
    const access_token = tokentool.cur_token(req,resp);
    spotifyEngine.setAccessToken(access_token)
    
    var options = {
        limit : 5, offset: 0, country: 'NG'
    }
    spotifyEngine.getNewReleases(options)
    .then((data)=>{
        const redata = datatool.spotify_music_rearray(data);
        //console.log(redata);
        resp.status(201).json({
            details: redata
        });
    },(err)=>{
        resp.status(400).json({
            status: "failed",
            message: err
        });
    });
}