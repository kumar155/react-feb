import React from 'react';
import PropTypes from 'prop-types';

export default class InputField extends React.Component {
    constructor(props) {
        super(props);
    }

    onInputChange = (event) => {
        this.props.onInputChange(event.target.value);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control"
                placeholder={this.props.placeHolder} 
                onChange={(event) => this.onInputChange(event)}
                value={this.props.value}/>
        );
    }
}

InputField.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string.isRequired,
}