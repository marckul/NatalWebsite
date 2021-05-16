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

  // console.log('\n\n@@@@@@@@@@@@@@@\n', JSON.parse(res.data), '\n@@@@@@@@@@@@@@@\n\n');

  // 3. Create pages
  
      // node {
      //   slug
  res.data.allContentfulStronaOfertyPodstrona.edges.forEach( (edge) => {
    console.log('\n\n@@@@@@@@@@@@@@@\n', edge, '\n@@@@@@@@@@@@@@@\n\n');
    
    createPage({
      component: offerTemplate,
      path: `/oferta/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  });
}