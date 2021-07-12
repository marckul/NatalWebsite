import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout'
import  { getRichTextRenderer, IdFromTitleClass } from '../components/functions'
import { GoBackLink, JumbotronHero } from '../components/componentsBundle';


const GetPolicyData = () => {
  let data = useStaticQuery(graphql`
    query {
      contentfulRegulaminPortalu(title: {eq: "Regulamin Strony"}) {
        title
        body {
          raw
        }
      }
    }
  `)
  return data 
}
 

const CookieInfoPage = (props) => {
  let { contentfulRegulaminPortalu } = GetPolicyData();

  let richTextRenderer = getRichTextRenderer();
  richTextRenderer._constructor(contentfulRegulaminPortalu.body.raw, "");

  richTextRenderer.options.renderNode["heading-1"] = (node) => {
    // debugger;
    return <h1 className="display-3">{node.content[0].value}</h1>
  }
  
  let pageContent =  documentToReactComponents(JSON.parse(richTextRenderer.richText), richTextRenderer.options)
  pageContent = IdFromTitleClass.AddToContent(pageContent);

  return(
    <Layout>
      <JumbotronHero title={contentfulRegulaminPortalu.title} />
      <div className="container py-5">
        <GoBackLink />
        <article className="article top-nav-margin">
          {pageContent}
        </article>
      </div>
    </Layout>
  )
}

export default CookieInfoPage