import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import logo from '../../static/logo/favicon.ico'

export default ({ children }) => (
    <StaticQuery
       query={graphql`
       query{
           site{
               siteMetadata{
                   title
               }
           }
       }
       `}
       render={data => (
        <div>
        <img src={logo} alt='Gatsby Logo'/>
        <Link to={'/'}>
        <h3>{data.site.siteMetadata.title}</h3>
        </Link>
    
    
        <Link to={'/about'}>
            About
        </Link>
        {children}
      </div>
       )}
    />
 
)