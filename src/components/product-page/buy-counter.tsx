import React, { FC, memo, useCallback, useState } from 'react';

import Counter from "./counter";
import IBaseComponent from "../../interfaces/base-component.interface";

type TBuyCounterProps = {
    addToCart: (amount: number) => void;
}

const BuyCounter: FC<IBaseComponent & TBuyCounterProps> = ({ className = '', addToCart }) => {
    const [amount, setAmount] = useState<number>(1);

    const counterChange = useCallback((amount: number) => {
        setAmount(amount);
    }, []);

    const addToCartHandler = (): void => {
        addToCart(amount);
    }

    return (
        <div className={`${className} flex gap-3`}>
            <Counter counterChange={counterChange}/>
            <button aria-label="Add to cart" onClick={addToCartHandler} className="rounded-full bg-blue hover:bg-blue-light py-2 px-4 text-white">Add to cart</button>
        </div>
    );
};

export default memo(BuyCounter);
