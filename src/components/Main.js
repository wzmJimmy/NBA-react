import React, { Component } from 'react';
import nba from 'nba';

import '../styles/Main.css';
import {Profile} from "./Profile";
import {DataViewContainer} from "./DataViewContainer";
import {SearchBar} from "./SearchBar";
import {DEFAULT_PLAYER_INFO} from '../assets/const'

export class Main extends Component {
    state={
        playerInfo:DEFAULT_PLAYER_INFO,
    }

    componentDidMount(){
        this.loadPlayerInfo(this.state.playerInfo.playerName);

    }
    loadPlayerInfo = ( playerName)=>{
        const playerId = nba.findPlayer(playerName).playerId;
        nba.stats.playerInfo({PlayerID: playerId}).then(
            (info) => {
                var playerInfo = {...info.commonPlayerInfo[0],...info.playerHeadlineStats[0]}
                this.setState({playerInfo})
            }
        );
    }

    render() {
        return (
            <div className={"main"}>
                <SearchBar onSelect={this.loadPlayerInfo}/>
                <section>
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </section>
            </div>

        )
    }
}