

import React from 'react';
import { ButtonStyle, IconLeft, IconRight } from './styled';

const Button = ({
  text,
  onClick,
  icon,
  iconPosition,
  outline,
  disabled,
}) => {
  return (
    <ButtonStyle onClick={onClick} outline={outline} disabled={disabled}>
      {icon && iconPosition === 'left' && <IconLeft>{icon}</IconLeft>}
      {text}
      {icon && iconPosition === 'right' && <IconRight>{icon}</IconRight>}
    </ButtonStyle>
  );
};

export default Button;
