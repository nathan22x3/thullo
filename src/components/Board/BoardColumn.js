import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';
import BoardCard from 'components/Board/BoardCard';
import Button from 'components/Button';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const BoardColumn = ({ title, cards }) => {
  return (
    <section>
      <header css={tw`flex justify-between items-center mb-4 font-medium`}>
        <span>{title}</span>
        <MoreIcon width={20} />
      </header>
      <div css={tw`flex flex-col gap-y-6`}>
        {cards?.map(({ id, ...rest }) => (
          <BoardCard key={id} {...rest} />
        ))}
        <Button
          label='Add another card'
          endIcon={<AddIcon width={20} />}
          css={tw`font-noto text-sm text-blue bg-blue-light hover:(text-white bg-blue)`}
        />
      </div>
    </section>
  );
};

export default BoardColumn;
