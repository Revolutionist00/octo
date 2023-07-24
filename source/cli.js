import React from 'react';
import {render} from 'ink';
import SelectInput from 'ink-select-input';

const arg = process.argv.slice(2);

switch (arg[0]) {
    case '-l':
        var resource = '/products'
	break;
    case '-a':
	var resource = '/accounts'
	break;
    default: console.log(
        'und');
};

const Demo = () => {
	const handleSelect = item => {
		// `item` = { label: 'First', value: 'first' }
		export let resource = item.value
		console.log(resource)
	};

	const items = [
		{
		label: 'List Accounts',
		value: '/accounts'
		},
		{
		label: 'Cancel Orders',
		value: '/orders/batch_cancel'
		},
		{
		label: 'List Orders',
		value: '/orders/historical/batch'
		},
		{
		label: 'List Fills',
		value: '/orders/historical/fills'
		},
		{
		label: 'Get Best Bid/Ask',
		value: '/best_bid_ask'
		},
		{
		label: 'Get Product Book',
		value: '/product_book'
		},
		{
		label: 'List Products',
		value: '/products'
		},
		{
		label: 'Get Tran-sactions Summary',
		value: '/transaction_summary'
		}
	];

	return <SelectInput items={items} onSelect={handleSelect} />;
};

render(<Demo />);
