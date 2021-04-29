import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
  query( $slug: String! ) {
    contentfulStronaOfertyPodstrona ( slug: {eq: $slug} ) {
      title
      leadText
      body {
        raw
      }
    }
  }
`



const OfferTemplate = (props) => {

  const data = props.data;

  return(
    <Layout>
      <div class="jumbotron jumbotron-fluid" >
        <div class="container py-5 my-5">
          <h1 className="pt-5 mt-5 display-2"> {data.contentfulStronaOfertyPodstrona.title} </h1>    
          <p class="lead mb-5"> {data.contentfulStronaOfertyPodstrona.leadText}</p>
        </div>
      </div>
      <div className="container my-5 py-5">
        {documentToReactComponents(JSON.parse(data.contentfulStronaOfertyPodstrona.body.raw))}
      </div>
      
    </Layout>
  )
}

export default OfferTemplate