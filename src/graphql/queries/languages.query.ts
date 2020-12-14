import { gql } from '@apollo/client';

const GET_LANGUAGES_LIST = gql`
  query {
    Language {
      name
      nativeName
    }
  }
`;

export default GET_LANGUAGES_LIST;
