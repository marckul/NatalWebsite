/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require('path');

/*
  FUNKCJA POPRAWAIJĄCA SLUGI:
  https://stackoverflow.com/questions/54743952/javascript-slug-working-for-non-latin-characters-also

*/ 
function slugify(text) {
  text = text.toString().toLowerCase().trim();

  const sets = [
    {to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶἀ]'},
    {to: 'c', from: '[ÇĆĈČ]'},
    {to: 'd', from: '[ÐĎĐÞ]'},
    {to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]'},
    {to: 'g', from: '[ĜĞĢǴ]'},
    {to: 'h', from: '[ĤḦ]'},
    {to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]'},
    {to: 'j', from: '[Ĵ]'},
    {to: 'ij', from: '[Ĳ]'},
    {to: 'k', from: '[Ķ]'},
    {to: 'l', from: '[ĹĻĽŁ]'},
    {to: 'm', from: '[Ḿ]'},
    {to: 'n', from: '[ÑŃŅŇ]'},
    {to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]'},
    {to: 'oe', from: '[Œ]'},
    {to: 'p', from: '[ṕ]'},
    {to: 'r', from: '[ŔŖŘ]'},
    {to: 's', from: '[ßŚŜŞŠȘ]'},
    {to: 't', from: '[ŢŤ]'},
    {to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]'},
    {to: 'w', from: '[ẂŴẀẄ]'},
    {to: 'x', from: '[ẍ]'},
    {to: 'y', from: '[ÝŶŸỲỴỶỸ]'},
    {to: 'z', from: '[ŹŻŽ]'},
    {to: '-', from: '[·/_,:;\']'}
  ];

  sets.forEach(set => {
    text = text.replace(new RegExp(set.from,'gi'), set.to)
  });

  return text
    .replace(/\s+/g, '-')    // Replace spaces with -
    //.replace(/[^-a-zа-я\u0370-\u03ff\u1f00-\u1fff]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-')    // Replace multiple - with single -
    .replace(/^-+/, '')      // Trim - from start of text
    .replace(/-+$/, '')      // Trim - from end of text
}




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

  const siteConfigs = await graphql(`
    query {
      site {
        siteMetadata {
          modelEntityName
        }
      }
    }
  `);

  const res = await graphql(`
    query {
      allContentfulStronaOfertyPodstrona {
        edges {
          node {
            title
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
    if (edge.node.slug.trim() !== "MODEL_DANYCH") {
      createPage({
        component: offerTemplate,
        path: `oferta/${edge.node.slug}`, // było na poczatku z "/path"
        context: {
          slug: edge.node.slug
        }
      })

    }
  });


  /* ===============================
          FOR NEWS PAGE     
  =============================== */ 
  
  // 1. Get path to template
  // const getTitleToSlug = (string = ' ', repl = '-') => {
  //   let allWords = string.split(" ");
  //   return allWords.join("-").toLowerCase();  
  // }

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
    // const slug = `data/${slugify(edge.node.title)`;

    if (edge.node.title.trim() !== "MODEL_DANYCH") {
      createPage({
        component: newsTemplate,
        path: `aktualnosci/${edge.node.publishDate}/${slugify(edge.node.title)}`,
        context: {
          title: edge.node.title,
          publishDate: edge.node.publishDate
        }
      })      
    }    
  });


}