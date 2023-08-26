import { select } from '@inquirer/prompts';
//import http from 'node:http';
//import net from 'node:net';
//import URL from 'node:url';
//import got from 'got';
import * as rest from 'rest-facade';
//const { URL } = require('node:url');
let crypto;
let resource;

crypto = await import('node:crypto');

const main = await select({
  message: 'Welcome to Octo, Select a mode',
  choices: [
  {
	name: 'User',
 	value: 'user'
  },
  {
  name: 'Start Bot',
  value: 'bot'
  },
  {
  name: 'Options',
  value: 'options'
  }
  ],
});

if ( main === "user" ) {
resource = await select({
message: 'Select a package manager',
	choices: [
	{
	name: 'List Accounts',
	value: '/accounts'
	},
	{
	name: 'Cancel Orders',
	value: '/orders/batch_cancel'
	},
	{
	name: 'List Orders',
	value: '/orders/historical/batch'
	},
	{
	name: 'List Fills',
	value: '/orders/historical/fills'
	},
	{
	name: 'Get Best Bid/Ask',
	value: '/best_bid_ask'
	},
//		{
//		name: 'Get Product Book',
//		value: '/product_book'
//		},
	{
	name: 'List Products',
	value: '/products'
	},
	{
	name: 'Get Tran-sactions Summary',
	value: '/transaction_summary'
	}
 ],
});
} else if ( main === "options" ) {

const option = await select({
  message: 'Options menu',
  choices: [
  {
	name: 'Currencies',
 	value: 'crypto-currencies'
  },
  {
  name: 'Time frame',
  value: 'time'
  },
  {
  name: 'Account',
  value: 'account'
  },
  {
  name: 'N/a',
  value: 'null'
  }
  ],
});
}

//};
console.log(resource)

const apiKey = '2q7DfBj1Gcik5lBE';
const apiSecret = 'ArtDbY362yWeW35whuXNeQzYC5nunFTW';

const timestamp = Math.floor(Date.now() / 1000);

const req = {
    method: 'GET',
    path: '/api/v3/brokerage' + resource,
    body: ''
};

if ( resource === '/orders/' || resource === '/orders/batch_cancel' ) {
req.method = 'POST';
};

const message = timestamp + req.method + req.path + req.body;

var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

const options = {
    url: req.path,
    method: req.method,
    baseUrl: 'https://api.coinbase.com',
    headers: {
        'CB-ACCESS-SIGN': signature,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-KEY': apiKey,
        'CB-VERSION': '2015-07-22'
    },
};

let query
var Request = new rest.Client(options.baseUrl + options.url, options);

if ( resource === '/accounts' ) {
query = '{limit: 250}'
await Request
  .getAll(query)
  .then(function (data) {
    console.log(data)
});
};

if ( resource === '/orders/historical/batch' ) {
query = '{order_type=LIMIT&order_side=BUY}'
// need to add select menu for more options
await Request
  .getAll(query)
  .then(function (data) {
    console.log(data)
});
};

if ( resource === '/products' ) {
query = '{limit: 769}'
await Request
  .getAll(query)
  .then(function (data) {
    for (const [key, value] of Object.entries(data.products)) {
console.log(value)
};
//    console.log(Object.values(data))
});
};
//
//const array1 = []
//
//await Request
//  .getAll(query)
//  .then(function (data) {
//    for (const [key, value] of Object.entries(data)) {
//    array1.push(Object.values(value).slice(2, 3));
//    }
//  });
//const currencies = String(Object.values(array1));
//    console.log(currencies)
