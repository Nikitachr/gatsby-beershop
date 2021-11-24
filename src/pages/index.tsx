import React from 'react';
import SEO from 'components/shared/seo';
import Layout from 'components/layout/layout';
import { graphql, useStaticQuery } from 'gatsby';
import SliderProduct from 'components/home/slider-product';
import { IProduct } from 'interfaces/product.interface';
import Slider from 'components/home/slider';
import ProductCard from 'components/home/product-card';

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

    return (
        <>
            <SEO title="main"/>
            <Layout>
                <Slider className="w-full pt-14 pl-12 h-500 overflow-hidden">
                    {products.map(({ node }) => <SliderProduct key={node.id} {...node}/>)}
                </Slider>
                <section className="mt-12 bg-secondary shadow-secondary">
                    <div className="max-w-screen-xl mx-auto px-6">
                        <h1 className="font-bold text-lg">BESTSELLERS</h1>
                        <div
                            className="grid py-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:justify-between justify-items-center sm:justify-items-start ">
                            {products.map(({ node }) => <ProductCard {...node}/>)}
                        </div>
                    </div>
                </section>
            </Layout>

        </>

    );
};

export default Index;
