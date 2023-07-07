import React from 'react';
import ReactDOM from "react-dom"
import axios from 'axios';
import App from "./App";
//import Auth from "./Auth";
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


