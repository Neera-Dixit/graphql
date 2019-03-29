import express from 'express';
import { SERVERPORT } from './config';

const graphqlApp = express();

graphqlApp.listen(SERVERPORT,() => {
  console.log('Node server Listening at Port 5000');
})