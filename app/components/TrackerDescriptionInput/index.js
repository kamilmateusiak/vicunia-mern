import React from 'react';
import TrackerContainer from './TrackerContainer';
import DefaultLargeInput from '../DefaultLargeInput';

function TrackerDescriptionInput(props) {
  return (
    <TrackerContainer>
      <DefaultLargeInput
        value={props.selectedItemDescription}
        onChange={props.handleOnChange} placeholder="Dodaj opis"
      />
    </TrackerContainer>
  );
}

TrackerDescriptionInput.propTypes = {
  selectedItemDescription: React.PropTypes.string,
  handleOnChange: React.PropTypes.func,
};

export default TrackerDescriptionInput;
