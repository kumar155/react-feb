import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            name: 'react class',
        };
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    changeName = () => {
        this.setState({ name: 'some other name' });
    }
    render() {
        return (
            <div className="App">
                <h1>React Demo</h1>
                Count_Value: {this.state.count}
                <br />
                <br />
                <button onClick={this.increment}>Increment Count Value</button>
                <br />
                <br />
                <button onClick={this.changeName}>Change Name</button>
                <br />
                <br />
                {this.state.name}
                <br />
                <br />
            </div>
        );
    }
}

export default Counter;