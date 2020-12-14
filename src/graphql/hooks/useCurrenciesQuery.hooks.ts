import { useLazyQuery } from '@apollo/client';
import { CurrenciesDTO } from '../models';
import { GET_CURRENCIES_LIST } from '../queries';

const useCurrenciesQuery = () => {
  const [getCurrencies, { data, loading, error }] = useLazyQuery<CurrenciesDTO>(GET_CURRENCIES_LIST);

  return {
    getCurrencies, currenciesFromApi: data?.Currency, loading, error,
  };
};

export default useCurrenciesQuery;
