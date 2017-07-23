import React from 'react';

export default class MobileButton extends React.PureComponent {
    render() {
        return (
            <button type="button" className="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#desktop-nav" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>       
        )
    } 
}