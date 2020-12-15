import React from 'react';
import styled from 'styled-components';
import { Country } from '../models';
import CountryLabeledInfo from './CountryLabeledInfo';

const StyledCountryDetailInformation = styled.section`
  font-size: 1.1em;
  padding: 1.5rem;
  overflow-y: auto;
  margin-top: -1rem;
  background: white;
  border-radius: 1rem 1rem 0 0;

  .CountryLabeledInfo {
    margin-bottom: 1rem;

    &::last-child {
      margin-bottom: 0;
    }
  }
`;

interface CountryDetailInformationProps {
  country: Country;
}

const CountryDetailInformation: React.FC<CountryDetailInformationProps> = ({
  country,
}: CountryDetailInformationProps) => {
  const showLabeledInfo = (label: string, data: string | Array<string>) => (
    <CountryLabeledInfo label={label} data={data} />
  );

  return (
    <StyledCountryDetailInformation className="CountryDetailInformation">
      {showLabeledInfo('Native name', country.nativeName)}
      {showLabeledInfo('Capital', country.capital)}
      {showLabeledInfo('Area', `${country.area} Km²`)}
      {showLabeledInfo('ISO Code (alpha-2)', country.alpha2Code)}
      {showLabeledInfo('Population', country.population?.toString())}
      {showLabeledInfo(
        'Currencies',
        country.currencies?.map(({ name, symbol }) => `${name} (${symbol})`),
      )}
      {showLabeledInfo(
        'Languages',
        country.officialLanguages?.map(({ name, nativeName }) => `${name} (${nativeName})`),
      )}
      {showLabeledInfo(
        'Calling codes',
        country.callingCodes?.map(({ name }) => `+${name}`),
      )}

      {showLabeledInfo(
        'Regional blocs',
        country.regionalBlocs?.map(({ name, acronym }) => `${name} (${acronym})`),
      )}

      {showLabeledInfo(
        'Alternative spellingss',
        country.alternativeSpellings?.map(({ name }) => name),
      )}
    </StyledCountryDetailInformation>
  );
};

export default CountryDetailInformation;
