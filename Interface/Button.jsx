import React, { Component } from 'react';
import {Styles , Colors} from './Verstyle'
import {View , Text, TouchableOpacity} from 'react-native'

class Button extends React.Component {
      
  render () {    
  return (
    <TouchableOpacity style = {{...Styles.Button  ,  backgroundColor : this.props.Colors ? this.props.Colors[0] : 'cyan' ,
     ...this.props.style  }}
     onPress={()=> {this.props.OnPress()}} >         
    <Text style = {{color:this.props.Colors ? this.props.Colors[1] : 'magenta'}} >
      {this.props.children}
    </Text>
   </TouchableOpacity>
  );
}
}
export default Button






const Verstyle = ({
      Menu : {           
     }
})
