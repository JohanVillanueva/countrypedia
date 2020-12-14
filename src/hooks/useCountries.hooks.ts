import { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import { useCountriesQuery } from '../graphql/hooks';
import { AppState, Country } from '../models';

const useCountries = (canFetch = false) => {
  const { filteredCountries, countries, setStateData } = useContext<AppState>(AppContext);
  const {
    getCountries, countriesFromApi, loading, error,
  } = useCountriesQuery();

  useEffect(() => {
    if (!loading) {
      if (!countriesFromApi && canFetch) {
        getCountries();
      } else if (!filteredCountries?.length) {
        setStateData({
          countries: countries.length ? countries : countriesFromApi,
          filteredCountries: countriesFromApi,
        });
      }
    }
  }, [countriesFromApi]);

  const saveFilteredCountries = (filteredList: Array<Country>) => {
    setStateData({ filteredCountries: filteredList });
  };

  return {
    filteredCountries,
    countries,
    loading,
    error,
    saveFilteredCountries,
  };
};

export default useCountries;
