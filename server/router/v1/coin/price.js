const express = require('express');
const router = express.Router();
const fetchJson = require('../../../utils/fetchreq');
const BaseUrl ='https://min-api.cryptocompare.com/data/';


//localhost:3000/price/fsymbol/121/tsymbol/234
//router.get('/fsymbol/:fs/tsymbol/:ts'
//req.params.fs
//localhost:3000/v1/price/onecoin?fsym=ETH&tsyms=BTC,USD
router.get('/onecoinprice',async (req,res)=>{
    //console.log(fetchJson);
    //console.log(req.headersSent);
    console.log(req.query);
    try{
        let url = `${BaseUrl}price?fsym=${req.query.fsym}&tsyms=${req.query.tsyms}`;
        let JsonData = await fetchJson(url);
        return res.status(200).send(JsonData); 
    }catch(e){
        return res.status(500).send({
            msg: e.message
        });
    }
});

//localhost:3000/v1/price/multicoin?fsyms=ETH,MUSIC&tsyms=BTC,USD 
router.get('/multicoinprice',async (req,res)=>{
    try{
        let url = `${BaseUrl}pricemulti?fsyms=${req.query.fsyms}&tsyms=${req.query.tsyms}`;
        let JsonData = await fetchJson(url);
        return res.status(200).send(JsonData);
    }catch(e){
        return res.status(500).send({
            msg: e.message
        });
    }
});


router.get('/priceHistorical',async (req,res)=>{
    try{
        let url = `${BaseUrl}pricehistorical?fsym=${req.query.fsym}&tsyms=${req.query.tsyms}`;
        if(req.query.time){
            let time = dateToTimestamp(req.query.time);
            url += `&ts=${time}`;
        }
        if (req.query.exchanges) url += `&e=${req.query.exchanges}`;
        if (req.query.tryConversion === false) url += '&tryConversion=false';
        let JsonData = await fetchJson(url);
        return res.status(200).send(JsonData);
    }catch(e){
        return res.status(500).send({
            msg: e.message
        });
    }
    
});

router.get('/a',(req,res,next)=>{
    fetch('http://offline-news-api.herokuapp.com/stories').then(res => {
        //console.log(x)
        return res.json()
    }).then(y => {
        return res.status(200).send(y); 
    })
});


router.get('/b', async (req,res) => {
    const response = await fetch('http://offline-news-api.herokuapp.com/stories')
    const y = await response.json()
    return res.status(200).send(y); 
    // fetch('http://offline-news-api.herokuapp.com/stories').then(res => {
    //     //console.log(x)
    //     return res.json()
    // }).then(y => {
    //     return res.status(200).send(y); 
    // })
});


module.exports = router;