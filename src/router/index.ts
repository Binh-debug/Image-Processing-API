import express from 'express';
import imgs from './api/img-api';

const mainRoute = express.Router();

mainRoute.get('/', (_, res): void => {
	res.send('<p>Hello</p>');
});
mainRoute.use('/imgs', imgs);
export default mainRoute;
