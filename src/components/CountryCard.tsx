/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Country, Currency, Language } from '../models';
import { flatCardStyle } from '../styling/css';
import CountryFlag from './CountryFlag';
import CountryLabeledInfo from './CountryLabeledInfo';

const StyledCountryCard = styled.div`
  ${flatCardStyle}
  margin: 0 10px;
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
      margin-bottom: 0.6rem;

      span {
        color: grey;
        margin-left: 0.4em;
      }
    }
  }
`;

interface CountryCardProps {
  country: Country;
  onCountryClicked: (country: Country) => void;
}

const CountryCardComponent: React.FC<CountryCardProps> = ({ country, onCountryClicked }: CountryCardProps) => {
  const showCurrencies = (currencies: Array<Currency>) => {
    const currenciesFullNames: Array<string> = currencies?.map((currency) => `${currency.name} (${currency.symbol})`);

    return <CountryLabeledInfo label="Currencies" data={currenciesFullNames} inline />;
  };

  const showLanguages = (languages: Array<Language>) => {
    const languagesFullNames: Array<string> = languages?.map((language) => language.name);

    return <CountryLabeledInfo label="Oficial Languages" data={languagesFullNames} inline />;
  };

  return (
    <StyledCountryCard className="CountryCard" onClick={() => (onCountryClicked ? onCountryClicked(country) : null)}>
      <CountryFlag source={country.flag.svgFile} name={country.name} />
      {country && (
        <div className="CountryCard__info">
          <h4 className="CountryCard__info__name">
            {country.name}
            <span>{`(${country.nativeName})`}</span>
          </h4>

          <CountryLabeledInfo label="Region" data={country.subregion?.region?.name} inline />
          {showCurrencies(country.currencies)}
          {showLanguages(country.officialLanguages)}
        </div>
      )}
    </StyledCountryCard>
  );
};

const CountryCard = React.memo(CountryCardComponent);

export default CountryCard;
