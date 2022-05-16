import React from 'react';

import { InputContainer } from './Style';

const Search = ({ value, handleChange }) => {
  return (
    <InputContainer>
      <input
        type="search"
        placeholder="Search for a user"
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default Search;
