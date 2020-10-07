import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Landing from './src/pages/Landing'
import { AppLoading} from 'expo'
import {Archivo_400Regular,Archivo_700Bold,useFonts} from '@expo-google-fonts/archivo'
import {Poppins_400Regular,Poppins_600SemiBold} from '@expo-google-fonts/poppins'
import {Sriracha_400Regular} from '@expo-google-fonts/sriracha'
import AppStack from './src/routes/AppStack';
import Database from './src/database/Database';
import { ImageBackground } from 'react-native';

 
export default function App() {
  const db= new Database();
  useEffect(() => {
      db.init();
  }, []);

  
  let [fontsLoaded]=useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Sriracha_400Regular
  })
  if(false){
    return <ImageBackground source={require('./src/assets/images/Splash.png')} resizeMode='cover' style={{ flex:1}} > 
         </ImageBackground>  
  }else{
    return (
      <>
      
        <AppStack/> 
          
  
  
        <StatusBar style="light"/>
      </>
  
    );
  }
  
}

