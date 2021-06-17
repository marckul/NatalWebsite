import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/layout'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import  { getRichTextRenderer } from '../components/functions'

import "../styles/offer-subpage/offer-subpage.css"


import cockImg from '../assets/images/rysunek-kurki.jpg'
import Seo from '../components/seo';

export const query = graphql`
  query( $slug: String! ) {
    contentfulStronaOfertyPodstrona ( slug: {eq: $slug} ) {
      title
      slug
      leadText
      body {
        raw
        
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            description
            id            
            file {
              __typename
              url
              fileName
              details {
                size
              }
              contentType
            }
          }

          ... on ContentfulStronaOfertySekcja {
            __typename
            contentful_id
            title
          }


        }
      }
    }
  }
`



const OfferTemplate = (props) => {
  console.log('$$$$$$$$$$$$', cockImg);

  const data = props.data;
    
  let richTextRenderer = getRichTextRenderer();
  richTextRenderer._constructor(data.contentfulStronaOfertyPodstrona.body, props.path)
  // debugger;
  console.log('\n\n$$$$$$$$$$$$ richTextRenderer.richText', richTextRenderer.richText);

  // data.contentfulStronaOfertyPodstrona.body.raw

  return(
    <Layout className="" currentPath="/oferta/">
      <Seo title={data.contentfulStronaOfertyPodstrona.title}  url={props.path} />
      <div class="jumbotron jumbotron-fluid offer-subpage-jumbotron" style={{ backgroundImage: `url(${cockImg})` }}>
        <div class="container py-5 my-5">
          <h1 className="display-1"> {data.contentfulStronaOfertyPodstrona.title} </h1>    
          <p class="lead font-weight-normal"> {data.contentfulStronaOfertyPodstrona.leadText}</p>
        </div>
      </div>
      
      <div className="container my-5 py-5">
        <article>
          {documentToReactComponents(JSON.parse(richTextRenderer.richText.raw), richTextRenderer.options)}
        </article>
      </div>
    </Layout>
  )
}

export default OfferTemplate