import styled from 'styled-components';
import { flatCardStyle } from '../css';

export const Input = styled.input`
  ${flatCardStyle}
  height: 3rem;
  font-size: 1rem;
  padding: 1rem;
  outline: none;
  background: rgba(51, 8, 103, 0.2);
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const Select = styled.select`
  display: inline-block;
  height: 2.5rem;
  border-radius: 5px;
  margin: 0;
  appearance: none;
  border: 1px solid grey;
  padding: 0 1rem;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;

  ::-ms-expand {
    display: none;
  }

  &.empty {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const UnorderedList = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

export const ListItem = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: background 0.2s;
  will-change: background;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
