import { useLazyQuery } from '@apollo/client';
import { CountriesDTO } from '../models';
import { GET_COUNTRIES_LIST } from '../queries';

const useCountriesQuery = () => {
  const [getCountries, { data, loading, error }] = useLazyQuery<CountriesDTO>(GET_COUNTRIES_LIST);

  return {
    getCountries, countriesFromApi: data?.Country, loading, error,
  };
};

export default useCountriesQuery;
