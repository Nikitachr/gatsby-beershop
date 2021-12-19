import React, {FC} from 'react';
import { motion, AnimatePresence } from "framer-motion";

import SEO from 'components/shared/seo';
import Layout from 'components/layout/layout';
import useCartState from 'hooks/use-cart-state';
import CartPageItem from 'components/cart-page/cart-page-item';
import CartTotalPanel from 'components/cart-page/cart-total-panel';

const Cart: FC = () => {
    const [products, increment, decrement, remove] = useCartState();

    return (
        <>
            <SEO title="Cart"/>
            <Layout>
                <div className="max-w-screen-xl mx-auto p-6 pt-12">
                    {products.length &&
                        <>
                            <h1 className="font-bold text-2xl">Cart</h1>
                            <div className="flex flex-col md:flex-row gap-4 pt-8">
                                <div className="w-full md:w-2/3 grid gap-3">
                                    <AnimatePresence>
                                        {products.map(product =>
                                            <motion.div key={product.product.id}
                                                        layout={'position'}
                                            >
                                                <CartPageItem increment={increment}
                                                              decrement={decrement}
                                                              remove={remove}
                                                              {...product}/>
                                            </motion.div>)}
                                    </AnimatePresence>
                                </div>
                                <CartTotalPanel className="w-full md:w-1/3" products={products}/>
                            </div>
                        </>
                        || <h1 className="text-center mt-24 font-bold text-2xl">Cart is Empty</h1>
                    }

                </div>
            </Layout>
        </>

    );
};

export default Cart;
