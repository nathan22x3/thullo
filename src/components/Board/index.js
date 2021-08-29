import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import BoardList from 'components/Board/BoardList';
import lists from 'components/Board/data.json';
import Button from 'components/Button';
import FormControl from 'components/FormControl';
import React, { useState, useRef } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { v4 as uuidv4 } from 'uuid';

const Board = () => {
  const [dndLists, setDndLists] = useState(JSON.parse(JSON.stringify(lists)));

  const [openNewListForm, setOpenAddListForm] = useState(false);
  const [newListTitle, setNewListTitle] = useState('');
  const newListInputRef = useRef(null);

  const onListDrop = (result) => {
    const { addedIndex, removedIndex } = result;
    const items = JSON.parse(JSON.stringify(dndLists));
    const [removedList] = items.splice(removedIndex, 1);
    items.splice(addedIndex, 0, removedList);
    setDndLists(items);
  };

  const handleAddList = (e) => {
    e.preventDefault();

    if (!newListTitle.trim()) {
      newListInputRef.current.focus();
      return;
    }

    const newColumn = {
      id: uuidv4(),
      title: newListTitle.trim(),
      cards: [],
    };

    setDndLists([...dndLists, newColumn]);
    setNewListTitle('');
    setOpenAddListForm(false);
  };

  return (
    <div
      css={tw`overflow-x-auto flex items-start pt-3 pb-7 pl-2 rounded-3xl bg-[#f8f9fd]`}
    >
      <Container
        orientation='horizontal'
        dragHandleSelector='.list-drag-handle'
        dropPlaceholder={{ showOnTop: true, className: 'column-drop-preview' }}
        onDrop={onListDrop}
      >
        {dndLists.map(({ id, title, cards }) => (
          <Draggable key={id}>
            <BoardList {...{ boardId: 'test', title, cards }} />
          </Draggable>
        ))}
      </Container>
      <div css={tw`w-[250px] min-w-[250px] mt-4 mr-6 ml-3`}>
        {!openNewListForm ? (
          <Button
            label='Add another list'
            endIcon={<AddIcon width={20} />}
            css={tw`w-full font-noto text-sm text-blue bg-blue-light hover:(text-white bg-blue)`}
            onClick={() => setOpenAddListForm(true)}
          />
        ) : (
          <form onSubmit={handleAddList}>
            <FormControl
              css={tw`border border-solid border-gray-100 `}
              innerRef={newListInputRef}
              value={newListTitle}
              placeholder='Enter list title...'
              autoFocus
              onChange={(e) => setNewListTitle(e.target.value)}
            />
            <div css={tw`flex items-center gap-x-2 mt-2`}>
              <Button label='Add list' variant='primary' />
              <CloseIcon
                css={tw`cursor-pointer`}
                width={28}
                height={28}
                onClick={() => setOpenAddListForm(false)}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Board;
