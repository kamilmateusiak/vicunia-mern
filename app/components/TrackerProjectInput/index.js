import React from 'react';
import TrackerContainer from './TrackerContainer';
import DefaultLargeInput from '../DefaultLargeInput';

function TrackerProjectInput(props) {
  return (
    <TrackerContainer>
      <DefaultLargeInput
        onFocus={() => props.focusController(true)}
        value={props.selectedItem}
        onChange={props.handleOnChange} placeholder="Dodaj zadanie"
      />
    </TrackerContainer>
  );
}

TrackerProjectInput.propTypes = {
  focusController: React.PropTypes.func,
  selectedItem: React.PropTypes.string,
  handleOnChange: React.PropTypes.func,
};

export default TrackerProjectInput;
