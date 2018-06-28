import React, { Component, PropTypes} from 'react';
import StarRating from './star-rating';

const Color = ({title, color, rating=0})=> 
  <section className="color">
    <h1>{title}</h1>
    <div className="color"
    style={{backgroundColor:color}}>
    </div>
    <div>
      <starRating starSelected={rating}/>
    </div>
   </section>

const ColorList = ({colors=[]}) => 
  <div classname="color-list">
    {(colors.length == 0)? 
      <p>No Colors Listed(Add a color)}</p>:
      colors.map(color =>
      <Color key={color.id}{...color} />)
    }
  </div>

export default ColorList;
