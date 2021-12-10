import React, { FC, LegacyRef, memo } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AnimatePresence } from 'framer-motion'

import { IProduct } from 'interfaces/product.interface';
import IBaseComponent from 'interfaces/base-component.interface';
import AddButton from 'components/shared/add-button';
import useHover from "../../hooks/use-hover";
import { Link } from 'gatsby';

export type TAddToCard = { addToCard: (product: IProduct, amount: number) => void; }

const ProductCard: FC<IProduct & IBaseComponent & TAddToCard> = ({ className = '', addToCard, ...product}) => {
    const [ref, isHover] = useHover();
    const newImage = getImage(product.image.gatsbyImageData);

    return (
        <Link to={`product/${product.id}`}>
            <div ref={ref as LegacyRef<HTMLDivElement>} className="relative p-3 hover:shadow-innerSecondary transition duration-500 rounded-xl w-fit text-center">
                {newImage && <GatsbyImage image={newImage} objectFit="contain" className="pointer-events-none h-56 w-56" alt="beer"/>}
                <h2 className="font-bold text-md mt-4 w-56">{product.title}</h2>
                <span className="font-bold text-blue text-md">{`$${product.price.toFixed(2)}`}</span>
                <AnimatePresence>
                    {isHover && <AddButton onClick={() => addToCard(product, 1)} className="absolute inset-half"/>}
                </AnimatePresence>
            </div>
        </Link>
    );
};

export default memo(ProductCard, ((prevState, newState) => {
    return prevState.id === newState.id;
}));
