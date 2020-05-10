import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {

  getSrc = function(node) {
    let srcSet = JSON.parse(node.json_metadata).image;
    if(srcSet)
      return srcSet[0];
    else 
      return 'noimage.png';
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allHiveArticle.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
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
              <img className='img-body' srcSet={this.getSrc(node)}/>
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
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
            <li
              key={`pagination-number${currentPage}`}
              style={{
                margin: 0,
              }}
            >
              {currentPage}
            </li>
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
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
`