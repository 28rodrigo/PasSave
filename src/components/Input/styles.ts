import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        marginTop:4,
      
        paddingVertical:7
        
    },
    input:{
        height:54,
        borderColor:'#e6e6f0',
        borderWidth:2,
        backgroundColor:'#fafafc',
        borderRadius:8,
        justifyContent:"center",
        paddingHorizontal:16,
        marginBottom:0,
        fontSize:18,
        
        
        
    },
    password:{
        height:54,
       
        
        backgroundColor:'#fafafc',
        borderRadius:8,
        justifyContent:"center",
        paddingHorizontal:16,
        marginBottom:0,
        fontSize:18,
        width:'85%'
        
    },
    showhide:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth:2,
        borderColor:'#e6e6f0',
        borderRadius:8,
        backgroundColor:'#fafafc'
    },
    text:{
        color:'#9C98A6',
        marginLeft:4,
       // fontFamily:'Poppins_400Regular',
        fontSize:15,

    },
    
    
});

export default styles;