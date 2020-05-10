import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import showdown from 'showdown'

const converter = new showdown.Converter({ ghCompatibleHeaderId: true })

const BlogIndex = ({ data, location }) => {
  const siteTitle =data.site.siteMetadata.title
  const posts = data.allHiveArticle.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.title || node.permlink
        return (
          <article key={node.permlink}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.permlink}>
                  {title}
                </Link>
              </h3>
              <small>{node.created}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.body.substring(0,100),
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allHiveArticle {
      edges {
        node {
          id
          title
          author
          created(formatString: "MMMM DD, YYYY")
          permlink
          body
        }
      }
    }
  }
`
