import React from 'react';
import '../styles/layout.css';
import "../styles/global.css";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
    return (
       <>
      <div className="layout">
        <div className="header-container">
          <Header />
          <Navbar />
        </div>
        <Sidebar />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
       </>
    );
}

export default MyApp;