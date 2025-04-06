import React from 'react';
import Productcard from './ProductCard';
import newcastle from "./newcastle.jpg"
import london from "./london.jpg"
import dubai from "./dubai.jpg"
import newyork from "./newyork.jpg"
import tokyo from "./tokyo.jpg"
import berlin from "./berlin.jpg"

const Card = () => {
  return ( 
    <div className='product'>
      <Productcard 
        image = {newcastle}
        name = "Newcastle"
        description = "A lovely city in the North-East region of England. 46 miles south of Scotland border."
        button = "explore"
      />
      <Productcard 
        image={london}
        name="London"
        description="The capital and largest city of both England and the United Kingdom."
        button="explore"
      />
      <Productcard 
        image={dubai}
        name="Dubai"
        description="A major global business hub emphasizing tourism and luxury."
        button="explore"
      />
      <Productcard 
        image={newyork}
        name="New York"
        description="A global center of finance and commerce, culture, technology, entertainment and media."
        button="explore"
      />
      <Productcard 
        image={tokyo}
        name="Tokyo"
        description="An international hub of research and development and an academic center."
        button="explore"
      />
      <Productcard 
        image = {berlin}
        name = "Berlin"
        description = "This city is composed of forests, parks and gardens, rivers, canals, and lakes."
        button = "explore"
      />
    </div>
   );
}
 
export default Card;