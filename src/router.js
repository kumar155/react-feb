import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import UsersData from './usersData';

export const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/users" component={UsersData} />
            <Route path="/*" component={HomePage}/>
        </Switch>
    </Router>
);

export default Root;