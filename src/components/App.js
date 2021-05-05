import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Navigation from './Navigation';
import Account from './Account';
import './styles/index.css';


const App = () => {
    return (
        <div className='topDiv'>
            <Navigation />
                <div>
                    <Route path="/" exact component={ Dashboard } />
                    <Route path="/transactions" component={ Transactions } />
                    <Route path="/account/:id" component={ Account } />
                </div>
        </div>
    )
}

export default App;
