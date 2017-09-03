import React from 'react';
import styled from 'styled-components';

const DivideButton = styled.button`
  font-size: 16px;
  width: 20px;
  height: 20px;
  border: 1px solid blue;
  border-radius: 2px;
  position: relative;
  margin-top: 1px;
  margin-bottom: 1px;
  &:before {
    content: '';
    width: 10px;
    height: 2px;
    background-color: blue;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 2px;
    transform: translate(-50%, -50%);
  }
`;

export default DivideButton;
