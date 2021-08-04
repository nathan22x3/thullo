import Button from 'components/Button';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const SearchInput = () => {
  return (
    <div css={tw`flex items-center p-1 rounded-lg shadow-md`}>
      <input
        type='text'
        placeholder='Keyword...'
        css={tw`flex-1 py-2 pl-3 border-none outline-none font-poppins placeholder-gray-200`}
      />
      <Button label='Search' variant='primary' />
    </div>
  );
};

export default SearchInput;
