const http = require('http');

const exchange = (curr1, curr2) => {
	http.get('http://apilayer.net/api/convert', (response) => {
		let fullBody= '';
		response.on('data', (data) => {
			fullBody += data;
		}).on('end', (data) => {
			console.log(fullBody);
		});
	});
}