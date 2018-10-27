import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends Component {
    state={
        inputValue:this.props.inputValue,
    }
    onChange =(value) =>{
        var cleanValue = Number(value) ? value: this.state.inputValue;
        cleanValue = cleanValue>this.props.max?this.props.max:cleanValue;
        this.setState({
            inputValue: cleanValue,
        });
        this.props.onChange(cleanValue);
    }
    render() {
        const inputValue = this.state.inputValue;
        return (
            <Row>
                <Col offset={4} span={12}>
                    <Slider
                        min={this.props.min}
                        max={this.props.max}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : this.props.min}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={this.props.min}
                        max={this.props.max}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}