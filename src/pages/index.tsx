import React from 'react';
import SEO from "components/seo";
import Layout from 'components/layout';
import { graphql, useStaticQuery } from "gatsby";
import SliderProduct from 'components/slider-product';
import { IProduct } from 'interfaces/product.interface';
import Slider from 'components/slider';

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
            <SEO title='main'/>
            <Layout>
                <Slider className="w-full overflow-hidden">
                    <SliderProduct key={1} productName={product.product.productName} price={product.product.price}/>
                    <SliderProduct key={2} productName={product.product.productName} price={product.product.price}/>
                    <SliderProduct key={3} productName={product.product.productName} price={product.product.price}/>
                    <SliderProduct key={5} productName={product.product.productName} price={product.product.price}/>
                    <SliderProduct key={6} productName={product.product.productName} price={product.product.price}/>
                    <SliderProduct key={7} productName={product.product.productName} price={product.product.price}/>
                    <SliderProduct key={8} productName={product.product.productName} price={product.product.price}/>
                </Slider>
            </Layout>

        </>

    );
};

export default Index;
