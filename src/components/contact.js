import React from 'react'
import bioImage from '../images/icon-green650.png'
// import { StaticImage } from 'gatsby-plugin-image'

const Contact = () => {
  return (
    <div>
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
          <a href='https://1f8.co.jp/#contact-form'>
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
        padding: '1rem 1.2rem 0.3rem 0.8rem',
        display: 'flex',
        marginBottom: '1.6rem',
        marginTop: '2rem',
      }}>
        <a href='https://1f8.co.jp/' style={{boxShadow: 'none'}}><img src={bioImage} alt='A dinosaur' width={70}
      height={70} style={{  marginBottom: '-1.3rem'}} /></a>
        <div style={{
          paddingLeft: '1rem',
        }}>
          <p style={{           
            marginTop: '0.3rem'}}>株式会社１F8</p>
          <p style={{           
            fontSize: '0.8rem',
            marginTop: '-1.3rem',
            marginBottom: '1.3rem',
          }}>
            私たちはWebテクノロジー開発を通してお客様がビジネスに集中できる環境を創造します</p>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
