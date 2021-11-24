import React, { FC, LegacyRef } from 'react';
import { IProduct } from 'interfaces/product.interface';
import IBaseComponent from 'interfaces/base-component.interface';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useHover from 'hooks/use-hover';
import AddButton from 'components/shared/add-button';
import { AnimatePresence } from 'framer-motion'
import { navigate } from 'gatsby';

const ProductCard: FC<IProduct & IBaseComponent> = ({ className = '', title, price, image, id }) => {
    const [ref, isHover] = useHover();
    const newImage = getImage(image.gatsbyImageData);

    const redirect = (): void => {
        navigate(`/product/${id}`)
    }

    return (
        <div onClick={redirect} ref={ref as LegacyRef<HTMLDivElement>} className="relative p-3 hover:shadow-innerSecondary transition duration-500 rounded-xl w-fit text-center">
            <GatsbyImage image={newImage} objectFit="contain" className="pointer-events-none h-56 w-56" alt="beer"/>
            <h2 className="font-bold text-md mt-4 w-56">{title}</h2>
            <span className="font-bold text-blue text-md">{`$${price.toFixed(2)}`}</span>
            <AnimatePresence>
                {isHover && <AddButton className="absolute inset-half"/>}
            </AnimatePresence>
        </div>
    );
};

export default ProductCard;
