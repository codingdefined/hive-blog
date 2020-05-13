# Hive Posts using Gatsby 

The project is a combination of Blog and Plugin which will be pulling your posts from api.hive.blog to Gatsby. You need to provide your hive account name and it will get all the posts.

The plugin is embedded into the application under the plugins/gatsby-source-hive folder where you have two files gatsby-node.js and package.json. In gatsby-node.js we are quering api.hive.blog to get the posts based on the username.

Demo Site: https://codingdefined.github.io/hive-blog/

It takes all the posts which you have written till now, with the images pointing to hive.blog. Since its a static site generator, you need to build and deploy if you would like to see the new posts which can be automated using node.js. The site has Seo plugin as well as Google Analytics if you would like to see how many visitors are coming to your site.

The site has been deployed to Github Pages, using the npm package gh-pages and thus I need to enable it.

The Graph QL query which is being used here is, where we are taking top 10 results and then querying then 

```export const pageQuery = graphql'
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allHiveArticle (
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          author
          created(formatString: "MMMM DD, YYYY")
          permlink
          body,
          json_metadata
        }
      }
    }
  }
'

```
