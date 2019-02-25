
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.default_count,
        };
    }

    render() {
        return (
            <div className="container">
                <input type="button" className="btn btn-primary" onClick={this.decrement} value="Decrement" />
                <br />
                <br />
                <input type="button" className="btn btn-success" onClick={this.increment} value="Increment" />
                <br />
                <br />
                Count: {this.state.count}<br />
                <br />
                Default Count : {this.props.default_count}<br />
                <br />
                name: {this.props.name}
            </div>
        );
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
        this.props.onDecrementClick();
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
        this.props.onIncrementClick();
    }
}

StateComponent.propTypes = {
    default_count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onIncrementClick: PropTypes.func.isRequired,
    onDecrementClick: PropTypes.func.isRequired,
};
