import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        padding:30,
        backgroundColor: '#223FD7',
    },
    topbar:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20
    
    },
    topbartext:{
        fontWeight:"300",
       // fontFamily:'Poppins_600SemiBold',
        color:'#ff1',
        fontSize:18,
        
        
    },
    header:{

    },
    title:{
        fontWeight:"bold",
       // fontFamily:'Archivo_700Bold',
        fontSize:24,
        lineHeight:32,
        maxWidth:160,
        marginVertical:35,
        color:'#fff'
    }
});

export default styles;