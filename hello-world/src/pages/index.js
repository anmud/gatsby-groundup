import React from "react"
import Layout from '../layouts/index'
import {Link} from 'gatsby'

export default ({data}) => {

    const {edges} = data.allMarkdownRemark

    return(
         <Layout>
              <h1>Gatsby Tutorial Site Home Page</h1>
              {edges.map(({node}) => (
                  <div key={node.id}>
                      <Link to={node.frontmatter.path}>
                      <h3>{node.frontmatter.title}{""}</h3>
                      </Link>
                     
                     <p>{node.frontmatter.date}</p>
                     <p>{node.excerpt}</p>
                  </div>
              ))}
         </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`