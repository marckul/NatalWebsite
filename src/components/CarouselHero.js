import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";

// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import  { richTextRenderer } from '../components/functions'

import photovoltaicsImg from '../assets/images/fotowoltaika-hero-2000x.jpg'
import boilerImg from '../assets/images/kociol-2000x.jpg'
import pipes2Img from '../assets/images/natal-pipes-2.jpg'




console.log('@@@@@@ FOTO', photovoltaicsImg);


// Linki do obrazów /**/ 

const items = [ 
  {
    id: 'nasza-oferta', // Materiały instalacyjne
    title: 'Nasza oferta', // Materiały instalacyjne
    text: 'Oferujemy szeroki asortyment materiałów instalacyjnych. Zapoznaj się z naszą ofertą', 
    image: pipes2Img,
    to: '/oferta#nasza-oferta'
  },
  {
    id: 'fotowoltaika',
    title: 'Foto&shy;woltaika', 
    text: 'Oferujemy montaż instalacji fotowoltaicznych i solarów słonecznych', 
    image: photovoltaicsImg,
    to: '/oferta#fotowoltaika-i-wentylacja'
  },
  {
    id: 'instalacje-co', 
    title: 'Instalacje CO', 
    text: 'Zobacz naszą ofertę kotłów gazowych i węglowych', 
    image: boilerImg,
    to: '/oferta#instalacje-co'
  }
  
]


const Carousel = ({children}) => {

  const count = React.Children.count(children);
  let carouselIndicators = Array(count);
  let className = 'active';

  console.log("@@@@@@@@@@@@@\n","LICZBA DZIECI W KARUZELI", count, "@@@@@@@@@@@@@\n");

  // let idx = -1;
  // const array = [0,1,2,3];
  // let carouselIndicators2 = array.map( () => {
  //   idx++;
  //   if (idx > 0) {
  //     className = '';
  //   }

  //   return(
  //     <li data-target="#carousel-hero" data-slide-to={idx} className={className}></li>      
  //   )
  // }) 

  const makeIndicator = (idx, className) => {
    return(
      <li data-target="#carousel-hero" key={idx} data-slide-to={idx} className={className}></li>      
    )
  }

  for (let idx = 0; idx < count; idx++) {
    if (idx > 0) {
      className = '';
    }
    carouselIndicators[idx] = makeIndicator(idx, className);
  }


  return(
    <div id="carousel-hero" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        {carouselIndicators}
      </ol>
      <div className="carousel-inner">
        {children}
      </div>
      <a className="carousel-control-prev " href="#carousel-hero" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon d-none d-md-inline-block" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel-hero" role="button" data-slide="next">
        <span className="carousel-control-next-icon d-none d-md-inline-block" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}


const CarouselItem = (props) => {
  // richTextRenderer._constructor(edge.node.offerSectionBody, "")
  return(
    <div id={props.id} className={`carousel-item d-flex align-items-center justify-content-center ${props.active}`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
        <div className="col-xs mt-5  text-center" >
          <h2 className="display-2 mt-5" dangerouslySetInnerHTML={{__html: props.title}} />             
          <p className="lead text-center">{props.text}</p>
          <div className="text-center text-md-right">
            <AnchorLink className="btn btn-large btn-secondary rounded-0" to={props.to} role="button">Zobacz więcej</AnchorLink>
          </div>
        </div>             
      </div>
    </div>
  )
}

const CarouselHero = () => {
  console.log("\n\n\n", "CarouselHero", "\n")

  let idx = -1;
  let itemActive = '';
  const CarouseleItems = items.map( (item) => {
    idx++
    
    if (idx === 0) {
      itemActive = "active"
    } else {
      itemActive = ""
    }
    
    return(
      <CarouselItem 
        key={idx} id={item.id} title={item.title} text={item.text} 
        image={item.image} active={itemActive} to={item.to}
      />
    )
  })
  
  console.log(CarouseleItems);
  // {CarouseleItems}
  return(
    <Carousel>
      {CarouseleItems}
    </Carousel>
  )
}


export default CarouselHero