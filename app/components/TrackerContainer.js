import React from 'react';
import styled from 'styled-components';

const TrackerContainer = styled.div`
  width: ${(props) => props.trackerWidth ? `${props.trackerWidth}%` : '100%'};
  float: left;
  margin: 10px 0;
  padding: 10px 0;
  border: 1px solid blue;
`;

export default TrackerContainer;
