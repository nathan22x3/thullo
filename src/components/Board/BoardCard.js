import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as AttachIcon } from 'assets/icons/attach.svg';
import { ReactComponent as CommentIcon } from 'assets/icons/comment.svg';
import Button from 'components/Button';
import Label from 'components/Label';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const BoardCard = ({
  cover,
  title,
  labels,
  members,
  comments,
  attach_files,
  innerRef,
  ...rest
}) => {
  return (
    <div
      ref={innerRef}
      css={tw`flex flex-col p-3 rounded-xl shadow-md bg-white`}
      {...rest}
    >
      {cover && <img src={cover} alt={title} css={tw`mb-3 rounded-xl`} />}
      <p css={tw`mb-[18px] font-noto`}>{title}</p>
      <div css={tw`flex gap-x-3 mb-[22px]`}>
        {labels?.map((name) => (
          <Label {...{ key: name, name }} />
        ))}
      </div>
      <div css={tw`flex justify-between`}>
        <div css={tw`flex gap-2`}>
          {members.map(({ id, name, avatar_url }) => (
            <img
              key={id}
              src={avatar_url}
              alt={name}
              css={tw`w-7 rounded-lg`}
            />
          ))}
          <Button
            variant='primary'
            startIcon={<AddIcon width={21} height={21} />}
            css={tw`p-1`}
          />
        </div>
        <div css={tw`flex gap-x-2 items-center text-xs text-gray-200`}>
          {comments?.length > 0 && (
            <span css={tw`flex items-center gap-x-1`}>
              <CommentIcon width={16} />
              {comments.length}
            </span>
          )}
          {attach_files?.length > 0 && (
            <span css={tw`flex items-center gap-x-1`}>
              <AttachIcon width={16} />
              {attach_files.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
