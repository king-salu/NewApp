var request = require('request');
var express = require('express');
var tokentool = require('../tools/tokentools');

const cookie_code = tokentool.cookie_code;

exports.setup_accesstoken = (req,resp) =>{
    //console.log(req.body);
    const access_token = req.body.access_token;
    //const user_id = req.body.id;
    var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };

    request.get(options, function(error, response, body) {
        if(!error){
            const user_id = body.id;
            const val2bu = JSON.stringify({
                current: user_id,
                keyset: access_token
            });
            resp.cookie(cookie_code,val2bu);

            resp.status(201).json({
                status: 'success'
            });
        }
        else{
            resp.status(400).json({
                status: 'failed',
                message: body
            });
        }
      });

}

exports.get_cur_token = (req,resp) =>{
    //console.log(req);
    var cur_token = tokentool.cur_token(req);

    resp.status(201).json({
        access: cur_token
    });
}