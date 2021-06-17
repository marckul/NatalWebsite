import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import  { GetPrettyDatePL } from '../components/functions'

import '../styles/aktualnosci/aktualnosci.css'

// ------------


const CSS = {
  layoutClasses: "d-flex flex-column justify-content-center my-0 jumbotron jumbotron-fluid" 
}


const GetNewsData = () => {
  let data = useStaticQuery(
    graphql`
      query {

        allSitePage(
          filter: {
            componentChunkName: {
              eq: "component---src-templates-news-post-template-js"
            }
          }
          sort: { fields: context___publishDate, order: DESC }
        ) {
          nodes {
            path
            context {
              publishDate
            }
          }
        }

        allContentfulAktualnosciPost(
          sort: {fields: publishDate, order: DESC}
          filter: {title: {ne: "MODEL_DANYCH"}}
        ) {
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




/*
const SideBar = () => {
  return(
    <div className="my-sidebar col-md-3 col-xl-2 d-none d-md-block m-0 pl-4 pr-0">
      <div className="content-break"></div>
      <div id="TOC" className="TOC d-none d-md-block mr-auto ml-0">
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
      </div>  
    </div> 
  )
}
*/ 


const NewsPagePost = (props) => {
  const publishDate = GetPrettyDatePL(props.publishDate)

  return(
    <div className="row my-5 py-1  py-3 ">
      <div className="col-12">
        <h2 className="display-6 font-weight-normal">{props.title}</h2>
        <p className="font-weight-lighter text-muted">Opublikowano: {publishDate}</p>
        <p>{`${props.intercept}...`}</p>
        <div className="text-right">
          <Link to={props.path} className="btn rounded-0 btn-outline-info py-1 px-3 small">Czytaj więcej</Link>
        </div>
      </div>
    </div> 
  )
}



const NewsPage = (props) => {

  const {allSitePage, allContentfulAktualnosciPost} = GetNewsData();
  let allNewsPagePost = [], idx = 0;

  if (allContentfulAktualnosciPost.edges.length === allSitePage.nodes.length) {
    allContentfulAktualnosciPost.edges.forEach( (edge) => {
      if (edge.node.title !== "MODEL_DANYCH") {
        // debugger;
        if (edge.node.publishDate === allSitePage.nodes[idx].context.publishDate) {
          edge.node.path = allSitePage.nodes[idx].path;
          // debugger;
          allNewsPagePost[idx] = NewsPagePost(edge.node);
          idx++;
        } 
      }
    })    
  } 
  else {
    console.warn("Number of allContentfulAktualnosciPost edges in not equal number of post pages (Probablu problem with MODEL_DANYCH post)");
  }

  return(
    <Layout className={`news-page-main-class container-flex`} id="" currentPath={props.path} >
      {/* strona-aktualnosci */}
      <Seo title="Aktualności" url="aktualnosci"/>
      <div className={`${CSS.layoutClasses} jumbotron jumbotron-hero`} id="top">
        <div className="container">
          <h1 className="display-2" >Aktualności</h1>
        </div>
      </div>
      <div className="container-fluid d-flex flex-wrap py-5 px-0">
        <div className="container archive">
          {allNewsPagePost}
        </div>
      </div>
    </Layout>
  )
}
export default NewsPage