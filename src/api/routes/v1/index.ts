import * as express from 'express';
import product from './product';
import auth from './auth';
import { authenticateToken } from './middleware/authenticateToken';


const v1 = express.Router();

v1.use('/products', authenticateToken, product)
v1.use('/', auth)

export default v1;