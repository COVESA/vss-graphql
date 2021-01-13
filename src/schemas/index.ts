import {
  hasPermissions,
  ValidateDirectiveVisitor,
} from '@profusion/apollo-validation-directives';

import SchemaBase from './base';
import Vehicle from './vehicle';

const Schemas = SchemaBase.concat(
  Vehicle,
  hasPermissions.getTypeDefs(),
  ValidateDirectiveVisitor.getMissingCommonTypeDefs()
);
export default Schemas;
