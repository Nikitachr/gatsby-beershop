import React, { FC } from 'react';
import Header from 'components/layout/header';
import Portal from 'components/shared/portal'
import Menu from 'components/layout/menu';
import Footer from "./footer";

const Layout: FC = ({ children }) => {
    return (
        <div>
            <Portal>
                <Menu/>
            </Portal>
            <Header className="max-w-screen-xl mx-auto px-6" />
            <div className="layout-height">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
