import React, { FC, LegacyRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AnimatePresence } from 'framer-motion'

import { IProduct } from 'interfaces/product.interface';
import IBaseComponent from 'interfaces/base-component.interface';
import AddButton from 'components/shared/add-button';
import useAddToCart from "../../hooks/use-add-to-cart";
import useHover from "../../hooks/use-hover";

const ProductCard: FC<IProduct & IBaseComponent> = ({ className = '', ...product}) => {
    const [ref, isHover] = useHover();
    const addToCart = useAddToCart(product);
    const newImage = getImage(product.image.gatsbyImageData);

    return (
        <div ref={ref as LegacyRef<HTMLDivElement>} className="relative p-3 hover:shadow-innerSecondary transition duration-500 rounded-xl w-fit text-center">
            <GatsbyImage image={newImage} objectFit="contain" className="pointer-events-none h-56 w-56" alt="beer"/>
            <h2 className="font-bold text-md mt-4 w-56">{product.title}</h2>
            <span className="font-bold text-blue text-md">{`$${product.price.toFixed(2)}`}</span>
            <AnimatePresence>
                {isHover && <AddButton onClick={addToCart} className="absolute inset-half"/>}
            </AnimatePresence>
        </div>
    );
};

export default ProductCard;
