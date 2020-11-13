import {StyleSheet } from 'react-native'


export const Styles = StyleSheet.create ({
    Container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ContainBelow:{
      flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    Menu:{
      position:"absolute",
      top:"0%",
      left:"0%",
      width:"100%",
      height:"10%",
      display:'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-evenly', 
      backgroundColor:'white',
      color:'magenta'

    } ,
    NiceText : {
      fontSize:22,
      fontFamily:'Roboto',
      fontStyle:'italic',
      color:'magenta',
    },
    Button:{
      width:'70%',
      height:'5%',
      backgroundColor:'#222',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:63
    },
    MessengerInput : {
       height: 40,width:360, borderColor: 'lightgray', borderWidth: 0.5 
    }

  })
  
export const Colors = ({

  White:{
    backgroundColor : 'white'
  },
  Black:{
    backgroundColor : 'black'
  },
   NiceDark:{
    backgroundColor : '#222'
  },
  Magenta:{
    backgroundColor : 'magenta'
  }, 
  Cyan:{
    backgroundColor : 'cyan'
  },
  Blue:{
    backgroundColor : 'blue'
  },


})

export const TextColors = ({

  White:{
    color : 'white'
  },
  Black:{
    color : 'black'
  },
   NiceDark:{
    color : '#222'
  },
  Magenta:{
    color : 'magenta'
  }, 
  Cyan:{
    color : 'cyan'
  },
  Blue:{
    color : 'blue'
  },

})







