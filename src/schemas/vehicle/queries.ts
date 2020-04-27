import { gql } from 'apollo-server';

const Queries = gql`
  extend type Query {
    vehicle: Vehicle
  }
`;

export default Queries;
