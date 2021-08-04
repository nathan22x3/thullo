import { ReactComponent as DropDownIcon } from 'assets/icons/drop-down.svg';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Account = ({ name }) => {
  return (
    <div css={tw`flex items-center gap-3 text-gray-500 cursor-pointer`}>
      <img
        src='https://avatars.githubusercontent.com/u/67423224'
        alt='Nathan Nguyen'
        css={tw`w-8 rounded-lg`}
      />
      <span css={tw`font-noto font-bold text-sm`}>{name}</span>
      <DropDownIcon />
    </div>
  );
};

export default Account;
