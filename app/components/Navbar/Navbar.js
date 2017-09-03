import React from 'react';
import { Link } from 'react-router';
// import LanguageToggler from '../../containers/LanguageToggler';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MobileButton from './MobileButton'

export default class Navbar extends React.Component {
  static propTypes = {
      location: React.PropTypes.object,
  };

  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
            <div className="container">
                <MobileButton/>
                <div className="collapse navbar-collapse pull-left" id="desktop-nav">
                    <ul className="nav navbar-nav">
                        <li><Link to="/"><FormattedMessage {...messages.home} /></Link></li>
                        <li><Link to="/projects"><FormattedMessage {...messages.projects} /></Link></li>
                    </ul>
                </div>
                {/* <LanguageToggler></LanguageToggler> */}
            </div>
        </nav>
    )
  } 
}
