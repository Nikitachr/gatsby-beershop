import React, { FC, Ref } from 'react';
import { IProduct } from 'interfaces/product.interface';
import IBaseComponent from 'interfaces/base-component.interface';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { motion, AnimatePresence } from 'framer-motion'
import useHover from 'hooks/use-hover';
import AddButton from 'components/add-button';

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

const SliderProduct: FC<IProduct & IBaseComponent> = ({ className = '', title, price, image }) => {
    const [ref, isHover] = useHover();
    const newImage = getImage(image.gatsbyImageData);

    return (
        <motion.div ref={ref as Ref<HTMLDivElement>}
                    className={`${className} min-w-300 flex flex-col items-center relative`}
                    transition={{ duration: 2 }}
                    initial="rest" whileHover="hover" animate="rest">
            <motion.div variants={imageHover}>
                <GatsbyImage image={newImage} className="pointer-events-none h-72 w-72" alt="beer"/>
            </motion.div>
            <AnimatePresence>
                {isHover &&
                <AddButton className="-mt-12 absolute top-56"/>
                }
            </AnimatePresence>
            <AnimatePresence>
                {isHover &&
                <motion.div initial={{ scale: 0.5, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.5, y: 0, opacity: 0 }}
                            className="flex flex-col items-center font-bold">
                    <h2>{title}</h2>
                    <span className="block text-blue">{price}</span>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    );
};


export default SliderProduct;
