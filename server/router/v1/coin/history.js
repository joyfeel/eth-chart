const express = require('express');
const router = express.Router();
const fetchJson = require('../../../utils/fetchreq');
const BaseUrl ='https://min-api.cryptocompare.com/data/'; 

router.get('/histoMinute',async (req,res)=>{
    try{
        let url = `${BaseUrl}histominute?fsym=${req.query.fsym}&tsym=${req.query.tsym}`;
        if (req.query.limit) {
            if(req.query.limit>2000)
                req.query.limit = 2000;
            url += `&limit=${req.query.limit}`
        }
        if (req.query.tryConversion === false) url += '&tryConversion=false'
        if (req.query.aggregate) url += `&aggregate=${req.query.aggregate}`
        if (req.query.time){
            let time = dateToTimestamp(req.query.time);
            url += `&toTs=${req.query.time}`
        } 
        let JsonData = await fetchJson(url);
        return res.status(200).send(JsonData);
    }catch(e){
        return res.status(500).send({
            msg: e.message
        });
    }
});


router.get('/histoHour',async (req,res)=>{
    try{
        let url = `${BaseUrl}histohour?fsym=${req.query.fsym}&tsym=${req.query.tsym}`;
        if (req.query.limit) {
            if(req.query.limit>2000)
                req.query.limit = 2000;
            url += `&limit=${req.query.limit}`
        }
        if (req.query.tryConversion === false) url += '&tryConversion=false'
        if (req.query.aggregate) url += `&aggregate=${req.query.aggregate}`
        if (req.query.time){
            let time = dateToTimestamp(req.query.time);
            url += `&toTs=${req.query.time}`
        } 
        let JsonData = await fetchJson(url);
        return res.status(200).send(JsonData);
    }catch(e){
        return res.status(500).send({
            msg: e.message
        });
    }
});


router.get('/histoDay',async (req,res)=>{
    try{
        let url = `${BaseUrl}histoday?fsym=${req.query.fsym}&tsym=${req.query.tsym}`;
        if (req.query.limit){
            if(req.query.limit>2000)
                req.query.limit = 2000;
            url += `&limit=${req.query.limit}`
        } 
        if (req.query.tryConversion === false) url += '&tryConversion=false'
        if (req.query.aggregate){
            if(req.query.aggregate>30)
                req.query.aggregate = 30;
            url += `&aggregate=${req.query.aggregate}`
        } 
        if(req.query.time){
            time = dateToTimestamp(req.query.time);
            url += `&ts=${time}`;
        }
        let JsonData = await fetchJson(url);
        return res.status(200).send(JsonData);
    }catch(e){
        return res.status(500).send({
            msg: e.message
        });
    }
});


module.exports = router;