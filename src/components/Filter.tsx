import { ApolloError } from '@apollo/client';
import React, { useRef } from 'react';
import { FilterOption } from '../models';
import { Select } from '../styling/components';

type FilterProps = {
  // eslint-disable-next-line no-unused-vars
  changeSelection: (value: FilterOption) => void;
  title: string;
  source: {
    optionsForFilter: Array<FilterOption>;
    loading?: boolean;
    error?: boolean | ApolloError;
  };
  disable?: boolean;
};

const Filter: React.FC<FilterProps> = ({
  changeSelection,
  title,
  disable,
  source: { error, loading, optionsForFilter },
}: FilterProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSelectChange = () => {
    const newValue = selectRef.current?.value;

    const selectedFilterOption = optionsForFilter.find((option) => option.value === newValue);

    changeSelection(selectedFilterOption);
  };

  return (
    <div className="Filter">
      <label htmlFor={title}>{title}</label>
      <Select
        name={title}
        className={!selectRef.current?.value && 'empty'}
        ref={selectRef}
        onChange={handleSelectChange}
        onBlur={null}
        disabled={loading || !!error || disable}
      >
        <option value="">All</option>
        {optionsForFilter?.map(({ value, label }) => (
          <option key={value + label} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </div>
  );
};

Filter.defaultProps = {
  disable: false,
};

export default Filter;
