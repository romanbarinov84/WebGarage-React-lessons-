import { BrowserRouter } from 'react-router';


import './HomePage.css';
import AppRoutes from '../useParams/AppRoutes';

function HomePage() {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    );
}

export default HomePage;
