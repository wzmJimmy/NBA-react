import React, { Component } from 'react';
import { Icon, Input,AutoComplete } from 'antd';
import nba from 'nba';
import _ from 'lodash';
import {PROFILE_IMAGE_PREFIX} from "../assets/const";

import '../styles/SearchBar.css';
//import {MyAutoComplete} from "./MyAutoComplete";

export class SearchBar extends Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        const players = nba.searchPlayers(value);
        console.log(players);
        this.setState({
            dataSource: !value ? [] : players.map(({playerId,fullName})=>(
                    <Option key={playerId} value={fullName}>
                        <img src={`${PROFILE_IMAGE_PREFIX}${playerId}.png`}
                             className="option-picture" alt="Profile"/>
                        <span className={"option-label"}>{fullName}</span>
                    </Option>
            )

            ),
        });
    }
    onSelect =(value)=>{
        console.log(value);
        this.props.onSelect(value);
    }

    render() {
        const { dataSource } = this.state;
        return (
            <div>
                {/*<MyAutoComplete/>*/}
            <AutoComplete
                className="searchBar"
                dropdownClassName="searchBar-dropdown"

                size="large"
                dataSource={dataSource}
                onSearch={_.debounce(this.handleSearch,500)}
                onSelect={this.onSelect}
                placeholder="Search NBA Player."
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
            </div>
                );
    }
}

const Option = AutoComplete.Option;
