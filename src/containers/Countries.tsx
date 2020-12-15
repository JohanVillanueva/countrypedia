import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CountriesList } from '../components';
import Modal from '../components/Modal';
import useCountries from '../hooks/useCountries.hooks';
import { Container } from '../styling/components';
import CountryDetail from './CountryDetail';
import { Country } from '../models';

const StyledCountries = styled(Container)`
  margin-top: 2.5rem;
`;

const Countries: React.FC = () => {
  const {
    filteredCountries, countries, loading, error,
  } = useCountries(true);

  const [openModal, setOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      setOpenModal(true);
    } else if (openModal) {
      setOpenModal(false);
    }
  }, [selectedCountry]);

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
        <CountriesList countries={filteredCountries} onCountrySelect={handleSelectedCountry} />
      </>
    );
  };

  const handleSelectedCountry = (country: Country) => {
    setSelectedCountry(country);
  };

  return (
    <StyledCountries>
      <Modal open={openModal} onClose={() => setSelectedCountry(null)}>
        {selectedCountry && <CountryDetail country={selectedCountry} />}
      </Modal>
      {renderCountries()}
    </StyledCountries>
  );
};

export default Countries;
