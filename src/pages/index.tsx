import React from 'react';
import SEO from "components/seo";
import Layout from 'components/layout';
import { graphql, useStaticQuery } from "gatsby";

const Index = () => {
    const products = useStaticQuery(graphql`
      query MyQuery {
        product {
            price
            product
            productDescription
            productName
        }
       }
    `);
    console.log(products);
    return (
        <>
            <SEO title='main'/>
            <Layout>
                <div>
                    {JSON.stringify(products)}
                </div>
            </Layout>

        </>

    );
};

export default Index;
