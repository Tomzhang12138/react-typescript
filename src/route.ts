import Home from './pages/home'
import About from './pages/about'

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
    }
]

export default AppRoute