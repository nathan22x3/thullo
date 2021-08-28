import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import BoardColumn from 'components/Board/BoardColumn';
import columns from 'components/Board/data.json';
import Button from 'components/Button';
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
/** @jsxImportSource @emotion/react */
import tw, { css } from 'twin.macro';

const Board = () => {
  const [dndColumns, setDndColumns] = useState(
    JSON.parse(JSON.stringify(columns))
  );
  const [placeholderProps, setPlaceholderProps] = useState({});

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = JSON.parse(JSON.stringify(dndColumns));
    const getColumn = (id) => items.find((col) => col.id === id);

    const sourceClone = getColumn(source.droppableId);
    const desClone = getColumn(destination.droppableId);

    const [removedCard] = sourceClone.cards.splice(source.index, 1);
    desClone.cards.splice(destination.index, 0, removedCard);

    setPlaceholderProps({});
    setDndColumns(items);
  };

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
      <DragDropContext onDragEnd={onDragEnd}>
        {dndColumns.map(({ id, title, cards }) => (
          <BoardColumn {...{ key: id, id, title, cards, placeholderProps }} />
        ))}
      </DragDropContext>
      <Button
        label='Add another list'
        endIcon={<AddIcon width={20} />}
        css={tw`font-noto text-sm text-blue bg-blue-light hover:(text-white bg-blue)`}
      />
    </div>
  );
};

export default Board;
