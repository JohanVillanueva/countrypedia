import React from 'react';
import styled from 'styled-components';
import { CountryDetailInformation, CountryImageCover } from '../components';
import useCountryImageSearch from '../hooks/useCountryImageSearch.hooks';
import { Country } from '../models';

const StyledCountryDetail = styled.article`
  width: 100%;
  height: 80vh;

  & .CountryImageCover {
    height: 11rem;
  }

  & .CountryDetailInformation {
    height: calc(100% - 11rem);
  }
`;

interface CountryDetailProps {
  country: Country;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country }: CountryDetailProps) => {
  const { photo } = useCountryImageSearch(country?.name);

  return (
    <StyledCountryDetail className="CountryDetail">
      <CountryImageCover photo={photo} flagUrl={country.flag?.svgFile} name={country.name} />

      <CountryDetailInformation country={country} />
    </StyledCountryDetail>
  );
};

export default CountryDetail;
