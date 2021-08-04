import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const types = {
  'Full-stack': { textColor: 'text-orange', bgColor: 'bg-orange-light' },
  'Front-end': { textColor: 'text-yellow', bgColor: 'bg-yellow-light' },
  Design: { textColor: 'text-green', bgColor: 'bg-green-light' },
  Technical: { textColor: 'text-blue', bgColor: 'bg-blue-light' },
  Concept: { textColor: 'text-purple', bgColor: 'bg-purple-light' },
};

const Label = ({ name }) => {
  return (
    <span
      className={`${types[name].textColor} ${types[name].bgColor}`}
      css={tw`px-3 py-1 rounded-lg font-noto font-bold text-2xs`}
    >
      {name}
    </span>
  );
};

export default Label;
