import React, { FC } from 'react';

import IBaseComponent from 'interfaces/base-component.interface';
import { ICartProduct } from 'store/state';
import priceFormatter from 'utils/price-format';
import calculateTotalPrice from 'utils/total-price';

type TCartTotalPanelProps = {
    products: ICartProduct[];
}

const CartTotalPanel: FC<IBaseComponent & TCartTotalPanelProps> = ({ className = '', products }) => {
    return (
        <div className={`${className} rounded-3xl px-4 py-5 border-2 border-secondary h-fit`}>
            <h2 className="font-bold text-2xl mx-auto block w-fit">Cart Total</h2>
            <div className="grid my-7 gap-4">
                {products.map(({ product, amount }) => <div className="flex justify-between gap-2">
                    <p>{product.title}</p>
                    <div className="flex gap-1">
                        {amount > 1 && <span className="whitespace-nowrap">{`${amount} *`}</span>}
                        <span>{priceFormatter(product.price)}</span>
                    </div>
                </div>)}
            </div>
            <div className="flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold">{priceFormatter(calculateTotalPrice(products))}</span>
            </div>
            <button aria-label="Checkout" className="rounded-full bg-blue text-white text-xl mt-7 w-full p-3">Checkout</button>
        </div>
    );
};

export default CartTotalPanel;
