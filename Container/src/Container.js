import React from 'react';
import Header from 'Header/Header';
import Footer from 'Footer/Footer';
import LeftNav from 'LeftNav/LeftNav';
import Page from 'Page/Page';

const Container = () => {
    return(
        <div>
            <div className="test page-container">
            <div>Main App Container that holds other Micro FE Apps</div>
            <Header/>
            <div className="page-layout">
                <div className="left-nav">
                    <LeftNav/>
                </div>
                <div className="page">
                    <Page />
                </div>
            </div>
            <Footer />
            </div>
    
        </div>
    )
}

export default Container;