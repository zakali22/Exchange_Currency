const http = require('http');
const https = require('https');
const argument = process.argv;
const currency1 = argument[2],
	  currency2 = argument[3],
	  baseCurrency = argument[4];
let result = 0;

const exchangeDisplay = (curr1, curr2) => {
	console.log("1 " + curr1 + " to " + curr2 + " is " + result);
};


const exchange = (curr1, curr2, base) => {
	https.get(`https://api.fixer.io/latest?base=${base}&symbols=${curr1, curr2}`, (response) => {
		let fullBody= '';
		response.on('data', (data) => {
			fullBody += data;
		}).on('end', (data) => {
			let parsedData = JSON.parse(fullBody);
			result += parsedData["rates"]["GBP"];
			exchangeDisplay(curr1, curr2);
		});
	});
}

exchange(currency1, currency2, baseCurrency);