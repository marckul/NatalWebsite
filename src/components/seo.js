/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

class SeoSettings { 
  /**
   * 
   * @param { string } slug 
   */
  constructor(slug) {
    this.slug = slug;
    this.SetIsForPage()
    

  }

  /** @type {string} */
  #slug = "/"
  set slug(value) {
    if (value === undefined) {
      value = "";
    } 
    else {
      if ( value[0] !== '/' ) {
        value = '/' + value;
      }
    }

    this.#slug = value;
  }
  get slug() {
    return this.#slug
  }
  static #isForPageAll = {
    "": "Cala witryna", 
    "/": "Cala witryna", 
    "/oferta": "Strona Oferty", 
    "/aktualnosci": "Strona Aktualnosci"
  };
  static get isForPageAll() {
    return this.#isForPageAll
  };

  #isForPage = "";
  SetIsForPage() {
    this.#isForPage = SeoSettings.isForPageAll[this.slug]
  }
  get isForPage() {
    return this.#isForPage
  }

}

// class StaticSeoSettings { 
//   #slug = "/";
//   set slug(slug) {
//     // SLUG CLEANING
//     if (slug === "") {
//       console.log("slug === \"\"");

//     } else if (slug === undefined) {
//       slug = ""

//     } else {
//       console.log("hello");

//       if ( slug[0] !== '/' ) {
//         slug = '/' + slug;
//       }
//     }
//     // return slug;

//     this.#slug = slug;
//   }
//   get slug() {
//     return this.#slug;
//   }
//   #isForPageAll = {
//     "": "Cala Strona", 
//     "/": "Cala Strona", 
//     "/oferta": "Strona Oferty", 
//     "/aktualnosci": "Strona Aktualnosci"
//   };
//   // Getter
//   get isForPage() {
//     return this.getIsForPage();
//   }
//   get isForPageAll() {
//     return this.#isForPageAll;
//   }
//   // Method
//   getIsForPage() {
//     return this.#isForPageAll[this.slug];
//   }
// }
// const seoSettings = new StaticSeoSettings();



function Seo( { description, keywords, title, url, type, meta, lang } ) {
  // seoSettings.slug = url;

  const seoSettings = new SeoSettings(url);
  

  
  const metadaneStronyPreprocessing = (contentfulMetadaneStrony) => {
    
    if (contentfulMetadaneStrony !== null) {
      // tylko za 1-szym razem
      if (contentfulMetadaneStrony.description.hasOwnProperty("description")) {
        contentfulMetadaneStrony.description = contentfulMetadaneStrony.description.description;
        contentfulMetadaneStrony.keywords = contentfulMetadaneStrony.keywords.join(", ")
      } 
      
      
    } else {
      contentfulMetadaneStrony = {
        keywords: null,
        description: null,
        title: null,
        url: null,
      };
    }
    return contentfulMetadaneStrony;    
    
  }

  const { site, allContentfulMetadaneStrony } = useStaticQuery(
    graphql`
      query ($isForPage: String) {
        
        site {
          siteMetadata {
            description
            keywords
            title
            url
            author
          }
        }

        allContentfulMetadaneStrony(filter: { isForPage: { eq: $isForPage } }) {
          nodes {
            isForPage
            description {
              description
            }
            keywords
            title
            url
          }
        }

      }
    `
  );

  
  // const contentfulMetadaneStrony = metadaneStronyPreprocessing(allContentfulMetadaneStrony.nodes[0]);
  let contentfulMetadaneStrony = null;
  allContentfulMetadaneStrony.nodes.forEach( node => {
    if (node.isForPage  === seoSettings.isForPage) {
      contentfulMetadaneStrony = node;
    }
  })
  // debugger;
  contentfulMetadaneStrony = metadaneStronyPreprocessing(contentfulMetadaneStrony);
  // debugger;

  const metaDescription = description || contentfulMetadaneStrony.description || site.siteMetadata.description;
  const metaKeywords = keywords || contentfulMetadaneStrony.keywords || site.siteMetadata.keywords;
  const defaultTitle = contentfulMetadaneStrony.title || site.siteMetadata?.title;

  const domainName = contentfulMetadaneStrony.url || site.siteMetadata.url;
  const metaUrl = seoSettings.slug ? `${domainName}${seoSettings.slug}` : domainName;


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`, content: metaDescription,
        },
        {
          name: `keywords`, content: metaKeywords,
        },
        {
          property: `og:title`, content: title,
        },
        {
          property: `og:type`, content: type || `website`,
        },
        {
          property: `og:description`, content: metaDescription,
        },
        {
          property: `og:locale`, content: "pl_PL",
        },
        {
          property: `og:url`, content: metaUrl,
        },
        // { name: `twitter:card`, content: `summary`, },
        // { name: `twitter:creator`, content: site.siteMetadata?.author || ``, },
        // { name: `twitter:title`, content: title, },
        // { name: `twitter:description`, content: metaDescription, },
      ].concat(meta)}
      link = {[
        {
          rel: `canonical`, href: metaUrl,

        }
      ]}
    />
  )
}

Seo.defaultProps = {
  lang: `pl`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
