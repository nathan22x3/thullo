import React from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const FormControl = ({
  innerRef,
  type,
  value,
  placeholder,
  autoFocus,
  disabled,
  onChange,
  ...props
}) => {
  return (
    <input
      ref={innerRef}
      css={tw`px-3 py-2 border-none outline-none rounded-lg font-noto placeholder-gray-200 focus:(ring-2 ring-blue) duration-200`}
      {...{ type, value, placeholder, autoFocus, disabled, onChange }}
      {...props}
    />
  );
};

FormControl.propTypes = {
  innerRef: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

FormControl.defaultProps = {
  innerRef: null,
  type: 'text',
  value: '',
  placeholder: 'Placeholder...',
  autoFocus: false,
  disabled: false,
  onChange: () => {},
};

export default FormControl;
