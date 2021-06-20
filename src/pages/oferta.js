/*
  TO JEST NAJNOWSZA STRONA OFERTY -- 11 MAJ 2021
*/ 

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import  { getRichTextRenderer, getOfferSectionByTitleID } from '../components/functions'

import Layout from '../components/layout'
import Seo from '../components/seo';
import * as ofertaStyles from '../styles/oferta/oferta.module.css'
import pipes2Img from '../assets/images/natal-pipes-2.jpg'



const getOfferSectionID = (edge) => {
  // Założenie tytuł sekcji nie powtarza się w sensie case insensitive
  return getOfferSectionByTitleID(edge.node.title, '-')
}

const OfferPage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulStronaOfertyNaszaOferta {
        edges {
          node {
            __typename
            title
            leadText

            bodyCol1 {
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
              }
            }

            bodyCol2 {
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
              }       
            }
          }
        }
      }

      allContentfulStronaOfertySekcja(
        sort: { fields: sectionsPosition, order: ASC }
      ) {
        edges {
          node {
            __typename
            title
            leadText

            offerSectionBody {
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
              }
            }
          }
        }
      }
    } 
  `);

  console.log("###" , ofertaStyles);

  /* ================================
          RICH TEXT RENDERER 
  ----------------------------------- */ 
  let richTextRenderer = getRichTextRenderer();
  richTextRenderer.options.renderNode["heading-2"] = (node) => {
    return(
      <h2 className="display-4">{node.content[0].value}</h2>
    )
  }


  /* ================================
    NASZA OFERTA - PIERWSZA SEKCJA
  ----------------------------------- */ 
  let columnsFirstSection = [];
  let naszaOferta = null;
  
  {
    let index = 0;
    data.allContentfulStronaOfertyNaszaOferta.edges.forEach( (edge) => {

      if (edge.node.title !== "MODEL_DANYCH") {
        naszaOferta = edge;
        let richColumns = [];

        /* KOLUMNA 1 */
        richTextRenderer._constructor(edge.node.bodyCol1, "/oferta");

        richColumns[0] = documentToReactComponents(
          JSON.parse(richTextRenderer.richText.raw), 
          richTextRenderer.options
        )

        /* KOLUMNA 2 */
        richTextRenderer._constructor(edge.node.bodyCol2, "/oferta");

        richColumns[1] = documentToReactComponents(
          JSON.parse(richTextRenderer.richText.raw), 
          richTextRenderer.options
        )

        columnsFirstSection[index] = richColumns;
        index++;
      } // if() { ... }
    }) // forEach
  }
  columnsFirstSection = columnsFirstSection[0];

  ofertaStyles.layoutClasses = "d-flex flex-column justify-content-center my-0" 
  let colClass = `col-md flex-grow-1 ${ofertaStyles.colMd}`;
  
  /* ================================
        OFERTA - DALSZE SEKCJE
  ----------------------------------- */
  richTextRenderer.options.renderNode["heading-2"] = (node) => {
    return(
      <h2>{node.content[0].value}</h2>
    )
  }
  
  let columnsRestSection = [];

  let renderOfferSection = (edge) => {

    let offerSectionBodyHTML = null;
    let sectionItems = {
      id: getOfferSectionID(edge)
    };

    richTextRenderer._constructor(edge.node.offerSectionBody, "/oferta");

    offerSectionBodyHTML = documentToReactComponents(
      JSON.parse(richTextRenderer.richText.raw), 
      richTextRenderer.options
    )
    
    return(
      <section id={sectionItems.id} className={`${ofertaStyles.section}`} >
        <div className={`jumbotron jumbotron-fluid jumbotron-hero ${ofertaStyles.layoutClasses}  ${ofertaStyles.jumbotron}`} >
          <div className="container">
            <h1 className="display-2">{edge.node.title}</h1>
            <p className="lead font-weight-normal">{edge.node.leadText}</p>
          </div>
        </div>

        <div  className={`${ofertaStyles.layoutClasses} ${ofertaStyles.sectionBody} `} >
          <div class={`container ${ofertaStyles.container}`}>
            <div className="row justify-content-around">
              <div className="col-md">
                {offerSectionBodyHTML}
              </div>
            </div>
          </div>        
        </div>
      </section>       
    )
  }
  
  {
    let index = 0;
    data.allContentfulStronaOfertySekcja.edges.forEach( (edge) => {
      if (edge.node.title !== "MODEL_DANYCH") {
        columnsRestSection[index] = renderOfferSection(edge);
        index++;

      } // if() { ... }
    }) // forEach
  }
  

  const didLoad = React.useState(false); // const [didLoad, setDidLoad] = React.useState(false);
  
  /* ================================
            RENDERING STRONY
  ----------------------------------- */
  return(
    <Layout id="oferta" className={`${ofertaStyles.oferta} `} currentPath={props.path} >
      <Seo title="Oferta" url="oferta" didLoad={didLoad} />

      <section id="nasza-oferta"  className={`${ofertaStyles.mainOffer}`} >
        <div className={`jumbotron ${ofertaStyles.layoutClasses} ${ofertaStyles.jumbotron}`} 
              style={{backgroundImage: `url(${pipes2Img})`}}
        >
          <div class="container">
            <div className="col-md-8">
              <h1 className="display-2 text-uppercase">{naszaOferta.node.title}</h1>
              <p className="lead font-weight-normal">{naszaOferta.node.leadText}</p>
            </div>
          </div>
        </div>

        <div  className={`${ofertaStyles.layoutClasses} ${ofertaStyles.sectionBody} `} >
          <div class={`container ${ofertaStyles.container}`}>
            <div className="row justify-content-around">
              
              <div className={`${colClass}`}>   
                {columnsFirstSection[0]} 
              </div>
              
              <div className={`${colClass}`}>
                {columnsFirstSection[1]} 
              </div>
            </div>

          </div>        
        </div>
      </section> 
      {columnsRestSection}
    </Layout>
  )
}

export default OfferPage