import * as React from 'react'

const AppRoute = [
    {
        path:      "/",
        component: React.lazy(() => import(/* webpackChunkName: "pages/home" */'./pages/home')),
        exact:     true,
        title:     "Home"
    },
    {
        path:      "/about",
        component: React.lazy(() => import(/* webpackChunkName: "pages/about" */'./pages/about')),
        exact:     true,
        title:     "About"
    },
    {
        path:      "/list",
        component: React.lazy(() => import(/* webpackChunkName: "pages/list" */'./pages/list')),
        exact:     true,
        title:     "List"
    }
]

export default AppRoute