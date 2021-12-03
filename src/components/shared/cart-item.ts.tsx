import React, {FC, memo} from 'react';

import IBaseComponent from "../../interfaces/base-component.interface";
import { ICartProduct } from "../../store/state";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CartCounter from "./cart-counter";

type TCartItemProps = {
    increment: (id: string) => void;
    decrement: (id: string) => void;
    remove: (id: string) => void;
}

const CartItem: FC<IBaseComponent & ICartProduct & TCartItemProps> = ({ className = '', product, amount, increment, decrement, remove }) => {
    const gatsbyImage = getImage(product.image.gatsbyImageData);

    return (
        <div className={`${className} bg-white flex items-center gap-2`}>
            <GatsbyImage image={gatsbyImage} objectFit="contain" className="w-20" alt="beer"/>
            <div className="w-22">
                <h3 className="text-md">{product.title}</h3>
                <span className="text-md text-blue font-bold">{`$${product.price.toFixed(2)}`}</span>
            </div>
            <CartCounter className="ml-auto mr-2"
                         increment={() => increment(product.id)}
                         decrement={() => decrement(product.id)}
                         remove={() => remove(product.id)}
                         amount={amount}/>
        </div>
    );
};

export default memo(CartItem);
