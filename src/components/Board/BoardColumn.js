import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';
import BoardCard from 'components/Board/BoardCard';
import Button from 'components/Button';
import React, { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const BoardColumn = ({ boardId, title, cards }) => {
  const [dndCards, setDndCards] = useState(cards);

  const onCardDrop = (result) => {
    const { removedIndex, addedIndex, payload } = result;
    const items = JSON.parse(JSON.stringify(dndCards));
    if (removedIndex === null && addedIndex === null) return items;
    let removedCard = payload;

    if (removedIndex !== null) removedCard = items.splice(removedIndex, 1)[0];
    if (addedIndex !== null) items.splice(addedIndex, 0, removedCard);

    setDndCards(items);
  };

  return (
    <section css={tw`w-[250px] mx-4`}>
      <header
        className='column-drag-handle'
        css={tw`flex justify-between items-center mb-1 font-medium cursor-move`}
      >
        <span>{title}</span>
        <MoreIcon width={20} />
      </header>

      <Container
        groupName={boardId}
        getChildPayload={(index) => dndCards[index]}
        dragClass='card-ghost'
        dropClass='card-ghost-drop'
        dropPlaceholder={{ showOnTop: true, className: 'card-drop-preview' }}
        onDrop={onCardDrop}
      >
        {dndCards?.map(({ id, ...rest }) => (
          <Draggable key={id}>
            <BoardCard {...rest} />
          </Draggable>
        ))}
      </Container>
      <Button
        label='Add another card'
        endIcon={<AddIcon width={20} />}
        css={tw`w-full mt-3 font-noto text-sm text-blue bg-blue-light hover:(text-white bg-blue)`}
      />
    </section>
  );
};

export default BoardColumn;
