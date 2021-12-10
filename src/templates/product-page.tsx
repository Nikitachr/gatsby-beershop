import React, { FC } from 'react';
import Layout from 'components/layout/layout';
import { graphql } from 'gatsby';
import { IProduct } from 'interfaces/product.interface';
import SEO from 'components/shared/seo';
import Description from 'components/product-page/description';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BuyPanel from 'components/product-page/buy-panel';
import DetailsPanel from "../components/product-page/details-panel";

type TProductPageProps = { data: { product: IProduct } };

const ProductPage: FC<TProductPageProps> = ({ data: { product } }) => {
    const gatsbyImage = getImage(product?.image?.gatsbyImageData);

    return (
        <>
            <SEO title={product.title} description={product.description.description}/>
            <Layout>
                <div className="max-w-screen-xl mx-auto px-6 pt-11">
                    <div className="grid grid-cols-1 md:grid-cols-3-pr gap-x-5 gap-y-10 items-center">
                        <Description className="order-3 md:order-1" description={product.description.description}/>
                        <GatsbyImage className="order-1 md:order-2" image={gatsbyImage} objectFit="contain" alt={product.title}/>
                        <BuyPanel className="order-2 md:order2" product={product}/>
                    </div>
                    <DetailsPanel className="mt-12" {...product}/>
                </div>
            </Layout>
        </>

    );
};

export default ProductPage;

export const query = graphql`
    query($slug: String!) {
     product: contentfulProducts(id: {eq: $slug}) {
            alcohol
            brewery
            id
            ibu
            image {
                gatsbyImageData
            }
            price
            packing
            size
            style
            title
            description {
                description
            }
        }
    }
`
