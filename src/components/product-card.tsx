import React, { FC, LegacyRef } from 'react';
import { IProduct } from 'interfaces/product.interface';
import IBaseComponent from 'interfaces/base-component.interface';
import { StaticImage } from 'gatsby-plugin-image';
import useHover from 'hooks/use-hover';
import AddButton from 'components/add-button';
import { AnimatePresence } from 'framer-motion'

const ProductCard: FC<IProduct & IBaseComponent> = ({ className = '', productName, price }) => {
    const [ref, isHover] = useHover();
    return (
        <div ref={ref as LegacyRef<HTMLDivElement>} className="relative p-3 hover:shadow-innerSecondary transition duration-500 rounded-xl w-fit text-center">
            <StaticImage objectFit="contain" className="pointer-events-none h-56 w-56" alt="beer" src="../assets/imgs/beer.png"/>
            <h2 className="font-bold text-md mt-4">{productName}</h2>
            <span className="font-bold text-blue text-md">{price}</span>
            <AnimatePresence>
                {isHover && <AddButton className="absolute inset-half"/>}
            </AnimatePresence>
        </div>
    );
};

export default ProductCard;