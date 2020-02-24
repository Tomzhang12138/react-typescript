import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)