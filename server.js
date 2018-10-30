const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

const jsonParser = bodyParser.json();

app.get('/express_backend', (req, res) => {
  	res.send({ express: 'Your Express server is connected to React' });
});

app.post('/payment', jsonParser, (req, res) => {
	console.log(req.body);

	// TO-DO: send request to Stripe for payment processing;
	// for now, just send the response back
  	res.send({payment: JSON.stringify(req.body)});
});