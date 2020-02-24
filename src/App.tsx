import * as React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import AppRoute from './route'
import { NotFound } from './404'

export interface AppProps { }

export class App extends React.Component<AppProps, {}> {
    render() {
        return(
            <div>
                <Switch>
                    {AppRoute.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        );
                    })}
                    <Route path="/404" exact component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </div>
        )
    }
}