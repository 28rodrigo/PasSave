import {StyleSheet, YellowBox} from 'react-native'

const styles=StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#223FD7',
      justifyContent: 'center',
      
    },
    title:{
        fontFamily:"Sriracha_400Regular",
        fontSize:60,
        color:'#fff',
        

    },
    content:{
      margin:40,
      flex:1,
      justifyContent:"center",
      alignItems:"center"

  },
    text:{
      marginTop:-14,
     // fontFamily:"Poppins_400Regular",
      fontSize:16,
      color:"#FFF6F6",
      opacity: 0.7
    },
    button:{
      backgroundColor:"#dddd",
      justifyContent:"center",
      alignItems:"center",
      height:50,
      paddingHorizontal:50,
      borderRadius:8,
      borderWidth:4,
      borderColor:"#fff",
      marginTop:200,
  },
  buttonText:{
      color:'#003',
    //  fontFamily:'Poppins_600SemiBold',
      
  }
});

export default styles;