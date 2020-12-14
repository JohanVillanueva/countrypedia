import { useEffect, useState } from 'react';
import {
  filterByCurrency, filterByLanguage, filterByName, filterByRegion,
} from '../helpers';
import { AppState } from '../models';

const INITIAL_STATE: AppState = {
  countries: [],
  languages: [],
  currencies: [],
  regions: [],
  filteredCountries: [],
  countryNameToSearch: '',
};

const useAppState = (): AppState => {
  const [state, setState] = useState<AppState>(INITIAL_STATE);
  const {
    countryNameToSearch,
    regionActiveFilter,
    languageActiveFilter,
    currencyActiveFilter,
    countries,
  } = state;

  const setStateData = (data: Partial<AppState>) => {
    setState({
      ...state,
      ...data,
    });
  };

  useEffect(() => {
    let originalCountriesList = [...countries];

    if (countryNameToSearch) originalCountriesList = filterByName(originalCountriesList, countryNameToSearch);
    if (regionActiveFilter) originalCountriesList = filterByRegion(originalCountriesList, regionActiveFilter);
    if (languageActiveFilter) originalCountriesList = filterByLanguage(originalCountriesList, languageActiveFilter);
    if (currencyActiveFilter) originalCountriesList = filterByCurrency(originalCountriesList, currencyActiveFilter);

    setStateData({ filteredCountries: originalCountriesList });
  }, [countryNameToSearch, regionActiveFilter, languageActiveFilter, currencyActiveFilter]);

  const removeStateData = () => {
    setState(INITIAL_STATE);
  };

  return {
    ...state,
    setStateData,
    removeStateData,
  };
};

export default useAppState;
