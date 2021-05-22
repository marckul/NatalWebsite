import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import  { getOfferSectionByTitleID, GetPrettyDatePL } from '../components/functions'

import '../styles/aktualnosci/aktualnosci.css'

// ------------


let CSS = {}
CSS.layoutClasses = "d-flex flex-column justify-content-center my-0 jumbotron jumbotron-fluid" 


const GetNewsData = () => {
  let data = useStaticQuery(
    graphql`
      query {
        allContentfulAktualnosciPost(sort: {fields: publishDate, order: DESC}) {
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
  );

  return data;
}

const TitleToNewsPostSlug = (publishDate, title) => {
  const titleSlug = getOfferSectionByTitleID(title);
  return `/aktualnosci/${publishDate}/${titleSlug}`
}



const NewsPagePost = (props) => {
  const publishDate = GetPrettyDatePL(props.publishDate)

  // debugger;
  return(
    <div class="row my-5 py-1  py-3 ">
      <div class="col-12">
        <h2 class="display-6 font-weight-normal">{props.title}</h2>
        <p class="font-weight-lighter text-muted">Opublikowano: {publishDate}</p>
        <p>{`${props.intercept}...`}</p>
        <div class="text-right">
          <a href={TitleToNewsPostSlug(`${props.publishDate}`,`${props.title}`)} class="btn rounded-0 btn-outline-info py-1 px-3 small">Czytaj więcej</a>
        </div>
      </div>
    </div> 
  )
}



const NewsPage = () => {

  const data = GetNewsData();


  

  const contentProps = {
    title: "",
    publishDate: "",
    intercept: "Tutaj bedzie skrót tresci",
  }

  let allNewsPagePost = [];
  let idx = 0;
  data.allContentfulAktualnosciPost.edges.forEach( (edge) => {
    
    // contentProps.title = edge.node.title;
    // contentProps.publishDate = edge.node.publishDate;
    // edge.node.intercept;
    
    if (edge.node.title !== "MODEL_DANYCH") {
      // debugger;
      allNewsPagePost[idx] = NewsPagePost(edge.node);

      idx++;
    }
  })

  return(
    <Layout className={`news-page-main-class container-flex`} id="aktualnosci-top">
      <Seo title="Aktualności"/>
      <div className={`${CSS.layoutClasses} jumbotron jumbotron-hero`}>
        <div className="container">
          <h1 class="display-2" >Aktualności</h1>
        </div>
      </div>
      <div class="container-fluid d-flex flex-wrap py-5">

        

        <div className="my-sidebar col-md-3 col-xl-2 d-none d-md-block m-0 pl-4 pr-0">
          <div className="content-break"></div>
          {/* <div id="TOC" className="TOC d-none d-md-block mr-auto ml-0">
            <nav>
              <ul className="nav flex-column text-dark">
                <li className="nav-item dropdown">
                  <a className="nav-link text-dark" href="#">Kwiecień 2021</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Marzec 2021</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Luty 2021</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Styczeń 2021</a>
                </li>
              </ul>        
            </nav>
          </div>   */}
        </div>

        <div class="container archive">
          {allNewsPagePost}
          {/* <NewsPagePost 
            title='Godziny otwarcia w trakcie długiego weekendu' 
            publishDate='29 kwiecień 2021' 
            intercept='W związku z zbliżającą sie majówką, chcieiśmy ogłosić, że godziny otwarcia naszego sklepu ulegną zmianie. W poniedziałek 3 maja sklep jest oczywiście zamknięty natomiast we wtorek' 
          /> */}
          Quasi aspernatur magnam nam in tempore officia ullam, fugiat asperiores recusandae consectetur deserunt tenetur perferendis ipsa totam accusamus quos aliquid temporibus iusto, sunt vero fuga alias blanditiis. Obcaecati, vero rem quo beatae laudantium quis, blanditiis eligendi nisi asperiores odit placeat, molestias tenetur culpa. Assumenda impedit tempora reprehenderit dolor porro sunt recusandae repellat ratione iusto nulla beatae, voluptates quae numquam quia ducimus maxime dolore! Tempore minus ut modi pariatur a at perferendis quaerat. Impedit odit optio, quod consequatur officiis asperiores tenetur, maxime deserunt nemo excepturi neque cupiditate dolorem blanditiis soluta reprehenderit minus veniam necessitatibus ab molestias. Libero consequatur voluptatum quaerat totam inventore consectetur repellendus quasi ipsa odio nostrum consequuntur eos quod, magnam hic officia aperiam eum quam sunt quibusdam officiis ut ad minus fuga magni? Officia sapiente vel quisquam fuga labore ex consectetur, ducimus soluta dicta enim fugiat ea beatae minus sequi amet explicabo autem dolore harum? Nihil odit nulla consectetur error, fuga vero, sed nobis nemo optio inventore nisi! Molestiae inventore quisquam temporibus. Ullam doloribus tempore et harum quos distinctio sit, ut asperiores. Dignissimos sint rerum illo perspiciatis minus neque corporis reprehenderit quaerat doloremque, delectus magnam labore atque harum fugiat commodi saepe, porro aperiam veniam sit, nihil facere blanditiis excepturi numquam consequuntur. Dolores sequi, aut quasi veritatis hic delectus et quo natus consequatur quia voluptatum, pariatur vel, dolor quisquam consequuntur? Dicta molestias incidunt dolor, doloremque a sunt. Quae tenetur natus nobis quibusdam id fugit expedita minima, aperiam corrupti temporibus dicta numquam, eos magni tempora sed deleniti harum aut accusantium blanditiis consequatur, saepe suscipit alias. Iusto, in? Quasi minima enim rem, earum ea eum aliquid sapiente dicta doloribus quam harum saepe voluptatibus voluptates voluptas eligendi sint laudantium aperiam maxime et eveniet necessitatibus! Repudiandae veritatis vel impedit dolore assumenda, repellendus nam iure consequuntur similique!
    
          
   
        </div>

        <div class="d-none d-lg-block  col-xl-2"></div>

      </div>

    </Layout>
  )
}


export default NewsPage