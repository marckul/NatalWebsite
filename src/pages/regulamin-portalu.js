import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout'
import  { getRichTextRenderer, slugify } from '../components/functions'
import { GoBackLink, JumbotronHero } from '../components/componentsBundle';

// import { navigate } from "gatsby";

const GetPolicyData = () => {
  let data = useStaticQuery(graphql`
    query {
      contentfulRegulaminPortalu(title: {eq: "Regulamin Portalu"}) {
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

  
  let itemsType = ["h1", "h2", "h3", "h4", "h5"];
  
  function arrayContains(item, array) {
      return (array.indexOf(item) > -1);
  }
  
  // for (let i = 0; i < pageContent.length; i++) {
  //   const element = array[i];
  // }
  
  const CreateArticleWithTOC = (pageContent) => {
    let idx = 0;  
    let newPageContent = pageContent.map( node => {
      let newNode = null;
  
      if (arrayContains(node.type, itemsType)) {
        let nodeContent = node.props.children;
        // console.log(nodeContent);
        // console.log(Array.isArray(nodeContent));
  
        if (Array.isArray(nodeContent)) {
          nodeContent = nodeContent.join(" ");       
        }
        // console.log(nodeContent);
        // console.log(Array.isArray(nodeContent));
        newNode = React.cloneElement(node, {id: slugify(nodeContent)});

        idx++;
      } else {
        newNode = node;
      }
      return newNode;
    }); 

    return newPageContent;
  }

  pageContent = CreateArticleWithTOC(pageContent);
  


  // debugger;
  // contentfulRegulaminPortalu.body.raw
  return(
    <Layout>
      <JumbotronHero title="Regulamin Portalu" />
      <div className="container top-nav-margin my-5 py-5">
        <GoBackLink />
        <article className="article">
          {pageContent}
        </article>
        
        {/* <h1 className="display-2">Polityka Cookies</h1>
        <p>Ta strona używa plików cookie - małych plików tekstowych, które są umieszczane na Twoim komputerze, aby pomóc witrynie zapewnić lepszą obsługę. Ogólnie rzecz biorąc, pliki cookie służą do zachowania preferencji użytkownika, przechowywania informacji dotyczących rzeczy, takich jak koszyki, i dostarczania anonimowych danych śledzenia do aplikacji stron trzecich, takich jak Google Analytics. Z reguły pliki cookie ułatwiają przeglądanie. Możesz jednak preferować wyłączenie plików cookie w tej witrynie i na innych. Najskuteczniejszym sposobem na to jest wyłączenie plików cookie w Twojej przeglądarce. Sugerujemy skonsultowanie się z sekcją Pomoc przeglądarki lub przejrzenie strony internetowej About Cookies, która zawiera wskazówki dla wszystkich nowoczesnych przeglądarek</p> */}
      </div>
    </Layout>
  )
}


export default CookieInfoPage