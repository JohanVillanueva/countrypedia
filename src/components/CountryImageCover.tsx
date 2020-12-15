import React from 'react';
import styled from 'styled-components';
import appLogo from '../assets/imgs/world-map-dots.svg';
import { Photo } from '../models';

const StyledCountryImageCover = styled.div<{ source: string }>`
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(to bottom, rgba(48, 207, 208, 0.1), rgba(0, 0, 0, 0.8)),
    url(${({ source }) => source || appLogo});
  background-size: ${({ source }) => (source ? 'cover' : 'contain')};
  background-repeat: no-repeat;
  background-position: center;
  min-height: 50px;
  padding: 1rem;

  & .CountryImageCover__name {
    height: 20%;
    color: white;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    img {
      border-radius: .2rem;
      max-height: 100%;
      margin-right: 1rem;
    }
  }

`;

interface CountryImageCoverProps {
  photo: Photo;
  flagUrl: string;
  name: string;
}

const CountryImageCover = ({ flagUrl, name, photo }: CountryImageCoverProps) => (
  <StyledCountryImageCover className="CountryImageCover" source={photo?.urls?.regular}>
    <div className="CountryImageCover__name">
      <img src={flagUrl} alt={name} />
      <h2>
        {name}
      </h2>
    </div>
  </StyledCountryImageCover>
);

export default CountryImageCover;
