import React from 'react';
import Select from './Select';
import ToggleOption from '../ToggleOption';
import Img from './Img'
import lanIcon from './lan_icon.svg'

function Toggle(props) {
  let content = (<option>--</option>);

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => (
      <ToggleOption key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <div>
        <Img src={lanIcon} alt="language"/>
        <Select value={props.value} onChange={props.onToggle}>
            {content}
        </Select>
    </div>
    
  );
}

Toggle.propTypes = {
  onToggle: React.PropTypes.func,
  values: React.PropTypes.array,
  value: React.PropTypes.string,
  messages: React.PropTypes.object,
};

export default Toggle;