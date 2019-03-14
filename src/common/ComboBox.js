import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ComboBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: props.selectedValue,
        };
    }
    render() {
        return (
            <select className="form-control"
                value={this.state.selectedValue}
                onChange={(event) => this.onItemSelected(event.target.value)}>
                {
                    this.props.items.map((item, index) =>
                        <option value={item.value} key={index}>{item.text}</option>
                    )}
            </select>
        );
    }

    onItemSelected = (item) => {
        this.props.onItemSelected(item);
        this.setState({ selectedValue: item });
    }
}

ComboBox.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
    selectedValue: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(Object).isRequired,
}