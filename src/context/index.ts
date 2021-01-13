import { JwtHeader, SigningKeyCallback } from 'jsonwebtoken';
import { Request } from 'express';
import { hasPermissions } from '@profusion/apollo-validation-directives';
import { readFileSync } from 'fs';

import { jwtVerify } from '@utils/auth';

const key = process.env.PUBLIC_KEY_FILE
  ? readFileSync(process.env.PUBLIC_KEY_FILE)
  : process.env.SECRET_KEY;

const getKey = (_: JwtHeader, cb: SigningKeyCallback): void => {
  cb(null, key);
};

interface App {
  permissions: string[];
  uid: number;
}

interface AppTokenInfo {
  permissions: Array<string>;
  uid: number;
}

interface ContextParams {
  req: Request;
}

export type ApplicationContext = {
  app: App | undefined;
} & ReturnType<typeof hasPermissions.createDirectiveContext>;

export const authenticate = async (token: string): Promise<App | undefined> => {
  const decodedApp = (await jwtVerify(token, getKey)) as AppTokenInfo;
  if (!decodedApp) {
    return undefined;
  }
  return {
    ...decodedApp,
    permissions: decodedApp.permissions,
  };
};

type CreateContextFn = () => (
  args: ContextParams
) => Promise<ApplicationContext>;

export const createContext: CreateContextFn = () => {
  return async ({ req }: ContextParams): Promise<ApplicationContext> => {
    const token = req?.headers?.authorization;
    const authData = token ? await authenticate(token) : undefined;
    return {
      ...hasPermissions.createDirectiveContext({
        grantedPermissions: authData ? authData.permissions : undefined,
      }),
      app: authData,
    };
  };
};
