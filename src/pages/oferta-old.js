import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Layout from '../components/layout'
import * as ofertaStyles from '../styles/oferta/oferta.module.css'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const OfferPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/pages-markdown/"}}) {
        edges {
          node {
            frontmatter {
              title
            }
            html
            excerpt(format: HTML)
          }
        }
      }
    }  
  `)
  console.log('@@@@@@@@@@@@ data.edges', data.allMarkdownRemark.edges);

  let offerPageContent = data.allMarkdownRemark.edges.map( (edge) => {
    // edge.node.frontmatter.title = '';
    let title = edge.node.frontmatter.title;
    let id = title.replaceAll(' ', '-').toLowerCase();
    

    let sectionInnerHTML = () => (
      {__html: edge.node.html}
    )

    // debugger;
    return(
      <section id={id}  className="container my-5" dangerouslySetInnerHTML={ sectionInnerHTML() } />
    )


  })
  
  console.log(ofertaStyles);

  return(
    <Layout id="oferta" className={ofertaStyles.oferta}>
      {offerPageContent}
      {/* <section id="instalacje-co"  className={`container my-5 ${ofertaStyles.instalacjeCo}`}>
        <h1 className="display-4">Centralne Ogrzewanie</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio deleniti veritatis ipsum odio tempore consectetur omnis error ex consequuntur id, repudiandae pariatur minus facilis asperiores, debitis obcaecati molestias provident? Ex placeat eius fugiat corporis voluptate dolore quia porro nihil qui sit temporibus aut, sed atque autem modi veritatis sint expedita itaque alias obcaecati odio a minus culpa exercitationem? A veritatis sunt at. Nobis natus, maiores sapiente voluptate aliquam error ipsam possimus harum veritatis aperiam numquam optio nisi doloribus similique repellat nulla. Totam quas non doloremque quasi aperiam corrupti vitae cum, dicta, cumque sed magnam ratione reprehenderit enim. Facilis, aliquid soluta. A reiciendis dolorum iste sequi minima similique, commodi facere asperiores pariatur recusandae repellat expedita sint voluptate autem quis excepturi quam in. Cupiditate, qui neque? Earum vitae facere molestias cum expedita animi ipsam officia, dolor quidem minima sapiente, quasi nam tempora placeat harum laboriosam, fugit doloribus magnam blanditiis. Commodi voluptatum placeat itaque voluptas necessitatibus, est incidunt nesciunt a exercitationem. Aspernatur voluptas placeat cumque voluptatum eaque? Nostrum, provident reprehenderit sed veniam inventore nulla ea? Nam reiciendis, sunt, illum, recusandae molestiae magnam illo consequatur error odio praesentium odit perspiciatis? Asperiores eos excepturi accusamus consectetur, qui magnam tempore veniam vel culpa saepe totam quidem nemo animi ut, repellendus obcaecati tempora nisi id quisquam reprehenderit est, praesentium odio. Omnis minima saepe optio laborum nulla amet porro ipsam earum debitis, explicabo soluta inventore esse consectetur dignissimos quidem ut officia dolores! Numquam aliquid nisi nesciunt dolore minima dignissimos, dolorem, repellat ut voluptas vero assumenda. Vero error id inventore et mollitia quod voluptatum. Nisi repellat ut est porro numquam nobis, accusamus eius iste quidem at nihil itaque quasi unde veritatis earum neque corporis in aperiam blanditiis libero vel sit cupiditate magni rerum! Iusto assumenda laboriosam eum sint necessitatibus rerum nisi. </p>
      </section> */}
      <section id="instalacje-wod-kan"  className={`container my-5 py-5  ${ofertaStyles.instalacjeWodKan}`}>
        <h1 className="display-4">Instalacje WOD-KAN</h1>
        <p>Natus inventore, minima consectetur autem voluptatem ab totam illo exercitationem nulla repellendus atque aspernatur fugit corrupti adipisci ad magnam quos? Magnam eos, tempora error ex obcaecati, vitae nam hic asperiores vel labore veritatis, ut facilis earum quos dignissimos! Nemo laudantium exercitationem eius provident quas impedit, facere nisi consequatur voluptatem magni. Porro eligendi omnis est nisi quidem harum odio corrupti saepe beatae deserunt laudantium magni distinctio, consectetur, officiis illo, sunt dolorem. Laborum eaque commodi veniam quam, error deleniti reprehenderit culpa laboriosam neque in mollitia, blanditiis facilis nulla? Optio voluptatum ut pariatur qui quis, nihil nemo delectus culpa. Magnam corporis debitis praesentium ad rem illo quo accusantium laborum quod quis!</p>
      </section>
      <section id="fotowoltaika-wentylacja"  className={`container my-5 ${ofertaStyles.fotowoltaikaWentylacja}`}>
        <h1 className="display-4">Fotowoltaika i Wentylacja</h1>
        <p>Natus inventore, minima consectetur autem voluptatem ab totam illo exercitationem nulla repellendus atque aspernatur fugit corrupti adipisci ad magnam quos? Magnam eos, tempora error ex obcaecati, vitae nam hic asperiores vel labore veritatis, ut facilis earum quos dignissimos! Nemo laudantium exercitationem eius provident quas impedit, facere nisi consequatur voluptatem magni. Porro eligendi omnis est nisi quidem harum odio corrupti saepe beatae deserunt laudantium magni distinctio, consectetur, officiis illo, sunt dolorem. Laborum eaque commodi veniam quam, error deleniti reprehenderit culpa laboriosam neque in mollitia, blanditiis facilis nulla? Optio voluptatum ut pariatur qui quis, nihil nemo delectus culpa. Magnam corporis debitis praesentium ad rem illo quo accusantium laborum quod quis!</p>

      </section>
      <section id="roboty-ziemne"  className={`container my-5 ${ofertaStyles.robotyZiemne}`}>
        <h1 className="display-4">Roboty Ziemne</h1>
        <p>Oferujemy wynajem minikoparki  Kubota KX018-4  wraz z operatorem.</p>
        <p>Natus inventore, minima consectetur autem voluptatem ab totam illo exercitationem nulla repellendus atque aspernatur fugit corrupti adipisci ad magnam quos? Magnam eos, tempora error ex obcaecati, vitae nam hic asperiores vel labore veritatis, ut facilis earum quos dignissimos! Nemo laudantium exercitationem eius provident quas impedit, facere nisi consequatur voluptatem magni. Porro eligendi omnis est nisi quidem harum odio corrupti saepe beatae deserunt laudantium magni distinctio, consectetur, officiis illo, sunt dolorem. Laborum eaque commodi veniam quam, error deleniti reprehenderit culpa laboriosam neque in mollitia, blanditiis facilis nulla? Optio voluptatum ut pariatur qui quis, nihil nemo delectus culpa. Magnam corporis debitis praesentium ad rem illo quo accusantium laborum quod quis!</p>

      </section>
    </Layout>
  )
}


export default OfferPage
