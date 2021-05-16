/*
TO JEST NAJNOWSZA STRONA OFERTY -- 11 MAJ 2021

Tutaj powstaje wizualny projekt strony oferta
*/ 

import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import  { getRichTextRenderer, richTextRenderer, getOfferSectionByTitleID } from '../components/functions'

import Layout from '../components/layout'
import Seo from '../components/seo';

import * as ofertaStyles from '../styles/oferta/oferta-new.module.css'

// import zaworyRysunek from '../assets/images/zawory-krawedzie2048x2048.jpg'
import zaworyRysunek from '../assets/images/offer-page/Rurki2-rysunek-mockup.jpg'
import pipes2Img from '../assets/images/natal-pipes-2.jpg'
import gasBoiler from '../assets/images/gas-boiler.png'



const getOfferSectionID = (edge) => {
  // Założenie tytuł sekcji nie powtarza się w sensie case insensitive

  return getOfferSectionByTitleID(edge.node.title, '-')
    
}



const OfferPage = () => {
  
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
  
  {
    let index = 0;
    data.allContentfulStronaOfertyNaszaOferta.edges.forEach( (edge) => {

      if (edge.node.title !== "MODEL_DANYCH") {
          // edge
        let richColumns = [];
        /* =============
          KOLUMNA 1
        ---------------- */
        // richTextRenderer.options
        richTextRenderer._constructor(edge.node.bodyCol1, "/oferta");

        richColumns[0] = documentToReactComponents(
          JSON.parse(richTextRenderer.richText.raw), 
          richTextRenderer.options
        )

        /* =============
          KOLUMNA 2
        ---------------- */
        richTextRenderer._constructor(edge.node.bodyCol2, "/oferta");

        richColumns[1] = documentToReactComponents(
          JSON.parse(richTextRenderer.richText.raw), 
          richTextRenderer.options
        )

        // debugger; 
        columnsFirstSection[index] = richColumns;
        index++;
      } // if() { ... }
    }) // forEach
  }
  columnsFirstSection = columnsFirstSection[0];



  /* ================================
        OFERTA - DALSZE SEKCJE
  ----------------------------------- */

  let columnsRestSection = [];

  let renderOfferSection = (edge) => {

    let offerSectionBodyHTML = null;
    let sectionItems = {
      id: ""
    };

    // richTextRenderer._constructor(edge.node.bodyCol1, "/oferta");
    sectionItems.id = getOfferSectionID(edge);

    // debugger;
    richTextRenderer._constructor(edge.node.offerSectionBody, "/oferta");

    offerSectionBodyHTML = documentToReactComponents(
      JSON.parse(richTextRenderer.richText.raw), 
      richTextRenderer.options
    )

    return(
      <section id={sectionItems.id} className={`${ofertaStyles.section}`} >
        <div className={`${ofertaStyles.layoutClasses}  ${ofertaStyles.jumbotron} `} >
          <div class="container">
            <div className="row">
              <div className="col-md">
                <h1 className="display-2">{edge.node.title}</h1>
                <p className="lead font-weight-normal">{edge.node.leadText}</p>
              </div>
              {/* TUTAJ BYL OBRAZEK */}
            </div>
          </div>
        </div>

        <div  className={`${ofertaStyles.layoutClasses} ${ofertaStyles.sectionBody} `} >
          <div className="container">
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
        // edge

        
        columnsRestSection[index] = renderOfferSection(edge);
        index++;

      } // if() { ... }
    }) // forEach
  }

  

  /* ================================
            RENDERING STRONY
  ----------------------------------- */
  ofertaStyles.layoutClasses = "d-flex flex-column justify-content-center my-0 jumbotron jumbotron-fluid" 
  let colClass = `col-md flex-grow-1 ${ofertaStyles.colMd}`;

  return(
    <Layout id="oferta" className={`${ofertaStyles.oferta} `}>
      <Seo title="Oferta"/>

      <section id="nasza-oferta"  className={`${ofertaStyles.mainOffer}`} >

        <div className={` ${ofertaStyles.layoutClasses} ${ofertaStyles.jumbotron}`} 
              style={{backgroundImage: `url(${pipes2Img})`}}
        >
          <div class="container">
            <div className="col-md-8">
              <h1 className="display-2 text-uppercase">Nasza Oferta</h1>
              <p className="lead font-weight-normal">Prowadzimy naszą działalność w dziedzinach związanych z budownictwem mieszkaniowym.</p>
            </div>
          </div>
        </div>

        <div  className={`${ofertaStyles.layoutClasses} ${ofertaStyles.sectionBody} `} >
          <div className="container">
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


      {/* ===============
          STARA WERSJA
          =============== */}
      {/* <section id="centralne-ogrzewanie1" className={`${ofertaStyles.section}`} >
        <div className={`${ofertaStyles.layoutClasses}  ${ofertaStyles.jumbotron} `} >
          <div class="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-2">Centralne Ogrzewanie</h1>
                <p className="lead font-weight-normal">Prowadzimy naszą działalność w dziedzinach związanych z budownictwem mieszkaniowym.</p>
              </div>
              <div className="col-md-6">
                <img src={gasBoiler} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div  className={`${ofertaStyles.layoutClasses} ${ofertaStyles.sectionBody} `} >
          <div className="container">
            <div className="row justify-content-around">
              <div className={`${colClass}`}>
                <h2 className="display-4">Kolumna 1</h2>
                <p>Libero perspiciatis numquam a reprehenderit aliquam architecto labore nisi accusantium dolor fugit mollitia consequuntur fugiat id inventore laborum, minus nostrum recusandae quidem, obcaecati ut! Excepturi, quae dicta. Cum eaque, dolor ut, ullam soluta voluptates iure quibusdam quaerat sunt, neque error illum itaque.</p>
              </div>
              
              <div className={`${colClass}`}>
                <h2 className="display-4">Kolumna 2</h2>
                <p>A quidem inventore iste obcaecati ex unde nobis dolor omnis, ratione quam, asperiores maxime nostrum. Dolor quae nihil perspiciatis sequi pariatur aperiam iusto earum omnis. Placeat optio voluptas dolor provident mollitia voluptate temporibus quo reiciendis culpa aliquam, consequuntur corporis. Odit, soluta ipsam?</p>
              </div>
            </div>
          </div>        
        </div>
      </section>           */}

    </Layout>
  )
}


export default OfferPage
