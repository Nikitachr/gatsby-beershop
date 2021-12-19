import React, {useEffect} from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from 'components/shared/seo';
import Layout from 'components/layout/layout';
import SliderProduct from 'components/home/slider-product';
import { IProduct } from 'interfaces/product.interface';
import Slider from 'components/home/slider';
import ProductCard from 'components/home/product-card';
import useAddToCart from 'hooks/use-add-to-cart';

interface IQueryData {
    allContentfulProducts: {
        edges: {
            node: IProduct;
        }[]
    }
}

const Index = () => {
    const query = useStaticQuery<IQueryData>(graphql`
        query MyQuery {
            allContentfulProducts {
                edges {
                    node {
                        id
                        image {
                            gatsbyImageData
                        }
                        price
                        title
                    }
                }
            }
        }
    `);
    const products = query.allContentfulProducts.edges;
    const addToCart = useAddToCart();

    useEffect(() => {
        console.log(navigator.userAgent);
    }, []);

    return (
        <>
            <SEO title="Main page"/>
            <Layout>
                <Slider className="w-full pt-14 pl-12 h-500 overflow-y-scroll no-scrollbar">
                    {products.map(({ node }) => <SliderProduct className="no-highlights" key={node.id} {...node} addToCard={addToCart}/>)}
                </Slider>
                <section className="mt-12 pb-6 bg-secondary shadow-secondary">
                    <div className="max-w-screen-xl mx-auto px-6">
                        <h1 className="font-bold text-lg">BESTSELLERS</h1>
                        <div
                            className="grid py-4 gap-y-4 grid-cols-1-auto sm:grid-cols-2-auto md:grid-cols-3-auto lg:grid-cols-4-auto sm:justify-between justify-items-center sm:justify-items-start ">
                            {products.map(({ node }) => <ProductCard className="no-highlights" key={node.id} addToCard={addToCart} {...node}/>)}
                        </div>
                    </div>
                </section>
            </Layout>

        </>

    );
};

export default Index;
