import React, { useRef } from 'react';
import { Input } from '../styling/components';

type SearchInputProps = {
  // eslint-disable-next-line no-unused-vars
  valueChange: (value: string) => void;
  disabled?: boolean;
};

const SearchInput: React.FC<SearchInputProps> = ({ valueChange, disabled }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    const newValue = inputRef.current?.value;
    valueChange(newValue);
  };

  return (
    <Input
      className="SearchInput"
      autoFocus
      placeholder="Type a country name to search"
      autoComplete="none"
      ref={inputRef}
      type="text"
      disabled={disabled}
      onChange={handleInputChange}
    />
  );
};

SearchInput.defaultProps = {
  disabled: false,
};

export default SearchInput;
