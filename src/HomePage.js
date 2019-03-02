import React from 'react';
import StateComponent from './ReactState';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from './actions/simpleActions';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            default_count: 15,
            parent_Counter: 0,
        }
    }
    render() {
        return (
            <div style={{}} className=''>
                <div className="nav-bar">
                    <Link to="/users">Show Users List.</Link>
                    <br />
                    <br />
                    <Link to="/">Show Home Page</Link>
                </div>
                <StateComponent
                    default_count={this.state.default_count}
                    name={'React'}
                    onIncrementClick={this.onIncrement}
                    onDecrementClick={this.onDecrement} />

                <div style={{ marginLeft: "30%" }}>
                    Parent Count: {this.state.parent_Counter}
                </div>
                SimpleReducer Value is: {this.props.simpleReducer}
                <br/>
                Increment Counter value is: {this.props.Inccounter}
                <br/>
                Decrement Counter value is: {this.props.Deccounter}
                <br/>
            </div>
        );
    }

    onIncrement = () => {
        // this.setState({ parent_Counter: this.state.parent_Counter + 1 });
        this.props.onIncrementCount();
    }

    onDecrement = () => {
        this.setState({ parent_Counter: this.state.parent_Counter - 1 });
        this.props.onDecrementCount();
    }
}

const mapStoreToProps = (store) => ({
    simpleReducer: store.SimpleReducer,
    Inccounter: store.incrementCounter,
    Deccounter: store.decrementCounter,
});

const mapDispatchToProps = (dispatch) => ({
    onIncrementCount: () => dispatch(incrementCount()),
    onDecrementCount: () => dispatch(decrementCount()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(HomePage);



