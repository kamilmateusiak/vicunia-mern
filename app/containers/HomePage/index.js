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
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import Button from '../../components/Button';
// import { Link } from 'react-router';
import Banner from './Banner';
import Tracker from '../Tracker';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  buttonClick = () => {
    console.log('click')
  }
  render() {
    return (
      <div>
        <Banner></Banner>
        <div className="container">
          {/* <h1>
            <FormattedMessage {...messages.header} />
          </h1> */}
          {/* <Link to="/projects">
            <Button onClick={this.buttonClick}>Projects</Button>
          </Link>
          <Button primary>Blabla</Button> */}
          <Tracker></Tracker>
        </div>
      </div>
    )
  }
}
