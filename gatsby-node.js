const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allHiveArticle {
          edges {
            node {
              title
              permlink
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allHiveArticle.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    console.log(post.node);
    createPage({
      path: post.node.permlink,
      component: blogPost,
      context: {
        title: post.node.title,
        permlink: post.node.permlink,
        previous,
        next,
      },
    })
  })
}
