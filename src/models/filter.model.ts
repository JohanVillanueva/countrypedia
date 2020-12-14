import { Currency } from './currency.model';
import { Language } from './language.model';
import { GeographicRegion } from './region.model';

export interface FilterOption {
  value: string;
  label: string;
  data?: Currency | Language | GeographicRegion;
}
