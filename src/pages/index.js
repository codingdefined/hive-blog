import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const getSrc = function(node) {
  let srcSet = JSON.parse(node.json_metadata).image;
  if(srcSet)
    return 'https://images.hive.blog/640x0/' + srcSet[0];
  else 
    return 'noimage.png';
}

const BlogIndex = ({ data, location }) => {
  const siteTitle =data.site.siteMetadata.title
  const posts = data.allHiveArticle.edges
  const isFirst = true;

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
              <img className='img-body' srcSet={getSrc(node)}/>
              <p className='hive-body'
                dangerouslySetInnerHTML={{
                  __html: node.body,
                }}
              />
            </section>
          </article>
        )
      })}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={``} rel="prev">
              ← Previous Page
            </Link>
          )}
            <li
              key={`pagination-number${1}`}
              style={{
                margin: 0,
              }}
            >
              {1}
            </li>
          {posts.length >= 10 && (
            <Link to={`/2`} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
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
    allHiveArticle (
      limit: 10
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
`
