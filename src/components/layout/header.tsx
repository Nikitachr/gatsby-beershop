import React, { FC } from 'react';

import IBaseComponent from 'interfaces/base-component.interface';
import CartButton from "./cart-button";

const Header: FC<IBaseComponent> = ({ className = '' }) => {
    return (
        <div className={`${className} py-6 flex items-center justify-between`}>
            <h1 className="text-2xl font-bold">BEERSHOP</h1>
            <CartButton/>
        </div>
    );
};

export default Header;
