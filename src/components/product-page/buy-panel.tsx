import React, { FC } from 'react';

import { IProduct } from 'interfaces/product.interface';

type TBuyPanelProps = {
    product: Pick<IProduct, 'title' | 'price' | 'alcohol' | 'size'>;
};

const BuyPanel: FC<TBuyPanelProps> = ({ product }) => {
    return (
        <div>
            <h1 className="font-bold text-xl">{product.title}</h1>
        </div>
    );
};

export default BuyPanel;
