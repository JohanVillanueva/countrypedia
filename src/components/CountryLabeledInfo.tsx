import React from 'react';
import styled from 'styled-components';

const StyledCountryLabeledInfo = styled.div`
  font-size: 0.9em;
  line-height: 1.4em;

  span {
    color: grey;
    font-size: .8em;
  }

  &.inline {
    display: flex;

    span {
      margin-right: .4rem;
      font-size: 1em;
    }
  }
`;

interface CountryLabeledInfoProps {
  label: string;
  data: string | Array<string>;
  inline?: boolean;
}

const NOT_REGISTERED_INFO_MESSAGE = 'Not registered';
const DEFAULT_SEPARATOR_CHARACTER = ',';

const CountryLabeledInfo: React.FC<CountryLabeledInfoProps> = ({ label, data, inline }: CountryLabeledInfoProps) => {
  const getFormattedData = (dataToFormat: string | Array<string>): string => {
    if (Array.isArray(dataToFormat)) {
      return dataToFormat.length ? dataToFormat.join(`${DEFAULT_SEPARATOR_CHARACTER} `) : NOT_REGISTERED_INFO_MESSAGE;
    }

    return dataToFormat || NOT_REGISTERED_INFO_MESSAGE;
  };

  return (
    <StyledCountryLabeledInfo className={`CountryLabeledInfo ${inline && 'inline'}`}>
      <span>
        {label}
        {': '}
      </span>
      <p>{getFormattedData(data)}</p>
    </StyledCountryLabeledInfo>
  );
};

CountryLabeledInfo.defaultProps = {
  inline: false,
};

export default CountryLabeledInfo;
