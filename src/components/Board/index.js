import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import BoardColumn from 'components/Board/BoardColumn';
import columns from 'components/Board/data.json';
import Button from 'components/Button';
import React, { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Board = () => {
  const [dndColumns, setDndColumns] = useState(
    JSON.parse(JSON.stringify(columns))
  );

  const onColumnDrop = (result) => {
    const { addedIndex, removedIndex } = result;
    const items = JSON.parse(JSON.stringify(dndColumns));
    const [removedColumn] = items.splice(removedIndex, 1);
    items.splice(addedIndex, 0, removedColumn);
    setDndColumns(items);
  };

  return (
    <div
      css={tw`overflow-x-auto flex items-start pt-3 pb-7 pl-2 rounded-3xl bg-[#f8f9fd]`}
    >
      <Container
        orientation='horizontal'
        dragHandleSelector='.column-drag-handle'
        dropPlaceholder={{ showOnTop: true, className: 'column-drop-preview' }}
        onDrop={onColumnDrop}
      >
        {dndColumns.map(({ id, title, cards }) => (
          <Draggable key={id}>
            <BoardColumn {...{ boardId: 'test', title, cards }} />
          </Draggable>
        ))}
      </Container>
      <Button
        label='Add another list'
        endIcon={<AddIcon width={20} />}
        css={tw`w-[250px] min-w-[250px] mt-4 mr-6 ml-3 font-noto text-sm text-blue bg-blue-light hover:(text-white bg-blue)`}
      />
    </div>
  );
};

export default Board;
