import Express from "express";
import bodyParser from 'body-parser';
import billRouter from './router/BillRouter.js';
import soap from 'soap';

var url = 'http://example.com/wsdl?wsdl';
var args = { name: 'value' };
soap.createClient(url, function (err, client) {
	client.MyFunction(args, function (err, result) {
		console.log(result);
	});
});

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/e-bill', billRouter);

const server = app.listen(7000, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});


