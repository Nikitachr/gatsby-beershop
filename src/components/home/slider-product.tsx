import React, { FC, memo, Ref } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { IProduct } from 'interfaces/product.interface';
import IBaseComponent from 'interfaces/base-component.interface';
import useHover from 'hooks/use-hover';
import AddButton from 'components/shared/add-button';
import { TAddToCard } from 'components/home/product-card';
import { Link } from 'gatsby';
import priceFormatter from 'utils/price-format';

const imageHover = {
    hover: {
        scale: 1.1,
        y: -20
    },
    rest: {
        scale: 1,
        y: 0
    }
}

const SliderProduct: FC<IProduct & IBaseComponent & TAddToCard> = ({ className = '', addToCard, ...product }) => {
    const [ref, isHover] = useHover();
    const newImage = getImage(product.image.gatsbyImageData);

    return (
        <Link to={`product/${product.id}`} className="no-drag">
            <motion.div ref={ref as Ref<HTMLDivElement>}

                        className={`${className} min-w-300 flex flex-col items-center relative`}
                        transition={{ duration: 2 }}
                        initial="rest" whileHover="hover" animate="rest">
                <motion.div variants={imageHover}>
                    {newImage && <GatsbyImage image={newImage} className="pointer-events-none h-72 w-72" alt="beer"/>}
                </motion.div>
                <AnimatePresence>
                    {isHover &&
                    <AddButton onClick={() => addToCard(product, 1)} className="-mt-12 absolute top-56"/>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {isHover &&
                    <motion.div initial={{ scale: 0.5, y: 20, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.5, y: 0, opacity: 0 }}
                                className="flex flex-col items-center font-bold">
                        <h2>{product.title}</h2>
                        <span className="block text-blue">{priceFormatter(product.price)}</span>
                    </motion.div>}
                </AnimatePresence>
            </motion.div>
        </Link>
    );
};


export default memo(SliderProduct, ((prevState, newState) => {
    return prevState.id === newState.id;
}));
