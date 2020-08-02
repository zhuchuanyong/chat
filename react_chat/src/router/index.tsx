import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Login from '../views/login';
function RouterConfig() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact  path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default RouterConfig;
