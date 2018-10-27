import React, { Component } from 'react';
import { Radio,Switch } from 'antd';
import _ from 'lodash';

import {Chart} from "./Chart";
import '../styles/DataViewContainer.css'
import {CountSlider} from "./CountSlider";

const RadioGroup = Radio.Group;

export class DataViewContainer extends Component {
    state = {
        minCount:2,
        showToolTips:true,
        chartType:"hexbin",
    }
    onTypeChange = (e) => {
        //console.log(e);
        this.setState({
            chartType: e.target.value,
        });
    }
    onShowChange = (show) => {
        //console.log(show);
        this.setState({
            showToolTips: show,
        });
    }
    onCountChange = (minCount) => {
        //console.log(minCount);
        this.setState({
            minCount
        });
    }

    render(){
        return(<div className="dataview-container">
            <Chart
                minCount={this.state.minCount}
                showToolTips={this.state.showToolTips}
                chartType={this.state.chartType}
                playerId={this.props.playerId}/>
            {
                this.state.chartType==="hexbin"
                    ?<CountSlider inputValue={this.state.minCount} onChange={_.debounce(this.onCountChange,200)} min={2} max={20}/>
                    :null
            }

            <RadioGroup onChange={this.onTypeChange} value={this.state.chartType}>
                <Radio value={"hexbin"}>hexbin</Radio>
                <Radio value={"scatter"}>scatter</Radio>
            </RadioGroup>
            <Switch checkedChildren="On" unCheckedChildren="Off" onChange={this.onShowChange} defaultChecked />
        </div>)
    }
}