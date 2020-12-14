import { gql } from '@apollo/client';

const GET_CURRENCIES_LIST = gql`
  query {
    Currency {
      name
      symbol
      code
    }
  }
`;

export default GET_CURRENCIES_LIST;
