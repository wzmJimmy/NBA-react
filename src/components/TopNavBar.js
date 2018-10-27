import React, { Component } from 'react';
import logo from '../assets/nba.svg';
import '../styles/TopNavBar.css'

export class TopNavBar extends Component {
    render() {
        return (
                <header className="header">
                    <img src={logo} className="logo"  alt="logo" />
                </header>
        )
    }
}

