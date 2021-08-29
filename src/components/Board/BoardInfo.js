import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as PrivateIcon } from 'assets/icons/private.svg';
import Button from 'components/Button';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const members = [
  {
    id: 'b3f614f8-3ef9-4242-a5b0-bb7579264012',
    name: 'Human',
    avatar_url: 'https://avatars.githubusercontent.com/u/67423224',
  },
  {
    id: '9a6c0249-e304-4d57-bd82-d04b2e60e1e3',
    name: 'Zabrak',
    avatar_url: 'https://avatars.githubusercontent.com/u/63340848',
  },
  {
    id: 'f6cfb7cf-1e38-4aad-bd56-e9e06cfd8d5d',
    name: 'Mirialan',
    avatar_url: 'https://avatars.githubusercontent.com/u/68641445',
  },
];

const BoardInfo = () => {
  return (
    <div css={tw`flex gap-4`}>
      <Button label='Private' startIcon={<PrivateIcon width={12} />} />
      {members.map(({ id, name, avatar_url }) => (
        <img
          key={id}
          src={avatar_url}
          alt={name}
          css={tw`w-10 h-10 rounded-lg bg-gray-50`}
        />
      ))}
      <Button
        variant='primary'
        startIcon={<AddIcon width={24} />}
        css={tw`p-2`}
      />
    </div>
  );
};

export default BoardInfo;
