var crypto = require('crypto');
var request = require('request');
//var resource = require('./cli.js');

//var resource = 'accounts'
//function send(resource) {
function send(resource) {

var apiKey = '2q7DfBj1Gcik5lBE';
var apiSecret = 'ArtDbY362yWeW35whuXNeQzYC5nunFTW';

var timestamp = Math.floor(Date.now() / 1000);

var req = {
    method: 'GET',
    path: '/api/v3/brokerage' + resource,
    body: ''
};

var message = timestamp + req.method + req.path + req.body;

//var signature = CryptoJS.hmacsha256("sha256", apiSecret)
var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

var options = {
    baseUrl: 'https://api.coinbase.com/',
    url: req.path,
    method: req.method,
    headers: {
        'CB-ACCESS-SIGN': signature,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-KEY': apiKey,
        'CB-VERSION': '2015-07-22'
    }
};

request(options,function(err, response){
    if (err) console.log(err);
    console.log(response.body);
    return response.body

});
}

//send('accounts')


module.exports = {
send
}
