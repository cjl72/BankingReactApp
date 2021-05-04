import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Navigation from './Navigation';
import Account from './Account';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <div>
                    <Route path="/" exact component={ Dashboard } />
                    <Route path="/transactions" component={ Transactions } />
                    <Route path="/account/:id" component={ Account } />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
