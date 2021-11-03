import React, { FC, Ref } from 'react';
import { IProduct } from 'interfaces/product.interface';
import IBaseComponent from 'interfaces/base-component.interface';
import { StaticImage } from 'gatsby-plugin-image';
import { motion, AnimatePresence } from 'framer-motion'
import useHover from 'hooks/use-hover';

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

const SliderProduct: FC<IProduct & IBaseComponent> = ({ className = '', productName, price }) => {
    const [ref, isHover] = useHover();

    return (
        <motion.div ref={ref as Ref<HTMLDivElement>}
                    className={`${className} min-w-300 flex flex-col items-center relative`}
                    transition={{ duration: 2 }}
                    initial="rest" whileHover="hover" animate="rest">
            <motion.div variants={imageHover}>
                <StaticImage alt="beer" src="../assets/imgs/beer.png"/>
            </motion.div>
            <AnimatePresence>
                {isHover &&
                    <motion.button className="w-12 h-12 z-50 -mt-12 rounded-full bg-blue absolute top-56"
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   initial={{ scale: 0, y: 20 }}
                                   animate={{ scale: 1, y: 0 }}
                                   exit={{ scale: 0, y: 20 }}>+</motion.button>
                }
            </AnimatePresence>
            <AnimatePresence>
                {isHover &&
                <motion.div initial={{ scale: 0.5, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.5, y: 0, opacity: 0 }}
                            className="flex flex-col items-center font-bold">
                    <h2>{productName}</h2>
                    <span className="block text-blue">{price}</span>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    );
};


export default SliderProduct;
