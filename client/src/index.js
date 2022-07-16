import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<React.StrictMode>
    <App />
  </React.StrictMode>
  <ToastContainer></ToastContainer>
  </BrowserRouter>
  
  
);

