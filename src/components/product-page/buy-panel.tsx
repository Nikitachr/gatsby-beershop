import React, { FC } from 'react';

import { IProduct } from 'interfaces/product.interface';

type TBuyPanelProps = {
    product: Pick<IProduct, 'title' | 'price' | 'alcohol' | 'size'>;
};

const BuyPanel: FC<TBuyPanelProps> = ({ product }) => {
    return (
        <div>
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
            </div>
        </div>
    );
};

export default BuyPanel;
