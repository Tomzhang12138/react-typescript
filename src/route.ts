import * as React from 'react'

const AppRoute = [
    {
        path:      "/",
        component: React.lazy(() => import('./pages/home')),
        exact:     true,
        title:     "Home"
    },
    {
        path:      "/about",
        component: React.lazy(() => import('./pages/about')),
        exact:     true,
        title:     "About"
    },
    {
        path:      "/list",
        component: React.lazy(() => import('./pages/list')),
        exact:     true,
        title:     "List"
    }
]

export default AppRoute