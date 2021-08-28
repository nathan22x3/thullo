import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';
import BoardCard from 'components/Board/BoardCard';
import Button from 'components/Button';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const BoardColumn = ({ id, title, cards }) => {
  return (
    <section>
      <header css={tw`flex justify-between items-center mb-4 font-medium`}>
        <span>{title}</span>
        <MoreIcon width={20} />
      </header>
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            css={tw`relative flex flex-col gap-y-6`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cards?.map(({ id, ...rest }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <BoardCard
                    innerRef={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    {...rest}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Button
        label='Add another card'
        endIcon={<AddIcon width={20} />}
        css={tw`mt-6 font-noto text-sm text-blue bg-blue-light hover:(text-white bg-blue)`}
      />
    </section>
  );
};

export default BoardColumn;
