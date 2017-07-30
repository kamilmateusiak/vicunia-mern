/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TrackerComp from '../../components/Tracker';
import TrackerList from '../../components/TrackerList';

const items = [
  { id: 1, name: 'Zzysh' },
  { id: 2, name: 'Archicom' },
  { id: 3, name: 'Wielton' },
  { id: 4, name: 'Nieprojektowe prace produkcji' },
];

export default class Tracker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedItem: '',
    listVisibility: false,
  }
  handleOnChange = (e) => {
    this.setState({
      selectedItem: e.target.value,
      listVisibility: true,
    });
  }
  handleListItemClick = (item) => {
    this.setState({
      selectedItem: item.name,
      listVisibility: false,
    });
  }
  focusController = (state) => {
    this.setState({
      listVisibility: state,
    });
  }
  render() {
    return (
      <div className="container">
        {/* <h1>
          <FormattedMessage {...messages.header} />
        </h1> */}
        <TrackerComp focusController={this.focusController} selectedItem={this.state.selectedItem} handleOnChange={this.handleOnChange}></TrackerComp>
        {this.state.listVisibility &&
          <TrackerList handleListItemClick={this.handleListItemClick} items={items.filter((item) => item.name.toUpperCase().indexOf(this.state.selectedItem.toUpperCase()) >= 0)}></TrackerList>
        }
      </div>
    );
  }
}
