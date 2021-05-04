import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Navigation from './Navigation';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <div>
                    <Route path="/" exact component={ Dashboard } />
                    <Route path="/transactions" component={ Transactions } />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
