import React, { Component } from 'react';
import {Styles , Colors , TextColors } from './Verstyle'


class Card extends React.Component {


  Navigate = (PATH) => {
    this.props.history.push('/Mystery');
  }
      
  render () {
    
  return (
    <div> 
        <div style = {{...Styles.Menu , ...Styles.Card , fontSize:12 }} >

        <h1>Card</h1>

        </div>

    </div>
  );

} }

export default Card


const Verstyle = ({
      Menu : {
           ...Styles.Menu  , ...Styles.Card  , backgroundColor:'black'
     }
})
