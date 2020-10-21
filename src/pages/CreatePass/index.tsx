import React, { useState, useEffect } from 'react'
import { View, Text,KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import Database from '../../database/Database'
import Password from '../../models/Password';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
interface Response{
    operation:string
    row:Object;
}
function CreatePass(){
    const db= new Database();
    const navigation=useNavigation();
    const [url,seturl]=useState('');
    const [nome,setnome]=useState('');
    const [mail,setmail]=useState('');
    const [password,setpassword]=useState('');
    const [nota,setnota]=useState('')

    function handleBackButton(){
        navigation.goBack();
    }
    async function handleSaveButton(){
        if(url=='' || nome=='' || mail=='' || password==''){
            alert('Necessario preencher campos');
            return
        }
        const pass= new Password(url,nome,mail,password,nota);
        
        const response=await db.addpass(pass) as Response
        if(response.operation="sucess"){
            ToastAndroid.show('Password criada com sucesso',ToastAndroid.SHORT);
            navigation.goBack();
        }else{
            console.log(response)
            ToastAndroid.show('Erro a criar Password',ToastAndroid.LONG);
        }
  
    }
  
    useEffect(()=>{
        // console.log('url'+url);
        // console.log('nome'+nome);
        // console.log('mail'+mail);
        // console.log('pass'+password);
        // console.log('nota'+nota);
    },[url,nome,mail,password,nota])
   
    return(
        <>
            <PageHeader title='Criar Password' headerMinus={
                <RectButton onPress={handleBackButton} style={{borderRadius:10,width:32,height:32,alignItems:"center"}}>
                <Ionicons name="ios-arrow-round-back" size={32} color="white" />
                </RectButton>
            }/>
            
            <View style={styles.container}>  
            <ScrollView
            disableScrollViewPanResponder
            showsVerticalScrollIndicator = {false}
            contentContainerStyle={{
                paddingHorizontal:0,
                paddingBottom:30,
                
            }}
            >
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
                <Input content={url} editable={true} updatestate={seturl} title='URL'/>
                <Input content={nome} editable={true} updatestate={setnome} title='Nome'/>
                <Input content={mail} editable={true} updatestate={setmail} title='Email/Username'/>
                <Input content={password} editable={true} updatestate={setpassword} title='Password' type="pass"/>
                <Input content={nota} editable={true} updatestate={setnota} title='Notas' type="bio"/>
                
                <RectButton onPress={handleSaveButton} style={styles.button}>
                     <Text style={styles.buttonText}>Guardar alterações</Text>
                </RectButton>
                </KeyboardAvoidingView>
            </ScrollView>

           
            </View>
        </>
    );
}

export default CreatePass;