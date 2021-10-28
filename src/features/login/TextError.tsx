import React from 'react';
import styled from 'styled-components';
const TextError: React.FC = (props) => {
  return <ColoredText>{props.children}</ColoredText>;
};

export default TextError;

const ColoredText = styled.div`
  color: red;
`;
