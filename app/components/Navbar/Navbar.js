import React from 'react';
import { Link } from 'react-router';
import LanguageToggler from '../../containers/LanguageToggler';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                    <div className="pull-right">
                        <LanguageToggler></LanguageToggler>
                    </div>
                </div>
            </nav>
        )
    } 
}
