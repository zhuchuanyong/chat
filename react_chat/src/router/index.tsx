import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Login from '../views/login';
import Signup from '../views/signup';
import Search from '../views/search';
import UserHome from '../views/userhome';
function RouterConfig() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact   path="/">
                    <Home />
                </Route>

                <Route   path="/login">
                    <Login />
                </Route>
                <Route   path="/signup">
                    <Signup />
                </Route>
                <Route   path="/search">
                    <Search />
                </Route>
                <Route   path="/userhome">
                    <UserHome />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default RouterConfig;
