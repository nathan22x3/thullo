import PropTypes from 'prop-types';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Button = ({
  label,
  variant,
  startIcon,
  endIcon,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <button
      css={[
        tw`flex items-center gap-x-3 px-4 py-2 border-none rounded-lg font-poppins font-medium cursor-pointer duration-200`,
        variant === 'default' && tw`text-gray-300 bg-gray-50 hover:bg-gray-100`,
        variant === 'primary' && tw`text-white bg-blue hover:bg-blue-dark`,
      ]}
      {...{ disabled, onClick }}
      {...props}
    >
      {startIcon && startIcon}
      {label && <span css={tw`flex-1 text-left`}>{label}</span>}
      {endIcon && endIcon}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary']),
  startIcon: PropTypes.object,
  endIcon: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: '',
  variant: 'default',
  startIcon: null,
  endIcon: null,
  disabled: false,
  onClick: () => {},
};

export default Button;
