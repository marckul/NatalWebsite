import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

import  { getRichTextRenderer, GetPrettyDatePL } from '../components/functions'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Seo from '../components/seo'
import { GoBackLink } from '../components/componentsBundle'

export const query = graphql`
  query($title: String!, $publishDate: Date) {
    allContentfulAktualnosciPost(
      filter: { 
        title: {eq: $title },
        publishDate: {eq: $publishDate}
      }
    ) {
      edges {
        node {
          __typename
          title
          publishDate
          intercept
          body {
            __typename
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

              ... on ContentfulStronaOfertyPodstrona {
                __typename
                contentful_id
                slug
              }

              ... on ContentfulAktualnosciPost {
                __typename
                contentful_id
              }
            }
          }
        }
      }
    }
  }
`

const NewsPostTemplate = (props) => {
  // path
  let data = props.data;
  data = data.allContentfulAktualnosciPost.edges[0].node;
  // debugger;

  let richTextRenderer = getRichTextRenderer();
  richTextRenderer._constructor(data.body, "");

  


  return(
    <Layout id="strona-aktualnosci" className="single-post-main-class" currentPath="/aktualnosci/">
      <Seo title={data.title} type="article" url={props.path} />
      <div className="container mt-5 py-5">
        {/* <nav><p><Link to="/aktualnosci">&#8592;Powrót</Link></p></nav> */}
        <nav><GoBackLink/></nav>
        
        <article>
          <div className="mb-5">
            <h1 className="display-3">{data.title}</h1>
            <p className="p ">Opublikowano: {GetPrettyDatePL(data.publishDate)}</p>
          </div>
          {documentToReactComponents(JSON.parse(richTextRenderer.richText.raw), richTextRenderer.options)}
        </article>
      </div>
    </Layout>
  )
}

export default NewsPostTemplate

