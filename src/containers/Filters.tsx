import React, { useContext } from 'react';
import styled from 'styled-components';
import { Filter } from '../components';
import { AppContext } from '../context';
import useCurrencies from '../hooks/useCurrencies.hook';
import useLanguages from '../hooks/useLanguages.hook';
import useRegions from '../hooks/useRegions.hooks';
import {
  AppState, Currency, FilterOption, GeographicRegion, Language,
} from '../models';
import { Container } from '../styling/components';

const StyledFilters = styled.article`
  & h3 {
    margin-left: 10px;
  }
`;

const StyledFiltersContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & .Filter {
    flex: 1 0 230px;
    margin: 10px;
  }
`;

const Filters: React.FC = () => {
  const languagesState = useLanguages();
  const currenciesState = useCurrencies();
  const regionsState = useRegions();

  const { setStateData } = useContext<AppState>(AppContext);

  const handleLanguageChangeSelection = (filterOption: FilterOption) => {
    setStateData({ languageActiveFilter: filterOption?.data as Language });
  };

  const handleCurrencyChangeSelection = (filterOption: FilterOption) => {
    setStateData({ currencyActiveFilter: filterOption?.data as Currency });
  };

  const handleRegionChangeSelection = (filterOption: FilterOption) => {
    setStateData({ regionActiveFilter: filterOption?.data as GeographicRegion });
  };

  return (
    <Container>
      <StyledFilters>
        <h3>Filter by</h3>
        <StyledFiltersContainer>
          <Filter title="Language" changeSelection={handleLanguageChangeSelection} source={languagesState} />
          <Filter title="Currency" changeSelection={handleCurrencyChangeSelection} source={currenciesState} />
          <Filter title="Region" changeSelection={handleRegionChangeSelection} source={regionsState} />
        </StyledFiltersContainer>
      </StyledFilters>
    </Container>
  );
};

export default Filters;
