import React from 'react';
import { Link } from 'react-router';
// import LanguageToggler from '../../containers/LanguageToggler';
import { FormattedMessage } from 'react-intl';
import LogoutIcon from 'react-icons/lib/md/power-settings-new';
import messages from './messages';
import MobileButton from './MobileButton';
import Auth from '../../utils/auth';

export default class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    location: React.PropTypes.object,
  };

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top navbar-inverse">
        <div className="container">
          <MobileButton />
          <div className="collapse navbar-collapse" id="desktop-nav">
            <ul className="nav navbar-nav">
              <li><Link to="/"><FormattedMessage {...messages.home} /></Link></li>
              <li className="dropdown">
                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><FormattedMessage {...messages.projects} /><span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to={`/project/archicom`}>Archicom</Link></li>
                  <li><Link to={`/project/zzysh`}>Zzysh</Link></li>
                  <li><Link to={`/project/20_minut_przerwy`}>20 minut przerwy</Link></li>
                </ul>
              </li>
              <li><Link to="/uptime">Czas pracy</Link></li>
              <li><Link to="/calendar">Kalendarz</Link></li>
              <li><Link to="/community">Społeczność</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><LogoutIcon
                onClick={() => {
                  Auth.deauthenticateUser(); 
                  setTimeout(() => {
                    window.location.reload()
                  }, 200);
                }}
                style={{ height: '30px', width: '30px', margin: '10px 0', cursor: 'pointer', color: '#fff' }}
              /></li>
            </ul>
          </div>
          {/* <LanguageToggler></LanguageToggler> */}
        </div>
      </nav>
    );
  }
}
