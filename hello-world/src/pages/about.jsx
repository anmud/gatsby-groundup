import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../layouts/index'

export default () => (
  <Layout>
    <h1>About</h1>
    <p>This is the about page.</p>
  </Layout>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`