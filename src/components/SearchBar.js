import Button from 'components/Button';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const SearchBar = () => {
  return (
    <div css={tw`overflow-hidden p-1 flex items-stretch rounded-lg shadow-md`}>
      <input
        type='text'
        placeholder='Keyword...'
        css={tw`flex-1 px-3 py-2 border-none outline-none font-poppins placeholder-gray-200`}
      />
      <Button label='Search' variant='primary' />
    </div>
  );
};

export default SearchBar;
