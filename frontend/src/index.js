import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Toaster} from "react-hot-toast";
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Toaster/>
    </Provider>
  </React.StrictMode>
);

