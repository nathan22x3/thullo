import Board from 'components/Board';
import BoardInfo from 'components/Board/BoardInfo';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const HomePage = () => {
  return (
    <div css={tw`flex flex-col gap-y-6 px-6 py-9`}>
      <BoardInfo />
      <Board />
    </div>
  );
};

export default HomePage;
