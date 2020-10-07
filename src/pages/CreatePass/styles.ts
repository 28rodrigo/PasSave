import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
    paddingTop:15,
       marginTop:-30,
       backgroundColor:'#fff',
       marginHorizontal:20,
       borderRadius:10,
       paddingHorizontal:20,
       paddingBottom:25,
       flex:0.91
    },
    input:{
        height:54,
        backgroundColor:'#fff',
        borderRadius:8,
        width:'80%',
        justifyContent:"center",
        paddingHorizontal:16,
        marginTop:10,
        marginBottom:16,
        
    },
    button:{
        backgroundColor:'#223FD7',
        justifyContent:"center",
        alignItems:"center",
        height:50,
        borderRadius:8,
        marginTop:30
    },
    buttonText:{
        color:'#fff',
       // fontFamily:'Poppins_600SemiBold',
        
    }

});

export default styles;