import { BrowserRouter } from 'react-router';
import PagesContent from '../ReactRouter/PagesContent';

import './HomePage.css';

function HomePage() {
    return (
        <BrowserRouter>
            <PagesContent />
        </BrowserRouter>
    );
}

export default HomePage;
