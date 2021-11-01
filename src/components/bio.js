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
      <div style={{
        backgroundColor: 'rgb(247, 247, 247)',
        padding: '1.2rem 2rem',
        marginBottom: '1rem',
      }}>
        <p>「ネットショップを始めたいがサイト制作の知識がない」、「商品を国内外問わず販売したい」、「自社サイトを立ち上げたいがコストは極力抑えたい」といったお悩みを一挙に解決致します！</p>
        <p>当社は、低コストで導入が可能・尚且つ決済手数料が低く、幅広い機能にも対応している世界NO.1のシェアのECサイトShopify認定パートナーで、Shopifyのストア構築や、埋め込みアプリの開発を行っております。</p>
        <p>些細なことでも構いませんので、まずはお気軽にご相談ください。</p>
        <div style={{
          textAlign: 'center',
        }}> 
          <a href='https://1f8.co.jp/'>
            <button type='button' style={{
          backgroundColor: 'rgb(47, 44, 44)',
          padding: '0.3rem 1.5rem',
          border: 'none',
          color: 'white',
        }}>無料相談する</button></a>
        </div>
      </div>
      <div style={{
        backgroundColor: 'rgb(247, 247, 247)',
        padding: '1.2rem 2rem',
        marginBottom: '1rem',
        flex: 'flex',
      }}>
        
      </div>
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {' '}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
