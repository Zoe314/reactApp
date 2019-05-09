import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import IndexPage from "./pages/home/home";
import Buttonpage from "./pages/app/App";

export class MainRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage} />
                    <Route exact path={'/button'} component={Buttonpage} />
                </Switch>
            </HashRouter>
        );
    }
}