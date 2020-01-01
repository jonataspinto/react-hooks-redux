import React from 'react';
import Routers from './Router'
import { Provider } from 'react-redux';
import { store } from './store'

const App = ()=> 
<Provider store={store}>
    <Routers/>
</Provider>

export default App;
