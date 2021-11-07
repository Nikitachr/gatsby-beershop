import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import SliderProduct from 'components/slider-product';
import { IProduct } from 'interfaces/product.interface';
import Slider from 'components/slider';
import ProductCard from 'components/product-card';

const Index = () => {
    const product = useStaticQuery<{ product: IProduct }>(graphql`
      query MyQuery {
        product {
            price
            product
            productDescription
            productName
        }
       }
    `);
    console.log(product);
    return (
        <>
            <SEO title="main"/>
            <Layout>
                <Slider className="w-full pt-14 h-500 overflow-hidden">
                    <SliderProduct key={1} {...product.product}/>
                    <SliderProduct key={2} {...product.product}/>
                    <SliderProduct key={3} {...product.product}/>
                    <SliderProduct key={5} {...product.product}/>
                    <SliderProduct key={6} {...product.product}/>
                    <SliderProduct key={7} {...product.product}/>
                    <SliderProduct key={8} {...product.product}/>
                </Slider>
                <section className="mt-12 bg-secondary shadow-secondary">
                    <div className="max-w-screen-xl mx-auto px-6">
                        <h1 className="font-bold text-lg">BESTSELLERS</h1>
                        <div className="grid py-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:justify-between justify-items-center sm:justify-items-start ">
                            <ProductCard {...product.product}/>
                            <ProductCard {...product.product}/>
                            <ProductCard {...product.product}/>
                            <ProductCard {...product.product}/>
                        </div>
                    </div>
                </section>
            </Layout>

        </>

    );
};

export default Index;
