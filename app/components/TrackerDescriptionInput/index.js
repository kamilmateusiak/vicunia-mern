import React from 'react';
import DefaultLargeInput from '../DefaultLargeInput';

function TrackerDescriptionInput(props) {
  return (
    <DefaultLargeInput
      value={props.selectedItemDesc}
      onChange={props.handleOnChange} placeholder="Dodaj opis"
    />
  );
}

TrackerDescriptionInput.propTypes = {
  selectedItemDesc: React.PropTypes.string,
  handleOnChange: React.PropTypes.func,
};

export default TrackerDescriptionInput;
