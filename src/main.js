import { select } from '@inquirer/prompts';
import http from 'node:http';
import net from 'node:net';
import URL from 'node:url';
import * as rest from 'rest-facade';
//const { URL } = require('node:url');
let crypto;

crypto = await import('node:crypto');

// Create a local server to receive data from
//const server = http.createServer();

// Listen to the request event
//server.on('request', (request, res) => {
//  res.writeHead(200, { 'Content-Type': 'application/json' });
//  res.end(JSON.stringify({
//    data: 'Hello World!',
//  }));
//});
//
//server.listen(8080);
//const { send } = pkg

var resource = '/products'
const menu = await select({
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

//}

if ( menu === 'user' ) {
const resource = await select({
	message: 'Select a package manager',
	  choices: [
		{
		name: 'List Accounts',
		value: '/accounts?limit=250'
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

//console.log(send(resource))

}
//async function send(resource) {

const apiKey = '2q7DfBj1Gcik5lBE';
const apiSecret = 'ArtDbY362yWeW35whuXNeQzYC5nunFTW';

const timestamp = Math.floor(Date.now() / 1000);

const req = {
    method: 'GET',
    path: '/api/v3/brokerage' + resource,
    body: ''
};

if ( resource === '/orders' || resource === '/orders/batch_cancel' ) {
req.method = 'POST';
};

const message = timestamp + req.method + req.path + req.body;

const signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");
//const signature = hex(hmac256(message, apiSecret));

//axios.get({options})
//.then(function (response) {
//    // handle success
//    console.log(response);
//  })
//
////}


//// Create an HTTP server

//
//server.on('connect', (req, clientSocket, head) => {
//  // Connect to an origin server
//  const { port, hostname } = new URL(`http://${req.url}`);
//  const serverSocket = net.connect(port || 8081, hostname, () => {
//    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
//                    'server-agent: Node.js-server\r\n' +
//                    '\r\n');
//    serverSocket.write(head);
//    serverSocket.pipe(clientSocket);
//    clientSocket.pipe(serverSocket);
//  });
//});

// Now that server is running
//server.listen(8081, '127.0.0.1', () => {

  // Make a request to a tunneling server
const options = {
    url: req.path,
    method: req.method,
    baseUrl: 'https://api.coinbase.com',
//    hostname: 'api.coinbase.com',
//    port: 8081,
//    host: '127.0.0.1',
    headers: {
        'CB-ACCESS-SIGN': signature,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-KEY': apiKey,
        'CB-VERSION': '2015-07-22' 
    }
   };
//

var Request = new rest.Client(options.baseUrl + options.url, options);

//Users.get({ id: 1 });  // Resolves to http://domain.com/users/1
Request
  .getAll()
  .then(function (data) {
    console.log(data);
  });

//console.log(options)
// The URL can have several dynamic params.
//var UserVideos = new rest.Client('http://domain.com/users/:userId/videos/:slug');
