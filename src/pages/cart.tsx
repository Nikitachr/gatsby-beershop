import React, {FC} from 'react';
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
                <div className="max-w-screen-xl mx-auto px-6 pt-12">
                    <h1 className="font-bold text-2xl">Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4 pt-8">
                        <div className="w-full md:w-2/3 grid gap-3">
                            {products.map(product => <CartPageItem key={product.product.id}
                                                                   increment={increment}
                                                                   decrement={decrement}
                                                                   remove={remove}
                                                                   {...product}/>)}
                        </div>
                        <CartTotalPanel className="w-full md:w-1/3" products={products}/>
                    </div>
                </div>
            </Layout>
        </>

    );
};

export default Cart;
