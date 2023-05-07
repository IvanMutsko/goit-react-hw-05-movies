import { useState } from 'react';

import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmitForm }) => {
  const onSearch = evt => {
    evt.preventDefault();

    const query = evt.target.searchQuery.value;

    onSubmitForm(query);
    evt.target.reset();
  };

  return (
    <SearchbarBox>
      <SearchForm onSubmit={onSearch}>
        <SearchFormButton type="submit">Search</SearchFormButton>

        <SearchFormInput
          id="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
      </SearchForm>
    </SearchbarBox>
  );
};
