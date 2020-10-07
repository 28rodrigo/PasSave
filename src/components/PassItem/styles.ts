import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor: '#E6E6F0',
        borderWidth:1,
        borderColor:'#e6e6fe',
        borderRadius:20,
        marginHorizontal:30,
        overflow:'hidden',
        marginTop:10
    },
    input:{
        height:54,
        backgroundColor:'#fff',
        borderRadius:8,
        
        justifyContent:"center",
        paddingHorizontal:16,
        
        fontSize:18,
        color:'#668f'
        
    },
    profileinfo:{
        
        marginLeft:20,
        justifyContent:"center"
    },
    profiletext:{
        marginBottom:-5,
        fontSize:35,
        color:'#32264d',   
       // fontFamily:'Sriracha_400Regular'
    },
    avatar:{
        width:58,
        height:58,
        borderRadius:32,
        backgroundColor:'#eee'
    },
    info:{
        marginTop:-4,
        flexDirection:"row",
        alignItems:"center",
        
    },
    showhide:{
        marginTop:10,
        marginBottom:16,
        width:'85%',
        alignItems:"center",
        flexDirection:"row",
       justifyContent:"space-between",
        borderRadius:8,
        backgroundColor:'#fff'
    },
    copybutton:{
        width:45,
        height:45,
        borderColor:'#223fd7',
        borderWidth:1,

        marginLeft:5,
        marginBottom:8,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8
        
    },
    copybutton1:{
        width:45,
        height:45,
        borderColor:'#223fd7',
        borderWidth:1,
        marginTop:41,
        marginLeft:5,
        marginBottom:8,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8
        
    },
    button:{
        backgroundColor:'#223fd7',
        width:55,
        height:55,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8

    }, buttons:{
        marginTop:10,
        flexDirection:"row",
        paddingHorizontal:15,
        justifyContent:"space-between",
        
        
    },
    data:{
        justifyContent:"center",
        flexDirection:"row"

    },
    text:{
        color:'#9C98A6',
        marginLeft:4,
       // fontFamily:'Poppins_400Regular',
        fontSize:15
    }
    
    
});

export default styles;