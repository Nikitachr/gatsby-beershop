import React, { FC } from 'react';
import Header from 'components/header';
import Portal from 'components/portal'
import Menu from 'components/menu';

const Layout: FC = ({ children }) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Portal>
                <Menu/>
            </Portal>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;
