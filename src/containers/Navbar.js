import { ReactComponent as AppsIcon } from 'assets/icons/apps.svg';
import { ReactComponent as Logo } from 'assets/images/logo-text.svg';
import Account from 'components/Account';
import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import React from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Navbar = () => {
  return (
    <nav css={tw`flex justify-between items-center px-6 py-4 shadow`}>
      <div css={tw`flex items-center gap-x-20`}>
        <Link to='/'>
          <Logo />
        </Link>
        <div css={tw`flex items-center gap-x-6 `}>
          <p
            css={tw`m-0 px-6 py-2 border-0 border-r border-solid border-gray-100 font-medium text-lg`}
          >
            Devchallenges Board
          </p>
          <Button label='All board' startIcon={<AppsIcon width={12} />} />
        </div>
      </div>
      <div css={tw`flex items-center gap-x-10`}>
        <SearchBar />
        <Account name='Nathan Nguyen' />
      </div>
    </nav>
  );
};

export default Navbar;
