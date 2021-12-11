import React, { FC } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import IBaseComponent from "../../interfaces/base-component.interface";
import { ICartProduct } from 'store/state';
import CartCounter from 'components/shared/cart-counter';

type TCartItemProps = {
    increment: (id: string) => void;
    decrement: (id: string) => void;
    remove: (id: string) => void;
}

const CartPageItem: FC<IBaseComponent & ICartProduct & TCartItemProps> = ({ className = '', product, amount, increment, decrement, remove }) => {
    const gatsbyImage = getImage(product.image.gatsbyImageData);

    return (
        <div className={`${className} border-secondary border-2 rounded-3xl py-3 px-2 bg-white flex items-center gap-2`}>
            {gatsbyImage && <GatsbyImage image={gatsbyImage} objectFit="contain" className="min-w-28 w-28" alt="beer"/>}
            <div className="w-22">
                <h3 className="text-md font-bold">{product.title}</h3>
                <span className="text-md text-blue font-bold">{`$${product.price.toFixed(2)}`}</span>
            </div>
            <CartCounter className="ml-auto mr-5 transform scale-125"
                         increment={() => increment(product.id)}
                         decrement={() => decrement(product.id)}
                         remove={() => remove(product.id)}
                         amount={amount}/>
        </div>
    );
};

export default CartPageItem;
