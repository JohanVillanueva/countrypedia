import {
  Country, Currency, GeographicRegion, Language,
} from '../models';
import wordStartsWithParameter from './search';

export const filterByName = (countries: Array<Country>, nameToFilter: string) => {
  const results = countries.filter(
    ({ name, alpha2Code }) => wordStartsWithParameter(name, nameToFilter) || nameToFilter.toUpperCase() === alpha2Code,
  );
  return results;
};

export const filterByLanguage = (countries: Array<Country>, languageToFilter: Language) => {
  const results = countries.filter(({ officialLanguages }) => {
    const hasWantedLanguage = officialLanguages?.some(({ name }) => name === languageToFilter.name);

    return hasWantedLanguage;
  });

  return results;
};

export const filterByCurrency = (countries: Array<Country>, currencyToFilter: Currency) => {
  const results = countries.filter(({ currencies }) => {
    const hasWantedLanguage = currencies?.some(({ name }) => name === currencyToFilter.name);

    return hasWantedLanguage;
  });

  return results;
};

export const filterByRegion = (countries: Array<Country>, regionToFilter: GeographicRegion) => {
  const results = countries.filter(({ subregion }) => subregion?.region.name === regionToFilter.name);

  return results;
};
