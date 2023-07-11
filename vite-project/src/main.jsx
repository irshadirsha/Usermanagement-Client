import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import {Store, persistor} from './redux/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Provider store={Store}>
        <PersistGate loading={null} persistor={ persistor}>
        <Router>
    <App />
    </Router>
    </PersistGate>
    </Provider>
    
  </React.StrictMode>,
)

