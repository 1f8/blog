/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div style={{
        marginBottom: rhythm(2.5),
      }}>
     
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {' '}
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitterでフォローする
        </a>
      </p>
    </div>
  )
}

export default Bio
