import React, { FC } from 'react';

import { IProduct } from 'interfaces/product.interface';
import BuyCounter from "./buy-counter";
import IBaseComponent from "../../interfaces/base-component.interface";
import useAddToCart from "../../hooks/use-add-to-cart";

type TBuyPanelProps = {
    product: IProduct;
};

const BuyPanel: FC<IBaseComponent & TBuyPanelProps> = ({ product, className = '' }) => {
    const addToCart = useAddToCart(product);

    return (
        <div className={`${className} `}>
            <div className="pb-4 border-b-2 border-secondary">
                <h1 className="font-bold text-2xl">{product.title}</h1>
                <span className="font-bold text-blue text-2xl">{`$${product.price.toFixed(2)}`}</span>
            </div>
            <div className="pt-4">
                <div className="flex items-center gap-10">
                    <div className="flex gap-4">
                        <span className="font-bold">SIZE</span>
                        <span className="">{`${product.size}ml`}</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="font-bold">ALC</span>
                        <span className="">{`${product.alcohol}%`}</span>
                    </div>
                </div>
                <BuyCounter addToCart={addToCart} className="mt-4"/>
            </div>
        </div>
    );
};

export default BuyPanel;
