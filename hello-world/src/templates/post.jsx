import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
import TagsBlock from '../components/TagsBlock'
import {Link} from 'gatsby'
import Img from 'gatsby-image'


const Post = ({data, pageContext}) => {
    const {next, prev} = pageContext
    const post = data.markdownRemark
    const title = post.frontmatter.title
    const date = post.frontmatter.date
    const html = post.html
    const tags = post.frontmatter.tags


  return (
   <Layout>
       <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
       <h1>{title}</h1>
       <p>{date}</p>
       <div dangerouslySetInnerHTML={{ __html: html }}/>
      
       <div>
           {next &&
           <Link to={next.frontmatter.path}>
           Next Post
           </Link>
        }
       </div>
       <div>
           {prev && 
           <Link to={prev.frontmatter.path}>
           Previous Post
           </Link>
        }
       </div>
       <TagsBlock list={tags || []} />
   </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug}}) {
      html
      frontmatter {
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90, duotone: {highlight: "#386eee", shadow: "#2323be", opacity: 60}) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`

export default Post