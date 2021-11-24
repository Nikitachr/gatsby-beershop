import React, { FC } from 'react';
import Layout from 'components/layout/layout';
import { graphql } from 'gatsby';
import { IProduct } from 'interfaces/product.interface';
import SEO from 'components/shared/seo';
import Description from 'components/product-page/description';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BuyPanel from 'components/product-page/buy-panel';

type TProductPageProps = { data: { product: IProduct } };

const ProductPage: FC<TProductPageProps> = ({ data: { product } }) => {
    console.log(product)
    const gatsbyImage = getImage(product.image.gatsbyImageData);

    return (
        <>
            <SEO title={product.title} description={product.description.description}/>
            <Layout>
                <div className="max-w-screen-xl mx-auto px-6 pt-11">
                    <div className="grid grid-cols-3-pr gap-5 items-center">
                        <Description description={product.description.description}/>
                        <GatsbyImage image={gatsbyImage} objectFit="contain" alt={product.title}/>
                        <BuyPanel product={product}/>
                    </div>
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
