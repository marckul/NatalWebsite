/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require('path');





/*
  Hints / Steps:  
  1. `createPages`  
  2. `forEach edge in edges`  
  3. `createPage`  
*/ 
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  // 1. Get path to template
  const offerTemplate = path.resolve('src/templates/oferta-podstrona.js')

  const res = await graphql(`
    query {
      allContentfulStronaOfertyPodstrona {
        edges {
          node {
            slug
            body {
              raw
            }
          }
        }
      }
    }
  `)

  res.data.allContentfulStronaOfertyPodstrona.edges.forEach( (edge) => {
    // console.log('\n\n@@@@@@@@@@@@@@@\n', edge, '\n@@@@@@@@@@@@@@@\n\n');
    
    createPage({
      component: offerTemplate,
      path: `/oferta/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  });


    // =============================== //
   /////     FOR NEWS PAGE      ///////
  // ============================= //

  // 1. Get path to template
  const getTitleToSlug = (string = ' ', repl = '-') => {
    let allWords = string.split(" ");
    return allWords.join("-").toLowerCase();  
  }

  const newsTemplate = path.resolve('src/templates/news-post-template.js');

  const resNews = await graphql(`
    query {
      allContentfulAktualnosciPost {
        edges {
          node {
            __typename
            title
            publishDate
          }
        }
      }
    }
  `)

  resNews.data.allContentfulAktualnosciPost.edges.forEach( (edge) => {
    console.log('\n\n@@@@@@@@@@@@@@@\n', edge, '\n@@@@@@@@@@@@@@@\n\n');
    // const slug = `data/${getTitleToSlug(edge.node.title)`;

    createPage({
      component: newsTemplate,
      path: `/aktualnosci/${edge.node.publishDate}/${getTitleToSlug(edge.node.title)}`,
      context: {
        title: edge.node.title,
        publishDate: edge.node.publishDate
      }
    })
  });


}