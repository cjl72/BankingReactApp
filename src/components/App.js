import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './Dashboard';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={ Dashboard } />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
