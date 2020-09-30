import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button.attrs({
  type: 'button',
})`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
`;

function Button({ children, onClick }) {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
}

export default Button;
