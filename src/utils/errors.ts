import { ApolloError } from 'apollo-server';

export class PermissionError extends ApolloError {
  constructor(permissions: string[], message = 'Missing permissions') {
    super(`${message}: ${permissions.join(', ')}`, 'PERMISSIONS_ERROR');
    Object.defineProperty(this, 'name', { value: 'PermissionError' });
  }
}
