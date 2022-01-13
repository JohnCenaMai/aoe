import Express from "express";

const app = Express();

const server = app.listen(7000, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});