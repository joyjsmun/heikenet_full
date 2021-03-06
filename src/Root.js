import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';


//const store = createStore(reducers,window.devToolsExtension && window.devToolsExtension());
const store = createStore(reducers,applyMiddleware(thunk));


const Root = () => {
    return(
        <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>
    )
}

export default Root;