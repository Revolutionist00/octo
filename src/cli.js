import { select } from '@inquirer/prompts';
import * as test from './test.cjs'

//const { send } = pkg
const resource = await select({
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
		{
		name: 'Get Product Book',
		value: '/product_book'
		},
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

//export = resource
//export
//console.log(resource)
test.send(resource)
