import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import { Countries, Filters, Header } from '../containers';
import { Wrapper } from '../styling/components';

const StyledMain = styled.main`
  padding: 1.5rem 0;
  background: linear-gradient(to bottom, #30cfd0 0%, #330867 100%);
  min-height: 65vh;
`;

const HomePage: React.FC<RouteComponentProps> = () => (
  <>
    <Header />
    <StyledMain>
      <Wrapper>
        <Slide cascade duration={550} damping={0.01} delay={80} triggerOnce direction="up">
          <Filters />
          <Countries />
        </Slide>
      </Wrapper>
    </StyledMain>
  </>

);
export default HomePage;
