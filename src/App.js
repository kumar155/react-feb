import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 1. stateful/class component
export class MyComponent extends Component {
  render() {
    return (
      <div>
        hello React world...!
        <MyFunctionalComponent />
        <MyFunctionalComponent1 name="My name is satish..." value="1" keyData="100" />
      </div>
    );
  }
}

// 2. functional/stateless/dumb components
export const MyFunctionalComponent = () => (
  <div>
    <h3>My Functional Component...!</h3>
  </div>
);

// example -2 

const MyFunctionalComponent1 = (props) => {
  return (
    <div>
      <h3>My Functional Component...! {props.name}</h3>
      <h3>My Functional Component...! {props.value}</h3>
      <h3>My Functional Component...! {props.keyData}</h3>
    </div>
  );
}

// table -> column headers (thead) -> tbody(td's -> data(users list))

