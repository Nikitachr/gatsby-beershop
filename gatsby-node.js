exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query {
        allContentfulProducts {
    edges {
      node {
        id
      }
    }
  }
    }
  `)
    data.allContentfulProducts.edges.forEach(edge => {
        const slug = edge.node.id;
        actions.createPage({
            path: `/product/${slug}`,
            component: require.resolve(`./src/templates/product-page.tsx`),
            context: { slug: slug },
        })
    })
}
