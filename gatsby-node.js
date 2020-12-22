// Give Node access to path
const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Leverages node's createPages capabilities
exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              key
            }
          }
        }
      }
    }
  `).then((result) => {
    // Create blog pages:

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node)
      console.log(node.fields.slug)
      createPage({
        path: `projects${node.fields.slug}`,
        component: path.resolve(`./src/templates/ProjectTemplate.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          key: node.frontmatter.key,
          slug: node.fields.slug,
        },
      })
    })
  })
}
