import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import BoardCard from 'components/Board/BoardCard';
import BoardListOptions from 'components/Board/BoardListOptions';
import Button from 'components/Button';
import FormControl from 'components/FormControl';
import React, { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const BoardList = ({ boardId, title, cards }) => {
  const [dndCards, setDndCards] = useState(cards);
  const [listTitle, setListTitle] = useState(title);

  const handleCardDrop = (result) => {
    const { removedIndex, addedIndex, payload } = result;
    const items = JSON.parse(JSON.stringify(dndCards));
    if (removedIndex === null && addedIndex === null) return items;
    let removedCard = payload;

    if (removedIndex !== null) removedCard = items.splice(removedIndex, 1)[0];
    if (addedIndex !== null) items.splice(addedIndex, 0, removedCard);

    setDndCards(items);
  };

  const handleRename = ({ target }) => {
    const oldTitle = listTitle;
    if (!target.value.trim()) {
      setListTitle(oldTitle);
      return;
    }
    setListTitle(target.value);
  };

  return (
    <section css={tw`w-[250px] mx-4`}>
      <header
        className='list-drag-handle'
        css={tw`flex justify-between items-center mb-1 font-medium cursor-move`}
      >
        <FormControl
          value={listTitle}
          css={tw`bg-transparent`}
          onChange={handleRename}
          onClick={({ target }) => target.select()}
          onKeyDown={({ target, code }) => code === 'Enter' && target.blur()}
          onMouseDown={(e) => e.preventDefault()}
        />
        <BoardListOptions />
      </header>

      <Container
        groupName={boardId}
        getChildPayload={(index) => dndCards[index]}
        dragClass='card-ghost'
        dropClass='card-ghost-drop'
        dropPlaceholder={{ showOnTop: true, className: 'card-drop-preview' }}
        onDrop={handleCardDrop}
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

export default BoardList;
