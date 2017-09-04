import React from 'react';
import DefaultLargeInput from '../DefaultLargeInput';

function TrackerProjectInput(props) {
  return (
    <DefaultLargeInput
      onFocus={() => props.focusController(true)}
      onBlur={() => props.focusController(false)}
      value={props.selectedItem}
      onChange={props.handleOnChange} placeholder="Dodaj zadanie"
    />
  );
}

TrackerProjectInput.propTypes = {
  focusController: React.PropTypes.func,
  selectedItem: React.PropTypes.string,
  handleOnChange: React.PropTypes.func,
};

export default TrackerProjectInput;
