import React, { FC } from 'react';

import IBaseComponent from 'interfaces/base-component.interface';
import CartButton from "./cart-button";
import {Link} from "gatsby";

const Header: FC<IBaseComponent> = ({ className = '' }) => {
    return (
        <div className={`${className} py-6 flex items-center justify-between`}>
            <Link to="/"><h1 className="text-2xl font-bold">BEERSHOP</h1></Link>
            <CartButton/>
        </div>
    );
};

export default Header;
