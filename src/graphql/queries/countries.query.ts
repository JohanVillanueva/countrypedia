import { gql } from '@apollo/client';

const GET_COUNTRIES_LIST = gql`
  query {
    Country {
      name
      area
      capital
      population
      alpha2Code
      nativeName
      flag {
        emoji
        emojiUnicode
        svgFile
      }
      location {
        latitude
        longitude
      }
      currencies {
        name
        symbol
      }
      officialLanguages {
        name
        nativeName
      }
      callingCodes {
        name
      }
      subregion {
        name
        region {
          name
        }
      }
      regionalBlocs {
        name
        acronym
      }
      alternativeSpellings {
        name
      }
    }
  }
`;

export default GET_COUNTRIES_LIST;
