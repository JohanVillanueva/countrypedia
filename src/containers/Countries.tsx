import React from 'react';
import styled from 'styled-components';
import { CountriesList } from '../components';
import useCountries from '../hooks/useCountries.hooks';
import { Container } from '../styling/components';

const StyledCountries = styled(Container)`
  margin-top: 2.5rem;
`;

const Countries: React.FC = () => {
  const {
    filteredCountries, countries, loading, error,
  } = useCountries(true);

  const renderCountries = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Sorry :(, we couldn&apos;t load countries data</p>;

    return (
      <>
        <h3>
          {filteredCountries?.length !== countries?.length
            ? `Search results (${filteredCountries?.length})`
            : `All countries (${countries?.length})`}
        </h3>
        <CountriesList countries={filteredCountries} />
      </>
    );
  };

  return <StyledCountries>{renderCountries()}</StyledCountries>;
};

export default Countries;
