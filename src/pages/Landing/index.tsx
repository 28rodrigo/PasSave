import React, { useEffect, useState} from 'react'
import { View, Text, ImageBackground } from 'react-native';
import styles from '../Landing/styles'
import * as LocalAuthentication from 'expo-local-authentication';
import {useNavigation} from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

function Landing(){
    function timeout(ms:Number) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
    const navigation= useNavigation()
  const  handleAuthentication= async()=>{
      
    let result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
        navigation.navigate("Passwords")
    }
    else {
        alert ('Authentication Failed')
       
    }
   }
  


    return(
        <View style={styles.container}>  
        <ImageBackground source={require('../../assets/images/give-classes-background.png')} resizeMode='contain' style={styles.content} >
               <View style={{justifyContent:"center",alignItems:"center",marginTop:200}}>
                    <Text style={styles.title}>PasSave</Text>
                    <Text style={styles.text}>Password Manager App</Text>   
               </View>
            
               <RectButton onPress={handleAuthentication} style={styles.button}>
                     <Text style={styles.buttonText}>LOGIN</Text>
                </RectButton>
              
                   
        </ImageBackground>        
                 
        </View>
    );
}

export default Landing;