import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TrackerContainer from './TrackerContainer';
import Input from './Input'

export default class Tracker extends React.Component {
    render() {
        return (
            <TrackerContainer>
                <Input  
                // onBlur={() => this.props.focusController(false)}
                        onFocus={() => this.props.focusController(true)} 
                        value={this.props.selectedItem} 
                        onChange={this.props.handleOnChange} placeholder="Dodaj zadanie" />
            </TrackerContainer>
        )
    } 
}
