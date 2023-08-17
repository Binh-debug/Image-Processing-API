import express from 'express';
import mainRoute from './router';

const app = express();
const port = 3000;

app.use('/api', mainRoute);

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
