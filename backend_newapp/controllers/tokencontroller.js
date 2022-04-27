var request = require('request');
var express = require('express');
var tokentool = require('../tools/tokentools');
var userModel = require('../models/userModel');

const cookie_code = tokentool.cookie_code;

exports.setup_accesstoken = (req,resp) =>{
    //console.log(req);
    const access_token = req.params.access_token;
    //const user_id = req.body.id;
    var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };

    //console.log(options);
    request.get(options, function(error, response, body) {
        //console.log(body);
        if(response.statusCode==200){
            const newUser = new userModel.user_model({
                id: body.id,
                display_name: body.display_name,
                email: body.email,
                access_token,
                country: body.country
            });

            console.log(newUser);
            //Save details
        }
        resp.status(response.statusCode).json({
            details: body
        });
      });

}

exports.get_cur_token = (req,resp) =>{
    //console.log(req);
    var cur_token = tokentool.cur_token(req,resp);

    resp.status(201).json({
        access: cur_token
    });
}