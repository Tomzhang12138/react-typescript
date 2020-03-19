import Home from './pages/home'
import About from './pages/about'
import List from './pages/list'

const AppRoute = [
    {
        path:      "/",
        component: Home,
        exact:     true,
        title:     "Home"
    },
    {
        path:      "/about",
        component: About,
        exact:     true,
        title:     "About"
    },
    {
        path:      "/list",
        component: List,
        exact:     true,
        title:     "List"
    }
]

export default AppRoute