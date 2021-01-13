import jwt, { Algorithm } from 'jsonwebtoken';
import yargs from 'yargs';
import YAML from 'yaml';
import fs from 'fs';

interface PermissionGroup {
  attributes: string[];
  protection_level: string;
}

interface JWTConfig {
  algorithm: Algorithm;
  permissions: string[];
  secret: string;
  private_key: string;
  uid: number;
  permissions_file?: Record<string, PermissionGroup>;
}

const argv = yargs
  .option('algorithm', {
    alias: 'a',
    default: 'HS256',
    description: `Algorithm to sign JWT, use one of the following: [
    "HS256", "HS384", "HS512",
    "RS256", "RS384", "RS512"
    "ES256", "ES384", "ES512",
    "PS256", "PS384", "PS512",
    "none"
  ];
`,
    type: 'string',
  })
  .option('private_key', {
    alias: 'k',
    default: process.env.PRIVATE_KEY_FILE || '',
    description: 'Private key file to be used on the creation of the JWT token',
    type: 'string',
  })
  .option('secret', {
    alias: 's',
    default: process.env.SECRET_KEY || '',
    description: 'Secret Key to be used on the creation of the JWT token',
    type: 'string',
  })
  .option('uid', {
    alias: 'u',
    default: 0,
    description: `App's UID number to be encoded in JWT`,
    type: 'number',
  })
  .option('permissions_file', {
    alias: 'f',
    default: './scripts/permissions_groups.yaml',
    description: 'YAML containing the permission groups to be read',
    type: 'string',
  })
  .coerce('permissions_file', (file) =>
    YAML.parse(fs.readFileSync(file, 'utf8'))
  )
  .option('permissions', {
    alias: 'p',
    default: 'vss.permission.VEHICLE_READ',
    description: `Client's permissions, array of strings, to be encoded in JWT,
    i.e: vss.permission.VEHICLE_READ`,
    type: 'string',
  })
  .coerce('permissions', (permissions) => permissions.split(','))
  .help()
  .alias('help', 'h').argv;

const generateToken = ({
  algorithm,
  uid,
  permissions,
  permissions_file,
  secret,
  private_key,
}: JWTConfig): string => {
  let attributePermissions: string[] = permissions;
  if (!!permissions && permissions_file) {
    attributePermissions = permissions.reduce(
      (bucket: string[], permission: string): string[] => {
        const group = permissions_file[permission] as PermissionGroup;
        if (group && group.attributes) {
          bucket.push(...group.attributes);
        }
        return bucket;
      },
      []
    );
  }
  return jwt.sign(
    {
      permissions: attributePermissions ? attributePermissions : permissions,
      uid,
    },
    private_key ? fs.readFileSync(private_key) : secret,
    {
      algorithm,
    }
  );
};

console.log(generateToken(argv as JWTConfig));
