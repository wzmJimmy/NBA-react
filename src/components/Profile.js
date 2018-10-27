import React, { Component } from 'react';
import '../styles/Profile.css'
import {PROFILE_IMAGE_PREFIX,PROFILE_LOGO_PREFIX} from "../assets/const";


export class Profile extends Component {
    render() {
        const {playerId,playerName,teamCity,
            teamName,teamAbbreviation,
            height,weight,pts,reb,ast,pie,
        }=this.props.playerInfo

        return (
            <div id="profile">
                <p className="profile-title">{`${playerName}`}</p>
                <img src={`${PROFILE_IMAGE_PREFIX}${playerId}.png`}
                    className="profile-picture" alt="Profile"/>
                <ul className="profile-list">
                    <li className="profile-entry">
                        <p className="profile-left">Team</p>
                        <p className="profile-right">{`${teamCity} ${teamName}`}</p>
                    </li>
                    <li>
                        <img src={`${PROFILE_LOGO_PREFIX}${teamAbbreviation}_logo.svg`} className="profile-logo" alt="Profile"/>
                    </li>
                    <li className="profile-entry">
                        <p className="profile-left">Height</p>
                        <p className="profile-right">{height}</p>
                    </li>
                    <li className="profile-entry">
                        <p className="profile-left">Weight</p>
                        <p className="profile-right">{weight}</p>
                    </li>
                    <li className="profile-entry">
                        <p className="profile-left">PTS</p>
                        <p className="profile-right">{pts}</p>
                    </li>
                    <li className="profile-entry">
                        <p className="profile-left">AST</p>
                        <p className="profile-right">{ast}</p>
                    </li>
                    <li className="profile-entry">
                        <p className="profile-left">REB</p>
                        <p className="profile-right">{reb}</p>
                    </li>
                    <li className="profile-entry">
                        <p className="profile-left">PIE</p>
                        <p className="profile-right">{pie}</p>
                    </li>
                </ul>
            </div>
        )
    }
}