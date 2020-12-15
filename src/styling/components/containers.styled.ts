import styled from 'styled-components';
import { cardBaseStyle } from '../css';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.article`
  ${cardBaseStyle}
  width: 90%;
  margin: 1rem auto;
  background: #f9f9f9;

  & h3 {
    margin-left: 10px;
    color: #330867;
  }
`;
