import * as React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// ZMIANA TEKSTU NA SLUG
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




const getOfferSectionByTitleID = (string = ' ', repl = '-') => {
  let allWords = string.split(" ");
  return allWords.join("-").toLowerCase();  
}

/** 
 * Function return instance of richTextRenderer object that is 
 * required to proper execution of functions in option richTextRenderer.object
 * naming function result as richTextRenderer is IMPORTANT (see example)
 * 
 * 
 * @example 
 * let richTextRenderer = getRichTextRenderer()
 * richTextRenderer._constructor(richText, "/oferta")
 */ 
const getRichTextRenderer = () => {
  
  // INITIALIZATION
  const richTextRenderer = {
    /**
     * Short description. (use period)
     * 
     * @param {object} options - object that is argument required by documentToReactComponents from '@contentful/rich-text-react-renderer';
     * @param {string} entryHyperlink.slugPrefix - slug prefix eg "/oferta" (earlier was preSLug)
     */ 
    options: null, // tutaj poodpiac obiekt options
    entryHyperlink: {
      slugPrefix: "", // prefix do sluga
    },
    richText: null, // richText object
    hello: "elo hello",
    /**
     * @param {object} richText - richText object that is processed by documentToReactComponents from '@contentful/rich-text-react-renderer' library
     *  
     */ 
    _constructor: function(richText, slugPrefix = "/"){
      this.richText = richText;
      this.entryHyperlink.slugPrefix = slugPrefix;
    }
  }
   
  richTextRenderer.options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        // const imageSize = '?w=1280';
  
        let richText = richTextRenderer.richText;
  
        // console.log('$$$$$$$ ', richTextRenderer.hello, '$$$$$$$ ');

        let references = [];

        {
          let idx = 0;
          richText.references.forEach( reference => {

            if (reference.__typename === "ContentfulAsset") {
              references[idx] = reference;
              idx++;
              // console.log(reference);
            }
          })
        }

        // let imageUrl = "";
        let imageDescription = "";
        let image = null;

        if (node.data.target.sys.linkType === "Asset") {
          references.forEach( (reference) => { 
            if (node.data.target.sys.id === reference.contentful_id) {
              // imageUrl = reference.file.url;
              imageDescription = reference.description;
              image = getImage(reference);
            }
          })

        }
        
        return(
          <figure className="">
            <GatsbyImage image={image} alt={imageDescription} className="img-fluid"/>
            {/* <img src={`${imageUrl}${imageSize}`} alt={imageDescription} className="img-fluid"/> */}
          </figure>
        )
      },
      "entry-hyperlink": (node) => {
        /* TODO:
          1. dodać linkowanie do URL
          2. dodać linkowanie do Mediów
        */ 

        let richText = richTextRenderer.richText;
        // let slugPrefix = richTextRenderer.entryHyperlink.slugPrefix;
        // SLUG PREFIX
        let slugPrefix = "";
        
        

  
        // If link is linking to Entry
        if (node.data.target.sys.linkType === "Entry") {
          let linkTo = '';
          
  
          // Iterating over all references            
          for (let idx = 0; idx < richText.references.length; idx++) {
            const reference = richText.references[idx];



            slugPrefix = richTextRenderer.entryHyperlink.slugPrefix;
            if (reference.__typename === "ContentfulAsset") {
              slugPrefix = '';

            } else if (reference.__typename === "ContentfulStronaOfertySekcja") {
              slugPrefix = '/oferta';
              
            }
            
  
            // Adding where linkTo provides to
            if (reference.contentful_id === node.data.target.sys.id) {
  
              if (reference.hasOwnProperty("slug")) {
                linkTo = `/${reference.slug}`;
                
              } else if(reference.hasOwnProperty("id")) {
                linkTo = `#${getOfferSectionByTitleID(reference.id)}`;
  
              } else if(reference.hasOwnProperty("title")) {
                linkTo = `#${getOfferSectionByTitleID(reference.title)}`;
  
              } else {
                console.warn("richText.references object don't have reguired property or field")
              }

              // if (idx ===1) {
              //   debugger;              
              // }
              // debugger;              
              
            }
          }
  
          return(
            <AnchorLink to={`${slugPrefix}${linkTo}`}>{node.content[0].value}</AnchorLink>
          )
        }
      }, // entry-hyperlink
      "hyperlink": (node) => {
        // debugger;
        
        return(
          <a href={`${node.data.uri}`} target="_blank">{node.content[0].value}</a>
        );

      }
    }, // renderNode
    renderText: text => {
      // Source:
      // https://www.contentful.com/blog/2021/05/27/rich-text-field-tips-and-tricks/#heading-1051
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    }
  } // options

  return richTextRenderer; 
}

/* ================================== 
  RICH TEXT RENDERER - OPTIONS
 ==================================== */ 

// INITIALIZATION
/**
 * Short description.
 * 
 * @param {object} options - object that is argument required by documentToReactComponents from 'contentful/rich-text-react-renderer';
 * @param {string} entryHyperlink.slugPrefix - slug prefix eg "/oferta"
 * @param {object} richText - contentful richText object get from GraphQL query
 */ 
let richTextRenderer = {
  options: null, // tutaj poodpiac obiekt options
  entryHyperlink: {
    slugPrefix: "", // prefix do sluga
  },
  richText: null, // richText object
  hello: "HELLO MESSAGE",
  /** richTextRenderer object constructor 
   * @param {object} richText - contentful richText object get from GraphQL query
   * 
   * @example 
   * richTextRenderer._constructor(richText, "/oferta")
   */ 
  _constructor: function(richText, slugPrefix = "/"){
    this.richText = richText;
    this.entryHyperlink.slugPrefix = slugPrefix;
  }
}
  
richTextRenderer.options = {
  renderNode: {
    "embedded-asset-block": () => {

      let richText = richTextRenderer.richText;

      console.log('$$$$$$$ ', richTextRenderer.hello, '$$$$$$$ ');
      // debugger;
      return(
        <figure className="my-5">
          <img src={richText.references[0].file.url} alt={richText.references[0].description} className="img-fluid"/>
        </figure>
      )
    },
    "entry-hyperlink": (node) => {
      /* TODO:
        1. dodać linkowanie do URL
        2. dodać linkowanie do Mediów
      */ 
      let richText = richTextRenderer.richText;
      let slugPrefix = richTextRenderer.entryHyperlink.slugPrefix;

      // If link is linking to Entry
      if (node.data.target.sys.linkType === "Entry") {
        let linkTo = '';

        // Iterating over all references            
        for (let idx = 0; idx < richText.references.length; idx++) {
          const reference = richText.references[idx];

          // Adding where linkTo provides to
          if (reference.contentful_id === node.data.target.sys.id) {

            if (reference.hasOwnProperty("slug")) {
              linkTo = `/${reference.slug}`;
              
            } else if(reference.hasOwnProperty("id")) {
              linkTo = `#${getOfferSectionByTitleID(reference.id)}`;

            } else if(reference.hasOwnProperty("title")) {
              linkTo = `#${getOfferSectionByTitleID(reference.title)}`;

            } else {
              console.warn("richText.references object don't have reguired property or field")
            }
            
          }
        }

        return(
          <AnchorLink to={`${slugPrefix}${linkTo}`}>{node.content[0].value}</AnchorLink>
        )
      }
    } // entry-hyperlink
  } // renderNode
} // options


// -----------------
//    AKTUALNOSCI
// -----------------

const GetPrettyDatePL = (stringDate) => {  
  /*
    TODO: Add publicDate in polish as context in gatsby-node.js
          Now  date is render to polish format on client side

          
    Issues with Node DATE.toLocaleDateString

      NodeJS not applying date locales properly
      https://github.com/nodejs/node/issues/8500

  */ 
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const rawPublishDate = new Date(stringDate);

  let publishDate = rawPublishDate.toLocaleDateString('pl-PL', optionsDate)
  publishDate = publishDate.split(' ').map( (word) => {
    return word = word[0].toUpperCase() + word.slice(1);
  })

  return publishDate.join(' ');
}



  

function arrayContains(item, array) {
  return (array.indexOf(item) > -1);
}
/* Tworzy i dodaje id do nagłówków na podstawie ich treści  */ 
  class IdFromTitleClass {
    static itemsType = ["h1", "h2", "h3", "h4", "h5"];
    static AddToContent(pageContent) {
      let newPageContent = pageContent.map( node => {
        let newNode = null;
  
        if (arrayContains(node.type, this.itemsType)) {
          let nodeContent = node.props.children;
          let nodeText = "";
          // if (node.type === "h2") {
          //   debugger;          
          // }
          
          if (Array.isArray(nodeContent)) {
            nodeContent = nodeContent[0] 
            for (let i = 0; i < nodeContent.length; i++) {
              if (typeof nodeContent[i] === "string") {
                nodeText += nodeContent[i];
              }            
            }
            // nodeContent = nodeContent.join(" ");       
          } else {
            nodeText = nodeContent
          }
          newNode = React.cloneElement(node, {id: slugify(nodeText)});
  
        } else {
          newNode = node;
        }
        return newNode;
      }); 
      return newPageContent;
    }
  }


export {
  slugify, 
  getRichTextRenderer, 
  richTextRenderer, 
  getOfferSectionByTitleID, 
  GetPrettyDatePL, 
  IdFromTitleClass
}
