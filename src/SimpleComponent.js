
import React from 'react';
import PropTypes from 'prop-types';


class SimpleComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                User Name: {this.state.name}
                User Id is: {this.state.value}
                <input type="button" value="submit" onClick={() => this.onSubmit}/>
            </div>
        );
    }

    onSubmit = () => {
        return this.state.name;
    }
}

SimpleComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default SimpleComponent;