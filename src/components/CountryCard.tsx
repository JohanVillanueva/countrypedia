import React from 'react';
import styled from 'styled-components';
import { Country, Currency } from '../models';
import { flatCardStyle } from '../styling/css';
import CountryFlag from './CountryFlag';
import { Language } from '../models/language.model';

const StyledCountryCard = styled.div`
  ${flatCardStyle}
  margin: 10px;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0;
  border: none;
  display: flex;
  align-items: center;
  font-size: 1rem;

  & .CountryCard__info {
    margin-left: 1rem;

    &__name {
      span {
        color: grey;
        margin-left: .4em;
      }
    }

    &__data {
      font-size: .9em;
      line-height: 1.4em;

      span {
        color: grey;
      }
    }
  }
`;

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }: CountryCardProps) => {
  const showCurrencies = (currencies: Array<Currency>) => {
    const currenciesFullNames: Array<string> = currencies?.map((currency) => `${currency.name} (${currency.symbol})`);

    const currenciesFlatText = currenciesFullNames?.join(', ');

    return (
      <p className="CountryCard__info__data">
        <span>
          {
            currenciesFullNames?.length > 1 ? 'Currencies: ' : 'Currency: '
          }
        </span>
        {currenciesFlatText || 'Not registered'}
      </p>
    );
  };

  const showLanguages = (languages: Array<Language>) => {
    const languagesFullNames: Array<string> = languages?.map((language) => language.name);

    const languagesFlatText = languagesFullNames?.join(', ');

    return (
      <p className="CountryCard__info__data">
        <span>
          {
            languagesFullNames?.length > 1 ? 'Oficial Languages: ' : 'Oficial Language: '
          }
        </span>
        {languagesFlatText || 'Not registered'}
      </p>
    );
  };

  return (
    <StyledCountryCard className="CountryCard">
      <CountryFlag source={country.flag.svgFile} name={country.name} />
      <div className="CountryCard__info">
        <h4 className="CountryCard__info__name">
          {country.name}
          <span>
            (
            {country.nativeName}
            )
          </span>
        </h4>
        <p className="CountryCard__info__data">
          <span>
            Region:
          </span>
          {' '}
          {country.subregion?.region?.name || 'Not registered'}
        </p>
        {showCurrencies(country.currencies)}
        {showLanguages(country.officialLanguages)}

      </div>
    </StyledCountryCard>
  );
};

export default CountryCard;
