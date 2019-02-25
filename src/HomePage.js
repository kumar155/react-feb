import React from 'react';
import StateComponent from './ReactState';

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
                <StateComponent
                    default_count={this.state.default_count}
                    name={'React'}
                    onIncrementClick={this.onIncrement}
                    onDecrementClick={this.onDecrement} />

                <div style={{ marginLeft: "30%" }}>
                    Parent Count: {this.state.parent_Counter}
                </div>
            </div>
        );
    }

    onIncrement = () => {
        this.setState({ parent_Counter: this.state.parent_Counter + 1 });
    }

    onDecrement = () => {
        this.setState({ parent_Counter: this.state.parent_Counter - 1 });
    }
}
export default HomePage;


