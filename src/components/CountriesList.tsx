/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import usePageBottom from '../hooks/useScrollToBottom.hooks';
import { Country } from '../models';
import { ListItem, UnorderedList } from '../styling/components';
import CountryCard from './CountryCard';

interface CountriesListProps {
  countries: Array<Country>;
  onCountrySelect: (country: Country) => void
}

const COUNTRIES_BY_PAGE = 10;

const CountriesList: React.FC<CountriesListProps> = ({ countries, onCountrySelect }: CountriesListProps) => {
  const [countriesToShow, setCountriesToShow] = useState([]);
  const isPageAtBottom = usePageBottom();

  useEffect(() => {
    if (countriesToShow?.length < countries?.length && isPageAtBottom) loadMore();
  }, [isPageAtBottom]);

  useEffect(() => {
    setCountriesToShow(countries.slice(0, COUNTRIES_BY_PAGE));
  }, [countries]);

  const getNextPage = () => countries.slice(countriesToShow.length, countriesToShow.length + COUNTRIES_BY_PAGE);

  const loadMore = () => {
    setCountriesToShow([...countriesToShow, ...getNextPage()]);
  };

  return (
    <UnorderedList>
      <Fade cascade duration={350} damping={0.01} delay={50} triggerOnce>
        {countriesToShow?.map((country) => (
          <ListItem className="item" key={country.name}>
            <CountryCard country={country} onCountryClicked={onCountrySelect} />
          </ListItem>
        ))}

      </Fade>
    </UnorderedList>
  );
};

export default CountriesList;
