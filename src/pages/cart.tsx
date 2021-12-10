import React, {FC} from 'react';
import SEO from 'components/shared/seo';
import Layout from 'components/layout/layout';
import useCartState from 'hooks/use-cart-state';
import CartPageItem from 'components/cart-page/cart-page-item';

const Cart: FC = () => {
    const [products, increment, decrement, remove] = useCartState();

    return (
        <>
            <SEO title="Cart"/>
            <Layout>
                <div className="max-w-screen-xl mx-auto px-6 pt-12">
                    <h1 className="font-bold text-xl">Cart</h1>
                    <div className="flex gap-4">
                        <div className="w-2/3">
                            {products.map(product => <CartPageItem key={product.product.id}
                                                                   increment={increment}
                                                                   decrement={decrement}
                                                                   remove={remove}
                                                                   {...product}/>)}
                        </div>
                    </div>
                </div>
            </Layout>
        </>

    );
};

export default Cart;
