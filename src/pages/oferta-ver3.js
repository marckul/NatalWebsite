/*

    TO JEST WŁASIWA WERSJA OFERTY

*/ 

import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from '../components/layout'
import * as ofertaStyles from '../styles/oferta/oferta.module.css'

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Scrollspy from 'react-scrollspy'

const myReplaceAllSpaces = (string = ' ', repl = '-') => {
  let allWords = string.split(" ");
  let words = [];
  let k = 0;

  for (let idx = 0; idx < allWords.length; idx++) {
    if (allWords[idx] !== "" ) {
      words[k] = allWords[idx];
      k++;      
    }
  }

  return words.join("-");  
}


let sidebarVisibility="col-3 d-none d-md-block";

const OfferPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulStronaOfertySekcja (sort: {
        fields: sectionsPosition
        order: ASC
      }){
        edges {
          node {
            title
            
            offerSectionBody {
              raw

              references {
                ... on ContentfulAsset {
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

                ... on ContentfulStronaOfertyPodstrona {
                  contentful_id
                  slug
                }

              }
              
            }

          }
        }
      }
    }
  `)


  
  var idx = -1;
  let idArray = [];
  let titleArray = [];
  let offerPageContent = data.allContentfulStronaOfertySekcja.edges.map( (edge) => {
    let title = edge.node.title;
    // let id = title.replaceAll(' ', '-').toLowerCase();
    let id = myReplaceAllSpaces(title, '-').toLowerCase();

    // let jsonBody = JSON.parse(edge.node.offerSectionBody.raw)
    
    idx++;
    idArray[idx] = id;
    titleArray[idx] = title;
    

    let options = {
      renderNode: {
        "embedded-asset-block": () => {
          console.log('$$$$$$$ ', edge.node.offerSectionBody, '$$$$$$$ ');
          return(
            <figure className="my-5">
              <img src={edge.node.offerSectionBody.references[0].file.url} alt={edge.node.offerSectionBody.references[0].description} className="img-fluid"/>
            </figure>
          )
        },
        "entry-hyperlink": (node) => {
          // debugger;

          if (node.data.target.sys.linkType === "Entry") {
            let slug = ''
            // node.data.target.sys.id
            // edge.node.offerSectionBody.references[0].contentful_id

            for (let idx = 0; idx < edge.node.offerSectionBody.references.length; idx++) {
              const reference = edge.node.offerSectionBody.references[idx];
              if (reference.contentful_id === node.data.target.sys.id) {
                slug = reference.slug
              }
            }
            return(
              <Link to={`/oferta/${slug}`}>{node.content[0].value}</Link>
            )
          }
        }
      }
      
    }

    return(
      <section id={id}  className="" >
        <div className="container">
          <div className="row">
            <div className={sidebarVisibility}>   </div>
            <div className="col-md">
              <h1 className="display-3">{edge.node.title}</h1>
              {documentToReactComponents(JSON.parse(edge.node.offerSectionBody.raw), options)}
            </div>
            <div className={sidebarVisibility}>   </div>        
          </div>
        </div>        
      </section>
    )
  })
  
  
  console.log("\n\n @@@@@@\n", offerPageContent, "@@@@@@\n\n");
  // debugger;

  // 
  
  var idx = -1;
  let navItems = idArray.map( (elementID) => {
    idx++;
    return(
      <li className="nav-item">
        <AnchorLink to={`#${elementID}`} className="nav-link" > {titleArray[idx]} </AnchorLink>
      </li>
    )
  })

  return(
    <Layout id="oferta" className={ofertaStyles.oferta}>
      <div className={`${sidebarVisibility} fixed-top ${ofertaStyles.sidebarNav}`}>
        <nav>
          <Scrollspy className="nav flex-column" items={idArray} currentClassName="active" offset={-100}>
            {navItems}
          </Scrollspy>
        </nav>
      </div>
      {offerPageContent}
    </Layout>
  )
}


export default OfferPage
