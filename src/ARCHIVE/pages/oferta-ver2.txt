import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import Layout from '../components/layout'
import * as ofertaStyles from '../styles/oferta/oferta.module.css'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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


  

  let offerPageContent = data.allContentfulStronaOfertySekcja.edges.map( (edge) => {
    let title = edge.node.title;
    let id = title.replaceAll(' ', '-').toLowerCase();
    // let jsonBody = JSON.parse(edge.node.offerSectionBody.raw)

    // console.log(jsonBody);
    // debugger;
    // if (title === "Fotowoltaika i Wentylacja") {
    //   debugger;
    // }

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

    const myDocumentToReactComponents = (jsonBody) => {
      console.log("$$$ myDocumentToReactComponents");

      // debugger;

      let array1 = jsonBody.content
      array1.map( (item) => {
        return(
          documentToReactComponents(item, options)
        )
      })     
      
      return(
        array1
      )

    }

    return(
      <section id={id}  className="" >
        <div className="container">
          <h1 className="display-3">{edge.node.title}</h1>
          {myDocumentToReactComponents(JSON.parse(edge.node.offerSectionBody.raw), options)}
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
