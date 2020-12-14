import { gql } from '@apollo/client';

const GET_REGIONS_LIST = gql`
  query {
    Region {
      name
      subregions {
        name
      }
    }
  }
`;

export default GET_REGIONS_LIST;
