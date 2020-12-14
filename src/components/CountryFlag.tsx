import React from 'react';
import styled from 'styled-components';

const StyledCountryFlag = styled.img`
  height: 100%;
  width: 15%;
  max-height: 100px;
  min-height: 25px;
  border-radius: 0.2rem;
  object-fit: cover;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`;

interface CountryFlagProps {
  source: string;
  name: string;
}

const CountryFlag = ({ source, name }: CountryFlagProps) => (
  <StyledCountryFlag className="CountryFlag" src={source} alt={name} />
);

export default CountryFlag;
