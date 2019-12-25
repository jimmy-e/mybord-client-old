import jwt from 'jsonwebtoken';
import { Request } from '../types/requestTypes';

const getUserId = (request: Request, requireAuthentication: boolean = true): string => {
  const header = request.req
    ? request.req.headers.authorization
    // @ts-ignore
    : request.connection.context.Authorization;

  if (header) {
    const token = header.split(' ')[1];
    const decoded: any = jwt.verify(token, '$9zW3eBT77N3$eJTH8D$');
    return decoded.userId;
  }

  if (requireAuthentication) {
    throw new Error('Authentication required');
  }

  return null;
};

export default getUserId;
