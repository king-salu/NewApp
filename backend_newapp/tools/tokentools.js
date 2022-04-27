var express = require('express');
var user_model = require('../models/userModel');
//require('../controllers/tokencontroller');

const cookie_code = 'tkntbu4cu'

exports.cookie_code = cookie_code;

exports.cur_token = async (req,resp)=>{
    var cur_tko = null;
    try{
        const _id_ = req.params.id;
        var user = await user_model.user_model.findOne({id: _id_});
        if(user){
            cur_tko = user.access_token;
        }
    } catch(err){
        resp.status(400).json({
            message: err
        });
    }
    // let rp_rq_cookies = (resp.cookies) ? resp.cookies : req.cookies;
    // var cur_tko = null;
    // console.log('hello',rp_rq_cookies);
    
    // if(rp_rq_cookies){
    //     const cookie_res = JSON.parse(rp_rq_cookies[cookie_code]);
    //     cur_tko = cookie_res.keyset;
    // }

    return cur_tko;
}