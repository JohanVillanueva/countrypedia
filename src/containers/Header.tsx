import React, { useContext } from 'react';
import styled from 'styled-components';
import appLogo from '../assets/imgs/world-map-dots.svg';
import { SearchInput } from '../components';
import { AppContext } from '../context';
import { AppState } from '../models';

const StyledHeader = styled.header`
  height: 35vh;
  position: relative;
  background: url(${appLogo}) no-repeat, linear-gradient(to top, #30cfd0 0%, #330867 100%);
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & .Header__title {
    font-size: 3rem;
    font-weight: 600;
    color: white;
    text-shadow: 0px 0px 10px #330867;
  }

  & .SearchInput {
    position: absolute;
    bottom: -1rem;
    width: 80%;
    max-width: 700px;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

const Header: React.FC = () => {
  const { setStateData, countries } = useContext<AppState>(AppContext);

  const handleSearch = (countryNameToSearch: string) => {
    setStateData({ countryNameToSearch });
  };

  return (
    <StyledHeader className="Header">
      <h1 className="Header__title">Countrypedia</h1>
      <SearchInput valueChange={handleSearch} disabled={!countries?.length} />
    </StyledHeader>
  );
};

export default Header;
