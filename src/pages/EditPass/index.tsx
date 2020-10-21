import React, { useEffect, useState } from 'react'
import { View, Text,KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation,useRoute } from '@react-navigation/native';

import Database from '../../database/Database';
import Password from '../../models/Password';
import Input from '../../components/Input';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
interface Res{
    rows:Response
    operation:string
}
interface Response{
    _array:Array<Password>
    lenght:number
    operation?:string
}
interface Params{
    id:number
}

function EditPass(){
    
    const db= new Database();
    const nav=useNavigation();
    const route=useRoute();
    const [edit,setedit]=useState(false);
    const [url,seturl]=useState('');
    const [nome,setnome]=useState('');
    const [mail,setmail]=useState('');
    const [passwords,setpasswords]=useState('');
    const [nota,setnota]=useState('')

    function handleBackButton(){
        nav.goBack();
    }
    async function getdata(id:number){
        const response = await  db.findbyid(id) as Res
        console.log(response)
        const {rows,operation}=response;
        const{_array}=rows;
        if(operation=='sucess'){
            seturl(_array[0].url);
            setnome(_array[0].nome);
            setmail(_array[0].mail)
            setpasswords(_array[0].password);
            setnota(_array[0].nota)
        }else{
            ToastAndroid.show('Erro a obter password',ToastAndroid.LONG);
            console.log(response)
            nav.goBack()
            return
        }
        
    }
    function handleEditButton(){
        setedit(true);
     }
    async function handleSaveButton(){
        const {id}= route.params as Params
        if(url=='' || nome=='' || mail=='' || passwords==''){
            alert('Necessario preencher campos');
            return
        }
        const pass1= new Password(url,nome,mail,passwords,nota);
        const response=await db.updatebyid(pass1,id) as Response
        if (response.operation="success"){
            ToastAndroid.show('Password alterada com sucesso',ToastAndroid.SHORT);
            nav.goBack();
        }else{
            ToastAndroid.show('Erro!!',ToastAndroid.SHORT);
            console.log(response);
        }
    }
    
    useEffect(()=>{
       
    },[url,nome,mail,passwords,nota,edit])

    useEffect(()=>{
        const {id}= route.params as Params
        console.log(route.params)
        getdata(id); 
    },[])
    
    
    return(
        <>
            <PageHeader title='Info Password' headerMinus={
                <RectButton style={{borderRadius:10,width:32,height:32,alignItems:"center"}} onPress={handleBackButton}>
                <Ionicons name="ios-arrow-round-back" size={32} color="white" />
                </RectButton>  
            }
            headerPlus={
                <RectButton style={{borderRadius:10,width:32,height:32,alignItems:"center"}} onPress={handleEditButton}>
                <Feather name="edit-3" size={24} color="white" />
                </RectButton>
            }/>
            
            <View style={styles.container}>  
                <ScrollView
                disableScrollViewPanResponder
                showsVerticalScrollIndicator = {false}
                contentContainerStyle={{
                    paddingHorizontal:0,
                    paddingBottom:50,
                    
                }}
                >
                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
                    
                        <Input editable={edit} updatestate={seturl} title='URL' content={url}/>
                        <Input editable={edit} updatestate={setnome} title='Nome' content={nome}/>
                        <Input editable={edit} updatestate={setmail} title='Email/Username' content={mail}/>
                        <Input editable={edit} updatestate={setpasswords} title='Password' type="pass" content={passwords}/>
                        <Input editable={edit} updatestate={setnota} title='Notas' type="bio" content={nota}/>
                        
                    
                {edit &&(<RectButton onPress={handleSaveButton} style={styles.button}>
                        <Text style={styles.buttonText}>Guardar alterações</Text>
                    </RectButton>)}  
                    </KeyboardAvoidingView>
                </ScrollView>

           
            </View>
            
        </>
    );
}

export default EditPass;