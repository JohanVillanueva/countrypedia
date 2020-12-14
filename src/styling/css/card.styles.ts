import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const cardBaseStyle = css`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 10px;
  padding: 1.5rem;
`;

export const flatCardStyle = css`
  ${cardBaseStyle}
  box-shadow: none;
  border: 1px solid grey;
`;
