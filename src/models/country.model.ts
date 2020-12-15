import { Currency } from './currency.model';
import { Language } from './language.model';
import { Location } from './location.model';
import { GeographicSubRegion, RegionalBloc } from './region.model';

export interface Country {
  name: string;
  area: number;
  capital: string;
  alpha2Code: string;
  nativeName: string;
  population: number;
  flag: CountryFlag;
  location: Location;
  currencies: Array<Currency>;
  officialLanguages: Array<Language>;
  callingCodes: Array<CountryCallingCode>;
  subregion: GeographicSubRegion;
  regionalBlocs: Array<RegionalBloc>;
  alternativeSpellings: Array<CountryAlternativeSpelling>;
}

export interface CountryFlag {
  emoji: string;
  emojiUnicode: string;
  svgFile: string;
}

export interface CountryCallingCode {
  name: string;
}

export interface CountryAlternativeSpelling {
  name: string;
}
