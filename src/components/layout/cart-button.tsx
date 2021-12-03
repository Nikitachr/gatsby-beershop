import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import CartIco from "../../assets/icons/cart.svg";
import useHover from "../../hooks/use-hover";
import CartItem from "../shared/cart-item.ts";
import useCartState from "../../hooks/use-cart-state";

const CartButton = () => {
    const [products, increment, decrement, remove] = useCartState();
    const [ref, isHover] = useHover();

    return (
        <motion.div ref={ref} className="relative bg-white" whileHover="hover" animate="unhover" exit="unhover">
            <button>
                <CartIco className="w-6"/>
            </button>
            <AnimatePresence>
                {isHover &&
                    <motion.div className="absolute overflow-hidden z-10 right-0 top-6 pt-4 "
                                exit={{height: 0}}
                                animate={{
                                    height: 'auto',
                                    transition: {staggerChildren: 5, delayChildren: 5}
                                }}
                                initial={{height: 0}}>
                        <div className="border-2 px-2 py-4 border-secondary w-96 bg-white rounded-xl">
                            <AnimatePresence>
                                {products?.map((el, i) =>
                                    <motion.div
                                        key={el.product.id}
                                        transition={{delay: i * 0.2}}
                                        initial={{opacity: 0, y: -50}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0}}
                                    >
                                        <CartItem key={el.product.id}
                                                  increment={increment}
                                                  decrement={decrement}
                                                  remove={remove}
                                                  {...el}/>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

        </motion.div>
    );
};

export default CartButton;
