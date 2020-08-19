import * as React from 'react'

const AppRoute = [
    {
        path:      "/",
        component: React.lazy(() => import(/* webpackChunkName: "pages/data-stdio-list" */'./pages/data-stdio-list')),
        exact:     true,
        title:     "data-stdio-list"
    },
    {
        path:      "/add-data-stdio",
        component: React.lazy(() => import(/* webpackChunkName: "pages/add-data-stdio" */'./pages/add-data-stdio')),
        exact:     true,
        title:     "add-data-stdio"
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