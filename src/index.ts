import express from 'express';
import mainRoute from './router';

const app = express();
const port = 3000;
app.use('/api', mainRoute);

const localServer = app.listen(port, () => {
	console.log(`Server started at port: ${port}`);
});

module.exports = localServer;
