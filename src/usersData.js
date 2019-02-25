
import React, { Component } from 'react';

export default class UsersData extends Component {
    constructor() {
        super();
        this.users = [
            { name: 'satish', city: 'hyderabad', profession: 'trainer' },
            { name: 'AAAA', city: 'hyderabad', profession: 'AAAA' },
            { name: 'BBBB', city: 'hyderabad', profession: 'BBBB' },
        ];
    }
    render() {
        return (
            <div className="container">
                <h3>Users Data table...</h3>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <div className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>
                                        Name
                                    </td>
                                    <td>
                                        City
                                    </td>
                                    <td>
                                        Profession
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.users.map((user, index) => (
                                        <TableRow item={user} key={index} />
                                    ))
                                }
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const TableRow = ({ item }) => {
    return (
        <tr>
            <td>
                {item.name}
            </td>
            <td>
                {item.city}
            </td>
            <td>
                {item.profession}
            </td>
        </tr>
    );
};