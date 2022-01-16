import Express from "express";
import bodyParser from 'body-parser';
import configRouter from './router/ConfigRouter.js';
import loginRouter from './router/LoginRouter.js';

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', configRouter);

app.use('/api', loginRouter);

const server = app.listen(7000, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});