var express = require('express');
//require('../controllers/tokencontroller');

const cookie_code = 'tkntbu4cu'

exports.cookie_code = cookie_code;

exports.cur_token = (req,resp)=>{
    let rp_rq_cookies = (resp.cookies) ? resp.cookies : req.cookies;
    var cur_tko = null;
    console.log('hello',rp_rq_cookies);
    
    if(rp_rq_cookies){
        const cookie_res = JSON.parse(rp_rq_cookies[cookie_code]);
        cur_tko = cookie_res.keyset;
    }

    return cur_tko;
}