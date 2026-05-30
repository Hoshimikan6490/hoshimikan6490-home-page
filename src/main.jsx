import ReactDOM from 'react-dom/client';

import './styles/style.css';

import Home from './pages/Home';
import Activity from './pages/Activity';
import Research from './pages/Research';
import NotFound from './pages/404';

const routes = {
	'/': Home,
	'/activity': Activity,
	'/research': Research,
};

const pathname = window.location.pathname;

const Component = routes[pathname] || NotFound;

ReactDOM.createRoot(document.getElementById('root')).render(<Component />);
