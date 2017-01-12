import Home from '../../ui/pages/Home.jsx';
import Login from '../../ui/pages/Login.jsx';
import Signup from '../../ui/pages/Signup.jsx';
import About from '../../ui/pages/About.jsx';
import ContactUs from '../../ui/pages/ContactUs.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';

const routes = [
    {
        path: '/',
        component: Home
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/signup',
        component: Signup
    }, {
        path: '/about',
        component: About
    }, {
        path: '/contact-us',
        component: ContactUs
    }, {
        path: '*',
        component: NotFound
    }
];

export default routes;
