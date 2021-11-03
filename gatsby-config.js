module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "beershop",
        description: 'Site where y0u can buy beer'
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-root-import",
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/
                }
            }
        },
        {
            resolve: `gatsby-plugin-portal`,
            options: {
                key: 'portal',
                id: 'portal',
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-source-faker`,
            // derive schema from faker's options
            options: {
                schema: {
                    name: ["firstName", "lastName"],
                },
                count: 3, // how many fake objects you need
                type: "NameData", // Name of the graphql query node
            },
        },
        {
            resolve: `gatsby-source-mock`,
            options: {
                schema: {
                    productName: `{{commerce.productName}}`,
                    price: `{{commerce.price}}`,
                    product: `{{commerce.product}}`,
                    productDescription: `{{commerce.productDescription}}`
                },
                count: 10,
                type: `product`,
                seed: 123456,
                locale: `de`,
            },
        },
    ],
};
