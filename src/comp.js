import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// export class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// // 1. stateful/class component
// export class MyComponent extends Component {
//   render() {
//     return (
//       <div className="container">
//         <h2>Test Application</h2>
//         <hr />
//         <div className="row">
//           <div className="col-6">
//             <div className="card">
//               <div className="card-header">Title</div>
//               <div className="card-body">Title</div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="table table-bordered table-dark">
//               <thead>
//                 <tr>
//                   <td>Statement</td>
//                   <td>op1</td>
//                   <td>op2</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Statement</td>
//                   <td>op1</td>
//                   <td>op2</td>
//                 </tr>
//               </tbody>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // 2. functional/stateless/dumb components
// export const MyFunctionalComponents = () => (
//   <div>
//     <h3>My Functional Component...!</h3>
//   </div>
// );

export default class ListComponent extends React.Component {
    render() {
        return (
            <div className="container" style={{ position: "absolute", top: "10%", left: "30%" }}>
                <div className="card" style={{ width: 500 }}>
                    <div className="card-header">
                        Featured
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        );
    }
}
