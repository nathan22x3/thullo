import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import BoardColumn from 'components/Board/BoardColumn';
import columns from 'components/Board/data.json';
import Button from 'components/Button';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw, { css } from 'twin.macro';

const Board = () => {
  return (
    <div
      css={[
        tw`overflow-x-auto flex justify-start items-start gap-x-8 min-w-full px-6 py-7 rounded-3xl bg-[#F8F9FD]`,
        css`
          > * {
            min-width: 250px;
            max-width: 250px;
          }
        `,
      ]}
    >
      {columns.map(({ id, title, cards }) => (
        <BoardColumn {...{ key: id, title, cards }} />
      ))}
      <Button
        label='Add another list'
        endIcon={<AddIcon width={20} />}
        css={tw`font-noto text-sm text-blue bg-blue-light hover:(text-white bg-blue)`}
      />
    </div>
  );
};

export default Board;
