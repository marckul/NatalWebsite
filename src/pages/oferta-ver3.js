import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import  { getRichTextRenderer, richTextRenderer } from '../components/functions'
import Layout from '../components/layout'
import * as ofertaStyles from '../styles/oferta/oferta.module.css'




const getOfferSectionID = (edge) => {
  // Założenie tytuł sekcji nie powtarza się w sensie case insensitive

  return getOfferSectionByTitleID(edge.node.title, '-')
    
}

const getOfferSectionByTitleID = (string = ' ', repl = '-') => {
  let allWords = string.split(" ");
  return allWords.join("-").toLowerCase();  
}

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

                ... on ContentfulStronaOfertySekcja {
                  contentful_id
                  title
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
  `);

  var idx = -1;
  let idArray = [];
  let titleArray = [];

  let offerPageContent = data.allContentfulStronaOfertySekcja.edges.map( (edge) => {
    let title = edge.node.title;    
    let id = getOfferSectionID(edge);

    let richText = edge.node.offerSectionBody;

    // let richTextRenderer = getRichTextRenderer();
    richTextRenderer._constructor(edge.node.offerSectionBody, "/oferta")
    
        
    return(
      <section id={id}  className="" >
        <div className="container">
          <h1 className="display-3">{edge.node.title}</h1>
          {documentToReactComponents(
            JSON.parse(richTextRenderer.richText.raw), 
            richTextRenderer.options
          )}
        </div>        
      </section>
    )

  })
  

  console.log(ofertaStyles);

  return(
    <Layout id="oferta" className={ofertaStyles.oferta}>
      {offerPageContent}
      {/* <section id="roboty-ziemne"  className={`container my-5 ${ofertaStyles.robotyZiemne}`}>
        <h1 className="display-4">Roboty Ziemne</h1>
        <p>Oferujemy wynajem minikoparki  Kubota KX018-4  wraz z operatorem.</p>
        <p>Natus inventore, minima consectetur autem voluptatem ab totam illo exercitationem nulla repellendus atque aspernatur fugit corrupti adipisci ad magnam quos? Magnam eos, tempora error ex obcaecati, vitae nam hic asperiores vel labore veritatis, ut facilis earum quos dignissimos! Nemo laudantium exercitationem eius provident quas impedit, facere nisi consequatur voluptatem magni. Porro eligendi omnis est nisi quidem harum odio corrupti saepe beatae deserunt laudantium magni distinctio, consectetur, officiis illo, sunt dolorem. Laborum eaque commodi veniam quam, error deleniti reprehenderit culpa laboriosam neque in mollitia, blanditiis facilis nulla? Optio voluptatum ut pariatur qui quis, nihil nemo delectus culpa. Magnam corporis debitis praesentium ad rem illo quo accusantium laborum quod quis!</p>
      </section> */}
    </Layout>
  )
}


export default OfferPage
