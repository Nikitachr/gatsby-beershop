import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet'

interface ISeoProps {
    title?: string;
    description?: string;
    image?: string;
    meta?: Object[];
    lang?: string;
}

const SEO: FC<ISeoProps> = ({ title, description = '', lang = 'en' }) => {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
    )
    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

    // @ts-ignore
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title || defaultTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat()}
        >
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                  rel="stylesheet"/>
        </Helmet>
    );
};

export default SEO;
