import {
  Country, Currency, Language, GeographicRegion,
} from '../../models';

export interface CountriesDTO {
  Country: Array<Country>;
}

export interface LanguagesDTO {
  Language: Array<Language>;
}

export interface CurrenciesDTO {
  Currency: Array<Currency>;
}

export interface RegionsDTO {
  Region: Array<GeographicRegion>;
}
