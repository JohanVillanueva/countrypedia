/* eslint-disable no-unused-vars */
import { Country } from './country.model';
import { Currency } from './currency.model';
import { Language } from './language.model';
import { GeographicRegion } from './region.model';

export interface AppState {
  countries: Array<Country>;
  languages: Array<Language>;
  currencies: Array<Currency>;
  regions: Array<GeographicRegion>;
  filteredCountries: Array<Country>;
  countryNameToSearch?: string;
  currencyActiveFilter?: Currency;
  languageActiveFilter?: Language;
  regionActiveFilter?: GeographicRegion;
  setStateData?: (data: Partial<AppState>) => void;
  removeStateData?: () => void;
}
