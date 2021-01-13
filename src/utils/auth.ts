import { promisify } from 'util';
import jwt from 'jsonwebtoken';

export const jwtVerify = promisify(jwt.verify);
