var express = require('express');
//require('../controllers/tokencontroller');

const cookie_code = 'tkntbu4cu'

exports.cookie_code = cookie_code;

exports.cur_token = (req)=>{
    var cur_tko = null
    if(req.cookies){
        const cookie_res = JSON.parse(req.cookies[cookie_code]);
        cur_tko = cookie_res["keyset"];
    }

    return cur_tko;
}