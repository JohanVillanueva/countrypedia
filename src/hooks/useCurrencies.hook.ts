import { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import { useCurrenciesQuery } from '../graphql/hooks';
import { AppState, Currency, FilterOption } from '../models';

const useCurrencies = () => {
  const { currencies, setStateData } = useContext<AppState>(AppContext);
  const {
    getCurrencies, currenciesFromApi, loading, error,
  } = useCurrenciesQuery();

  useEffect(() => {
    if (!loading) {
      if (!currenciesFromApi) {
        getCurrencies();
      } else if (!currencies?.length) {
        setStateData({
          currencies: currenciesFromApi.filter((c) => c.name !== 'null'),
        });
      }
    }
  }, [currenciesFromApi]);

  const getCurrencyFilterOptions = (currencyList: Array<Currency>): Array<FilterOption> => {
    const options:Array<FilterOption> = currencyList?.map((currency) => ({
      value: currency.name,
      label: `${currency.name} (${currency.symbol})`,
      data: currency,
    }));

    return options;
  };

  return {
    currencies,
    optionsForFilter: getCurrencyFilterOptions(currencies),
    loading,
    error,
  };
};

export default useCurrencies;
