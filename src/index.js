import React from 'react';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById('root'));



root.render(
    <BrowserRouter>
        <Provider store={store}>
                <App />
        </Provider>
    </BrowserRouter>
    
    

);

