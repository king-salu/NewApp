const mongoose = require('mongoose');
var request = require('request');
var tokentool = require('../tools/tokentools');
var datatool = require('../tools/datatools');
var spotifyWebApi = require('spotify-web-api-node');

const DBconn = process.env.DATABASE.replace('<DATABASE_PASSWORD>',process.env.DATABASE_PASSWORD);

mongoose
.connect(DBconn,{
//.connect(process.env.DATABASE_LOCAL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(con=>{
    //console.log(con.connections);
    console.log('DB connection successful');
});

spotifyEngine = new spotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}); 

exports.new_release = (req,resp)=>{
    //console.log(req.params);
    resp.status(201).json({
        status: "entered new library"
    });
    const access_token = tokentool.cur_token(req);
    spotifyEngine.setAccessToken(access_token);
    var options = {
        limit : 5, offset: 0, country: 'NG'
    }
    spotifyEngine.getNewReleases(options)
    .then((data)=>{
        const redata = datatool.spotify_music_rearray(data);
        console.log(redata);
        resp.status(201).json({
            details: redata
        });
    },(err)=>{
        console.log(err);
    });
}