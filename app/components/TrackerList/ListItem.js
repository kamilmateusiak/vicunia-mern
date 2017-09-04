import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 10px;
  list-style: none;
  transition: .2s ease-in-out;
  &:hover {
    background-color: #1565bf;
    color: #fff;
    transition: .2s ease-in-out;
  }
`;

export default ListItem;
