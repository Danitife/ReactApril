import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Daniel from './Daniel';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Users from './components/Users';
import Home from './components/Home/Home';
import TopNav from './components/Youtube/TopNav';
import SideNav from './components/Youtube/SideNav';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNav />
      <div className='d-flex'>
        <SideNav />
        <div>
          <App />
        </div>
      </div>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
