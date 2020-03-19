import * as React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import AppRoute from './route'
import { NotFound } from './404'

import '@/style/index.less'

export interface AppProps { }

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#5da381',
      },
      error: {
        main: '#f5222d'
      },
      warning: {
        main: '#faad14'
      },
      info: {
        main: '#1890ff'
      },
      success: {
        main: '#52c41a'
      }
    }
})

export class App extends React.Component<AppProps, {}> {
    render() {
        return(
            <div>
                <React.Suspense fallback={<h1>loading...</h1>}>
                  <ThemeProvider theme={theme}>
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
                  </ThemeProvider>
                </React.Suspense>
            </div>
        )
    }
}